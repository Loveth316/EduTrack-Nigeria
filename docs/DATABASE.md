# Database Schema Documentation

## Overview

EduTrack Nigeria uses PostgreSQL as the primary database. This document outlines the complete schema design.

## Entity Relationship Diagram (ERD)

```
┌─────────────┐
│   Schools   │
├─────────────┤
│ id (PK)     │
│ name        │
│ code        │
└─────────────┘
      ↓
┌─────────────────┐      ┌─────────────────┐
│     Users       │      │   Admins        │
├─────────────────┤      ├─────────────────┤
│ id (PK)         │      │ user_id (FK)    │
│ email           │      │ school_id (FK)  │
│ password        │      └─────────────────┘
│ first_name      │
│ last_name       │      ┌─────────────────┐
│ role            │      │   Teachers      │
│ school_id (FK)  │      ├─────────────────┤
│ created_at      │      │ user_id (FK)    │
│ updated_at      │      │ employee_id     │
└─────────────────┘      │ school_id (FK)  │
                         └─────────────────┘

      ┌─────────────────┐
      │   Students      │
      ├─────────────────┤
      │ user_id (FK)    │
      │ class_id (FK)   │
      │ admission_num   │
      │ gender          │
      │ dob             │
      └─────────────────┘

┌─────────────────┐      ┌──────────────────┐
│    Classes      │      │    Subjects      │
├─────────────────┤      ├──────────────────┤
│ id (PK)         │      │ id (PK)          │
│ name            │      │ name             │
│ level           │      │ code             │
│ form            │      │ teacher_id (FK)  │
│ school_id (FK)  │      │ school_id (FK)   │
│ teacher_id (FK) │      │ created_at       │
│ capacity        │      └──────────────────┘
└─────────────────┘

┌──────────────────┐     ┌──────────────────┐
│     Terms        │     │  Assessments     │
├──────────────────┤     ├──────────────────┤
│ id (PK)          │     │ id (PK)          │
│ name (Term 1-3)  │     │ title            │
│ start_date       │     │ type (CA1-3/Exam)│
│ end_date         │     │ class_id (FK)    │
│ academic_year    │     │ subject_id (FK)  │
│ school_id (FK)   │     │ term_id (FK)     │
└──────────────────┘     │ total_score      │
                         │ due_date         │
                         │ created_by (FK)  │
                         └──────────────────┘

┌──────────────────┐     ┌──────────────────┐
│     Results      │     │   ReportCards    │
├──────────────────┤     ├──────────────────┤
│ id (PK)          │     │ id (PK)          │
│ student_id (FK)  │     │ student_id (FK)  │
│ assessment_id(FK)│     │ term_id (FK)     │
│ score            │     │ class_id (FK)    │
│ feedback         │     │ total_score      │
│ submitted_at     │     │ position         │
└──────────────────┘     │ grade            │
                         │ promotion        │
                         │ comments         │
                         └──────────────────┘

┌──────────────────┐     ┌──────────────────┐
│   Attendance     │     │  StudentParent   │
├──────────────────┤     ├──────────────────┤
│ id (PK)          │     │ student_id (FK)  │
│ student_id (FK)  │     │ parent_id (FK)   │
│ class_id (FK)    │     │ relationship     │
│ date             │     │ is_primary       │
│ status           │     └──────────────────┘
│ remarks          │
└──────────────────┘
```

## Tables

### 1. Schools
```sql
CREATE TABLE schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  code VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(255),
  phone VARCHAR(20),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  website VARCHAR(255),
  established_year INTEGER,
  logo_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  middle_name VARCHAR(100),
  role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'teacher', 'student', 'parent')),
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  phone VARCHAR(20),
  avatar_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_school_id ON users(school_id);
CREATE INDEX idx_users_role ON users(role);
```

### 3. Teachers
```sql
CREATE TABLE teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  employee_id VARCHAR(50) NOT NULL UNIQUE,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  qualifications TEXT,
  specialization VARCHAR(255),
  date_of_birth DATE,
  gender VARCHAR(10),
  years_of_experience INTEGER,
  is_class_teacher BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_teachers_employee_id ON teachers(employee_id);
CREATE INDEX idx_teachers_school_id ON teachers(school_id);
```

### 4. Students
```sql
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  admission_number VARCHAR(50) NOT NULL UNIQUE,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  gender VARCHAR(10),
  date_of_birth DATE,
  blood_group VARCHAR(5),
  nationality VARCHAR(100),
  state_of_origin VARCHAR(100),
  registration_number VARCHAR(50),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_students_admission_number ON students(admission_number);
CREATE INDEX idx_students_class_id ON students(class_id);
CREATE INDEX idx_students_school_id ON students(school_id);
```

### 5. Parents
```sql
CREATE TABLE parents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  occupation VARCHAR(100),
  address TEXT,
  phone_number VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 6. StudentParent (Many-to-Many)
```sql
CREATE TABLE student_parent (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  parent_id UUID NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
  relationship VARCHAR(50), -- Father, Mother, Guardian, etc.
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, parent_id)
);

CREATE INDEX idx_student_parent_student ON student_parent(student_id);
CREATE INDEX idx_student_parent_parent ON student_parent(parent_id);
```

### 7. Classes
```sql
CREATE TABLE classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  level VARCHAR(50) NOT NULL, -- KG1, Primary 1, JSS1, SS1, etc.
  form VARCHAR(10), -- A, B, C, etc.
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  class_teacher_id UUID REFERENCES teachers(id) ON DELETE SET NULL,
  capacity INTEGER DEFAULT 50,
  academic_year VARCHAR(20), -- 2024/2025
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_classes_school_id ON classes(school_id);
CREATE INDEX idx_classes_level ON classes(level);
```

### 8. Subjects
```sql
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  code VARCHAR(20) NOT NULL,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES teachers(id) ON DELETE SET NULL,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(code, school_id)
);

CREATE INDEX idx_subjects_school_id ON subjects(school_id);
CREATE INDEX idx_subjects_class_id ON subjects(class_id);
CREATE INDEX idx_subjects_teacher_id ON subjects(teacher_id);
```

### 9. AcademicTerms
```sql
CREATE TABLE academic_terms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) NOT NULL, -- Term 1, Term 2, Term 3
  academic_year VARCHAR(20) NOT NULL, -- 2024/2025
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_terms_school_id ON academic_terms(school_id);
CREATE INDEX idx_terms_academic_year ON academic_terms(academic_year);
```

### 10. Assessments
```sql
CREATE TABLE assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  type VARCHAR(20) NOT NULL CHECK (type IN ('CA1', 'CA2', 'CA3', 'Exam')),
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  term_id UUID NOT NULL REFERENCES academic_terms(id) ON DELETE CASCADE,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  total_score INTEGER DEFAULT 100,
  description TEXT,
  due_date TIMESTAMP,
  created_by UUID NOT NULL REFERENCES teachers(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_assessments_class_id ON assessments(class_id);
CREATE INDEX idx_assessments_subject_id ON assessments(subject_id);
CREATE INDEX idx_assessments_term_id ON assessments(term_id);
CREATE INDEX idx_assessments_school_id ON assessments(school_id);
```

### 11. Results
```sql
CREATE TABLE results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  assessment_id UUID NOT NULL REFERENCES assessments(id) ON DELETE CASCADE,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  score DECIMAL(5, 2) NOT NULL,
  feedback TEXT,
  submitted_at TIMESTAMP,
  graded_at TIMESTAMP,
  graded_by UUID REFERENCES teachers(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, assessment_id)
);

CREATE INDEX idx_results_student_id ON results(student_id);
CREATE INDEX idx_results_assessment_id ON results(assessment_id);
CREATE INDEX idx_results_school_id ON results(school_id);
```

### 12. TermResults (Aggregated Results)
```sql
CREATE TABLE term_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  term_id UUID NOT NULL REFERENCES academic_terms(id) ON DELETE CASCADE,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  ca1_score DECIMAL(5, 2),
  ca2_score DECIMAL(5, 2),
  ca3_score DECIMAL(5, 2),
  exam_score DECIMAL(5, 2),
  total_score DECIMAL(5, 2),
  grade VARCHAR(1),
  position INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, subject_id, term_id)
);

CREATE INDEX idx_term_results_student ON term_results(student_id);
CREATE INDEX idx_term_results_term ON term_results(term_id);
```

### 13. ReportCards
```sql
CREATE TABLE report_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  term_id UUID NOT NULL REFERENCES academic_terms(id) ON DELETE CASCADE,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  total_score DECIMAL(5, 2),
  average_score DECIMAL(5, 2),
  position INTEGER,
  grade VARCHAR(1),
  promotion VARCHAR(50), -- Promoted, Not Promoted, Pending
  teacher_comments TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, term_id)
);

CREATE INDEX idx_report_cards_student ON report_cards(student_id);
CREATE INDEX idx_report_cards_term ON report_cards(term_id);
```

### 14. Attendance
```sql
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'late')),
  remarks TEXT,
  marked_by UUID REFERENCES teachers(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, date)
);

CREATE INDEX idx_attendance_student ON attendance(student_id);
CREATE INDEX idx_attendance_class ON attendance(class_id);
CREATE INDEX idx_attendance_date ON attendance(date);
```

### 15. LessonNotes
```sql
CREATE TABLE lesson_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
  school_id UUID NOT NULL REFERENCES schools(id) ON DELETE CASCADE,
  file_url VARCHAR(500),
  media_urls TEXT[], -- Array of URLs for videos, audio, images
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_lesson_notes_subject ON lesson_notes(subject_id);
CREATE INDEX idx_lesson_notes_class ON lesson_notes(class_id);
```

## Stored Procedures

### Calculate Term Grade
```sql
CREATE OR REPLACE FUNCTION calculate_grade(total_score DECIMAL)
RETURNS VARCHAR AS $$
BEGIN
  IF total_score >= 70 THEN RETURN 'A';
  ELSIF total_score >= 60 THEN RETURN 'B';
  ELSIF total_score >= 50 THEN RETURN 'C';
  ELSIF total_score >= 45 THEN RETURN 'D';
  ELSIF total_score >= 40 THEN RETURN 'E';
  ELSE RETURN 'F';
  END IF;
END;
$$ LANGUAGE plpgsql;
```

### Calculate Attendance Percentage
```sql
CREATE OR REPLACE FUNCTION calculate_attendance_percentage(
  p_student_id UUID,
  p_start_date DATE,
  p_end_date DATE
)
RETURNS DECIMAL AS $$
BEGIN
  RETURN (
    (SELECT COUNT(*) FROM attendance 
     WHERE student_id = p_student_id 
     AND status = 'present' 
     AND date BETWEEN p_start_date AND p_end_date)::DECIMAL / 
    (SELECT COUNT(*) FROM attendance 
     WHERE student_id = p_student_id 
     AND date BETWEEN p_start_date AND p_end_date)::DECIMAL
  ) * 100;
END;
$$ LANGUAGE plpgsql;
```

## Indexes for Performance

```sql
-- Search indexes
CREATE INDEX idx_users_email_school ON users(email, school_id);
CREATE INDEX idx_students_class_school ON students(class_id, school_id);
CREATE INDEX idx_results_student_assessment ON results(student_id, assessment_id);
CREATE INDEX idx_attendance_student_date ON attendance(student_id, date);

-- Date range queries
CREATE INDEX idx_attendance_date_range ON attendance(date DESC);
CREATE INDEX idx_results_created_at ON results(created_at DESC);

-- Foreign key indexes
CREATE INDEX idx_term_results_class ON term_results(class_id);
CREATE INDEX idx_report_cards_class ON report_cards(class_id);
```