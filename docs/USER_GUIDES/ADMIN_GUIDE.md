# Administrator Guide - EduTrack Nigeria

## Overview

Administrators have full control over the EduTrack Nigeria system including school settings, user management, class configuration, and report generation.

## Dashboard

The Admin Dashboard provides key metrics:
- Total Students
- Total Teachers
- Total Classes
- Pending Assessments
- System Health Status

### Accessing the Dashboard

1. Login with your admin credentials
2. Click "Dashboard" from the main menu
3. View system overview cards

## User Management

### Add New User

1. Go to **Settings > User Management**
2. Click "Add User" button
3. Fill in user information:
   - Email
   - First Name
   - Last Name
   - Role (Admin, Teacher, Student, Parent)
   - School
4. Set temporary password
5. Click "Create User"
6. User receives email with login credentials

### Edit User

1. Go to **Settings > User Management**
2. Find user in the list
3. Click "Edit" button
4. Update information as needed
5. Click "Save Changes"

### Deactivate User

1. Go to **Settings > User Management**
2. Find user in the list
3. Click "Deactivate" button
4. Confirm deactivation

### Bulk Upload Users

1. Go to **Settings > Import Users**
2. Download CSV template
3. Fill in user data following the template format
4. Upload CSV file
5. Preview and confirm upload
6. System sends credentials to all new users

## School Configuration

### Setup School Information

1. Go to **Settings > School Settings**
2. Update:
   - School Name
   - School Code
   - Contact Information
   - Website
   - Logo
3. Click "Save"

### Academic Year Settings

1. Go to **Settings > Academic Year**
2. Create new academic year
3. Set dates for Term 1, Term 2, Term 3
4. Mark as current academic year
5. Save configuration

## Class Management

### Create Class

1. Go to **Classes > Create New Class**
2. Enter class details:
   - Class Name (e.g., "Primary 5A")
   - Level (KG1, Primary 1-6, JSS1-3, SS1-3)
   - Form (A, B, C, etc.)
   - Class Teacher
   - Capacity
3. Click "Create"

### Add Students to Class

1. Go to **Classes > [Class Name]**
2. Click "Add Students"
3. Search and select students
4. Click "Add Selected"

### Assign Teachers

1. Go to **Classes > [Class Name]**
2. Click "Edit"
3. Assign class teacher and subject teachers
4. Save changes

## Subject Management

### Add Subject to School

1. Go to **Settings > Subjects**
2. Click "Add Subject"
3. Enter:
   - Subject Name
   - Subject Code
   - Teacher (if assigning)
4. Save

## Assessment Configuration

### Setup Continuous Assessment

1. Go to **Settings > Continuous Assessment**
2. Set CA values:
   - CA1 Score (default: 15)
   - CA2 Score (default: 15)
   - CA3 Score (default: 10)
   - Exam Score (default: 60)
3. Save configuration

## Report Generation

### Generate Term Report

1. Go to **Reports > Generate Report**
2. Select:
   - Academic Year
   - Term
   - Class
3. Click "Generate"
4. View report in table format
5. Export as PDF or Excel

### Generate Transcript

1. Go to **Reports > Transcript**
2. Search for student
3. Select academic year range
4. Click "Generate"
5. Export as PDF

### Attendance Report

1. Go to **Reports > Attendance**
2. Select date range
3. Choose class or individual student
4. Generate report
5. Download if needed

## Backup & Data Management

### Create Backup

1. Go to **Settings > Backup**
2. Click "Create Backup Now"
3. System generates full database backup
4. Download backup file

### Schedule Automatic Backups

1. Go to **Settings > Backup**
2. Enable "Auto Backup"
3. Set frequency (Daily, Weekly, Monthly)
4. Save settings

## System Monitoring

### Check System Health

1. Go to **Settings > System Health**
2. View:
   - Database Status
   - Server Load
   - Storage Usage
   - Active Users

### View Activity Logs

1. Go to **Settings > Activity Logs**
2. Filter by:
   - Date Range
   - User
   - Action Type
3. View detailed logs

## Troubleshooting

### Reset User Password

1. Go to **User Management**
2. Find user
3. Click "Reset Password"
4. User receives email with new temporary password

### Common Issues

**Issue**: Cannot upload users
- Solution: Check CSV format matches template

**Issue**: Assessment scores not calculating
- Solution: Verify CA configuration in settings

**Issue**: Report not generating
- Solution: Ensure term and class data is complete