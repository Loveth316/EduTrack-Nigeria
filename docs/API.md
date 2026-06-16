# EduTrack Nigeria - API Documentation

## Base URL
```
http://localhost:5000/api/v1
```

## Authentication

All endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Response Format

All responses follow this format:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ },
  "error": null
}
```

## Error Codes

- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## Authentication Endpoints

### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response 200:
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": { /* user object */ },
    "role": "teacher"
  }
}
```

### Register
```
POST /auth/register
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "student",
  "schoolId": "uuid"
}

Response 201:
{
  "success": true,
  "message": "User registered successfully",
  "data": { /* user object */ }
}
```

---

## Dashboard Endpoints

### Get Dashboard Data
```
GET /dashboard
Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "data": {
    "totalStudents": 150,
    "totalTeachers": 25,
    "attendanceRate": 92.5,
    "pendingAssessments": 8,
    "averagePerformance": 78.3
  }
}
```

---

## Student Endpoints

### Get All Students
```
GET /students?classId=uuid&page=1&limit=20

Response 200:
{
  "success": true,
  "data": {
    "students": [ /* array of students */ ],
    "total": 150,
    "page": 1,
    "limit": 20
  }
}
```

### Get Student by ID
```
GET /students/:id

Response 200:
{
  "success": true,
  "data": {
    "id": "uuid",
    "admissionNumber": "ADM/2024/001",
    "firstName": "John",
    "lastName": "Doe",
    "classId": "uuid",
    "gender": "Male",
    "dateOfBirth": "2012-05-15"
  }
}
```

### Create Student
```
POST /students
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "gender": "Male",
  "dateOfBirth": "2012-05-15",
  "classId": "uuid",
  "admissionNumber": "ADM/2024/001"
}

Response 201:
{
  "success": true,
  "message": "Student created successfully",
  "data": { /* student object */ }
}
```

### Update Student
```
PUT /students/:id
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "classId": "new-uuid"
}

Response 200:
{
  "success": true,
  "message": "Student updated successfully",
  "data": { /* updated student object */ }
}
```

### Delete Student
```
DELETE /students/:id

Response 200:
{
  "success": true,
  "message": "Student deleted successfully"
}
```

---

## Assessment Endpoints

### Get All Assessments
```
GET /assessments?classId=uuid&subjectId=uuid&termId=uuid

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Mathematics Quiz",
      "type": "CA1",
      "totalScore": 100,
      "dueDate": "2024-06-20"
    }
  ]
}
```

### Create Assessment
```
POST /assessments
Content-Type: application/json

{
  "title": "English Essay",
  "type": "CA2",
  "classId": "uuid",
  "subjectId": "uuid",
  "termId": "uuid",
  "totalScore": 100,
  "dueDate": "2024-06-25"
}

Response 201:
{
  "success": true,
  "message": "Assessment created successfully",
  "data": { /* assessment object */ }
}
```

### Submit Assessment
```
POST /assessments/:id/submit
Content-Type: multipart/form-data

form data:
- file: (document)
- feedback: (text)

Response 200:
{
  "success": true,
  "message": "Assessment submitted successfully"
}
```

---

## Results Endpoints

### Get Student Results
```
GET /results?studentId=uuid&termId=uuid

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "subject": "Mathematics",
      "ca1": 15,
      "ca2": 18,
      "ca3": 17,
      "exam": 72,
      "total": 122,
      "grade": "A",
      "feedback": "Excellent performance"
    }
  ]
}
```

### Input Result Scores
```
POST /results
Content-Type: application/json

{
  "studentId": "uuid",
  "assessmentId": "uuid",
  "score": 85,
  "feedback": "Great work!"
}

Response 201:
{
  "success": true,
  "message": "Result recorded successfully",
  "data": { /* result object */ }
}
```

---

## Report Card Endpoints

### Get Report Card
```
GET /report-cards?studentId=uuid&termId=uuid

Response 200:
{
  "success": true,
  "data": {
    "id": "uuid",
    "studentName": "John Doe",
    "class": "Primary 5A",
    "term": "Term 1",
    "academicYear": "2024/2025",
    "results": [
      {
        "subject": "Mathematics",
        "ca1": 15,
        "ca2": 18,
        "ca3": 17,
        "exam": 72,
        "total": 122,
        "grade": "A"
      }
    ],
    "totalScore": 950,
    "position": 3,
    "grade": "A",
    "promotion": "Promoted",
    "comments": "Excellent performance throughout the term"
  }
}
```

### Generate Report Card PDF
```
GET /report-cards/:id/pdf

Response 200:
(PDF file download)
```

---

## Attendance Endpoints

### Mark Attendance
```
POST /attendance/mark
Content-Type: application/json

{
  "classId": "uuid",
  "date": "2024-06-16",
  "attendance": [
    {
      "studentId": "uuid",
      "status": "present"
    },
    {
      "studentId": "uuid",
      "status": "absent",
      "remarks": "Sick"
    }
  ]
}

Response 200:
{
  "success": true,
  "message": "Attendance marked successfully"
}
```

### Get Attendance Report
```
GET /attendance/report?classId=uuid&startDate=2024-01-01&endDate=2024-06-30

Response 200:
{
  "success": true,
  "data": {
    "class": "Primary 5A",
    "period": "2024-01-01 to 2024-06-30",
    "students": [
      {
        "studentId": "uuid",
        "name": "John Doe",
        "presentDays": 150,
        "absentDays": 8,
        "lateDays": 2,
        "percentage": 94.3
      }
    ]
  }
}
```

---

## Lesson Notes Endpoints

### Get Lesson Notes
```
GET /lesson-notes?subjectId=uuid&classId=uuid

Response 200:
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Introduction to Algebra",
      "subject": "Mathematics",
      "content": "Detailed lesson content...",
      "mediaUrls": [
        "https://example.com/video1.mp4",
        "https://example.com/image1.jpg"
      ],
      "createdAt": "2024-06-16"
    }
  ]
}
```

### Create Lesson Note
```
POST /lesson-notes
Content-Type: multipart/form-data

form data:
- title: "Introduction to Algebra"
- content: "Lesson content..."
- subjectId: "uuid"
- classId: "uuid"
- files: (image/video files)

Response 201:
{
  "success": true,
  "message": "Lesson note created successfully",
  "data": { /* lesson note object */ }
}
```

---

## Rate Limiting

- **API Rate Limit**: 1000 requests per hour
- **Authentication Rate Limit**: 10 requests per minute per IP

## Pagination

List endpoints support pagination:
- `page`: Current page (default: 1)
- `limit`: Items per page (default: 20, max: 100)

## Filtering

Filters can be applied using query parameters:
```
GET /students?role=student&status=active&page=1&limit=20
```