# UI Screen Specifications - EduTrack Nigeria

## 1. Authentication Screens

### Login Screen
**Path**: `/auth/login`
**Mobile**: Full screen
**Desktop**: Centered modal (400px width)

**Components**:
- EduTrack Nigeria logo (top center)
- Email input field
- Password input field
- "Remember me" checkbox
- "Forgot Password?" link
- Login button (primary)
- "Don't have account?" link with signup
- Terms of service text

**Responsive**:
- Mobile: Full width with padding
- Tablet: Centered, 450px width
- Desktop: Centered, 500px width

### Registration Screen
**Path**: `/auth/register`

**Components**:
- Step indicator (1 of 3)
- Form fields:
  - First Name
  - Last Name
  - Email
  - Password
  - Confirm Password
  - School selection dropdown
  - Role selection (Student/Teacher/Parent)
- Password strength indicator
- "Next" button (primary)
- "Already have account?" link

### Forgot Password Screen
**Path**: `/auth/forgot-password`

**Components**:
- Email input
- Submit button
- Success message after submission
- "Back to login" link

---

## 2. Dashboard Screens

### Student Dashboard
**Path**: `/dashboard`
**Layout**: Sidebar + Main Content

**Top Section**:
- Welcome message with student name
- Current class display (e.g., "Primary 5A")
- Quick stats cards:
  - Current Grade (large)
  - Class Position
  - Attendance Rate
  - Pending Assessments

**Middle Section**:
- Recent Results table
- Upcoming Assessments
- Latest Announcements

**Bottom Section**:
- Performance chart (line chart by term)
- Quick action buttons

### Teacher Dashboard
**Path**: `/dashboard`

**Top Section**:
- Welcome message
- Quick stats:
  - Total Students
  - Pending Grading
  - Classes Taught
  - Today's Assessments

**Middle Section**:
- Classes overview (cards)
- Today's Schedule
- Recent Assessment Submissions

**Bottom Section**:
- Class Performance Overview

### Admin Dashboard
**Path**: `/dashboard`

**Top Section**:
- System Health Status
- Key Metrics:
  - Total Users
  - Total Students
  - Total Teachers
  - Active Classes

**Middle Section**:
- Recent Activities
- System Alerts
- User Activity Chart

**Bottom Section**:
- Storage Usage
- Database Status

---

## 3. Class Management Screens

### Classes List
**Path**: `/classes`

**Layout**:
- Search/filter bar at top
- List/Grid toggle
- Class cards with:
  - Class name (e.g., "Primary 5A")
  - Class teacher name
  - Student count
  - Level indicator
  - Actions menu (View, Edit, Delete)

### Class Details
**Path**: `/classes/:id`

**Tabs**:
1. **Students**
   - Student list table
   - Add student button
   - Export button

2. **Subjects**
   - Subject list
   - Add subject button
   - Teacher assignments

3. **Schedule**
   - Weekly schedule view
   - Subject and teacher per period

4. **Assessments**
   - Upcoming assessments
   - Past assessments

5. **Settings**
   - Class info form
   - Teacher assignment
   - Class capacity

---

## 4. Assessment Screens

### Assessments List
**Path**: `/assessments`

**Filters**:
- Class dropdown
- Subject dropdown
- Term dropdown
- Status (Pending, Open, Closed)

**Cards/Table**:
- Assessment title
- Type badge (CA1, CA2, CA3, Exam)
- Subject name
- Class name
- Due date
- Status
- Action buttons

### Create Assessment
**Path**: `/assessments/create`

**Form Fields**:
- Assessment title (text input)
- Type (dropdown: CA1, CA2, CA3, Exam)
- Subject (dropdown)
- Class (dropdown)
- Total score (number input)
- Due date (date picker)
- Description (text area)
- Upload materials button
- Submit button

### Assessment Details
**Path**: `/assessments/:id`

**Sections**:
1. Assessment Info (read-only)
2. Materials (file list)
3. Submissions
   - Student name
   - Submission status
   - Submission time
   - Download button
   - Grade score
   - Feedback
4. Statistics
   - Average score
   - Highest score
   - Lowest score
   - Distribution chart

---

## 5. Results & Grading Screens

### Results Input
**Path**: `/results/input`

**Layout**:
- Assessment selector (dropdown)
- Class selector (dropdown)
- Table with columns:
  - Student Name
  - Admission Number
  - Score (editable)
  - Feedback (editable)
  - Save button (per row)

**Bulk Input Option**:
- Download template button
- Upload spreadsheet button
- Preview and confirm

### Student Results
**Path**: `/results/student/:id`

**Filters**:
- Term dropdown
- Subject dropdown (optional)

**Display**:
- Term cards with:
  - Subject name
  - CA1, CA2, CA3 scores
  - Exam score
  - Total score
  - Grade letter
  - Teacher feedback

### Report Card
**Path**: `/report-cards/:id`

**Header**:
- Student photo
- Student name
- Admission number
- Class
- Term
- Academic year

**Body**:
- Subjects table:
  - Subject name
  - CA1, CA2, CA3
  - Exam
  - Total
  - Grade
- Summary:
  - Total score
  - Average
  - Class position
  - Overall grade
  - Promotion status
  - Teacher comments

**Footer**:
- Signatures area
- Print button
- Download PDF button

---

## 6. Attendance Screens

### Mark Attendance
**Path**: `/attendance/mark`

**Layout**:
- Date picker (default: today)
- Class selector (dropdown)
- Student list with toggles:
  - ✓ Present
  - ✗ Absent
  - ⚠ Late
- Remarks field (per student)
- Submit button

### Attendance Report
**Path**: `/attendance/report`

**Filters**:
- Class dropdown
- Date range picker
- Student search

**Display**:
- Calendar view or table view toggle
- Table columns:
  - Student name
  - Present days
  - Absent days
  - Late days
  - Attendance %
- Export buttons (PDF, Excel)

---

## 7. Lesson Notes Screens

### Lesson Notes List
**Path**: `/lesson-notes`

**Filters**:
- Subject dropdown
- Class dropdown
- Search bar

**Cards**:
- Title
- Subject tag
- Date created
- Preview thumbnail
- View button
- Edit button (for creator)
- Delete button (for creator)

### Create/Edit Lesson Note
**Path**: `/lesson-notes/create` or `/lesson-notes/:id/edit`

**Form**:
- Title input
- Subject dropdown
- Class dropdown
- Rich text editor for content
- Media upload section:
  - Images
  - Videos
  - Audio
  - PDF documents
- Preview button
- Publish button
- Draft button

### View Lesson Note
**Path**: `/lesson-notes/:id`

**Layout**:
- Header:
  - Title
  - Subject
  - Date created
  - Teacher name
- Content area (formatted text)
- Media gallery
- Download materials button
- Edit button (for creator)

---

## 8. User Profile Screens

### Student Profile
**Path**: `/profile`

**Sections**:
1. Personal Info
   - Profile photo (editable)
   - Name
   - Admission number
   - Gender
   - Date of birth
   - Blood group

2. Academic Info
   - Current class
   - Current term
   - Class position
   - Overall grade
   - Attendance rate

3. Parent Info
   - Parent names
   - Contact numbers

4. Account Settings
   - Email
   - Change password button
   - Logout button

### Teacher Profile
**Path**: `/profile`

**Sections**:
1. Personal Info
   - Profile photo (editable)
   - Name
   - Employee ID
   - Specialization
   - Qualifications
   - Years of experience

2. Classes & Subjects
   - Classes taught (list)
   - Subjects taught (list)

3. Account Settings
   - Email
   - Change password
   - Logout

---

## 9. Mobile-Specific Screens

### Mobile Bottom Navigation
- Dashboard (home icon)
- Assessments (clipboard icon)
- Results (chart icon)
- Profile (user icon)

### Mobile Menu
- Hamburger menu at top
- Navigation items:
  - Classes
  - Attendance
  - Lesson Notes
  - Messages
  - Settings
  - Logout

### Mobile Forms
- One field per screen when possible
- Large input fields (48px minimum height)
- Clear submit buttons
- Progress indicators for multi-step forms

---

## 10. Common UI Patterns

### Modals
- Centered overlay
- Close button (X) top right
- Title
- Content
- Action buttons at bottom
- Backdrop click to close (optional)

### Alerts/Toasts
- Position: Top right corner
- Auto-dismiss after 5 seconds
- Types: Success, Error, Warning, Info
- Dismiss button (X)

### Loading States
- Skeleton loaders for content
- Spinner for actions
- "Loading..." text

### Empty States
- Illustration
- Friendly message
- Call-to-action button
- Example: "No assessments yet. Create one to get started."

### Pagination
- Previous/Next buttons
- Page numbers
- "Go to page" input
- Items per page selector
- Total count display

### Search
- Search icon in input
- Clear (X) button when text entered
- Autocomplete suggestions
- Search filters

---

## 11. Accessibility Considerations

1. **Focus Management**
   - Visible focus indicators on all interactive elements
   - Logical tab order
   - Skip to main content link

2. **Color**
   - Never rely on color alone
   - Use icons/text with colors
   - Sufficient contrast ratios

3. **Text**
   - Clear, descriptive labels
   - Error messages with suggestions
   - Readable font sizes
   - Adequate line height (1.5x)

4. **Images**
   - Alt text for all images
   - Decorative images marked as such
   - Charts have data tables

5. **Forms**
   - Label each field
   - Mark required fields
   - Show error messages clearly
   - Validation on blur, not just submit