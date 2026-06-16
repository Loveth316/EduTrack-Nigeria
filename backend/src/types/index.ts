// src/types/index.ts

export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  schoolId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IStudent extends IUser {
  admissionNumber: string;
  classId: string;
  classLevel: string;
  gender: string;
  dateOfBirth: Date;
  parentIds: string[];
}

export interface ITeacher extends IUser {
  employeeId: string;
  subjectIds: string[];
  classIds: string[];
  qualifications: string[];
}

export interface IParent extends IUser {
  occupation: string;
  phoneNumber: string;
  studentIds: string[];
}

export interface IClass {
  id: string;
  name: string;
  level: string; // KG1, Primary 1, JSS1, SS1, etc.
  form: string; // A, B, C, etc.
  schoolId: string;
  classTeacherId: string;
  capacity: number;
  studentCount: number;
}

export interface ISubject {
  id: string;
  name: string;
  code: string;
  schoolId: string;
  teacherId: string;
}

export interface ITerm {
  id: string;
  name: string; // Term 1, Term 2, Term 3
  startDate: Date;
  endDate: Date;
  schoolId: string;
  academicYear: string;
}

export interface IAssessment {
  id: string;
  title: string;
  type: 'CA1' | 'CA2' | 'CA3' | 'Exam';
  classId: string;
  subjectId: string;
  termId: string;
  totalScore: number;
  dueDate: Date;
  createdBy: string; // Teacher ID
}

export interface IResult {
  id: string;
  studentId: string;
  assessmentId: string;
  score: number;
  feedback: string;
  submittedAt: Date;
}

export interface IReportCard {
  id: string;
  studentId: string;
  termId: string;
  classId: string;
  totalScore: number;
  position: number;
  grade: string; // A, B, C, D, E, F
  promotion: 'Promoted' | 'Not Promoted' | 'Pending';
  teacherComments: string;
}

export interface IAttendance {
  id: string;
  studentId: string;
  classId: string;
  date: Date;
  status: 'present' | 'absent' | 'late';
  remark: string;
}