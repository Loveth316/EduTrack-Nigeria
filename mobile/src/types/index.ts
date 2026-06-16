// src/types/index.ts

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  schoolId: string;
  avatar?: string;
}

export interface Student extends User {
  admissionNumber: string;
  classId: string;
  classLevel: string;
  gender: string;
  dateOfBirth: string;
}

export interface Assessment {
  id: string;
  title: string;
  type: 'CA1' | 'CA2' | 'CA3' | 'Exam';
  totalScore: number;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
}

export interface Result {
  id: string;
  studentId: string;
  assessmentId: string;
  score: number;
  feedback: string;
  submittedAt: string;
}

export interface ReportCard {
  id: string;
  studentId: string;
  termId: string;
  totalScore: number;
  position: number;
  grade: string;
  promotion: 'Promoted' | 'Not Promoted' | 'Pending';
  teacherComments: string;
}

export interface Attendance {
  id: string;
  studentId: string;
  date: string;
  status: 'present' | 'absent' | 'late';
}