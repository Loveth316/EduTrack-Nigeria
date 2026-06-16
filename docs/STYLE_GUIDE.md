# Style Guide - EduTrack Nigeria

## Color Usage Guide

### Primary Action
- Use green (#22c55e) for:
  - Primary buttons
  - Positive actions (Submit, Save, Create)
  - Success messages
  - Progress indicators

### Secondary Action
- Use blue (#0ea5e9) for:
  - Secondary buttons
  - Links
  - Information messages
  - Hover states

### Warning/Caution
- Use amber (#f59e0b) for:
  - Warning alerts
  - Important notices
  - Pending status
  - Attention needed

### Error/Danger
- Use red (#ef4444) for:
  - Error messages
  - Delete actions
  - Critical alerts
  - Negative states

## Text Styling

### Headings
```css
/* Page Title */
font-size: 28px;
font-weight: 700;
line-height: 1.2;
color: #1f2937;

/* Section Title */
font-size: 20px;
font-weight: 600;
line-height: 1.4;
color: #1f2937;

/* Card Title */
font-size: 18px;
font-weight: 600;
line-height: 1.5;
color: #1f2937;
```

### Body Text
```css
/* Primary */
font-size: 16px;
font-weight: 400;
line-height: 1.6;
color: #374151;

/* Secondary */
font-size: 14px;
font-weight: 400;
line-height: 1.5;
color: #6b7280;

/* Label */
font-size: 12px;
font-weight: 500;
line-height: 1.4;
color: #4b5563;
```

## Component Spacing

### Card Spacing
```
Outer margin: 16px
Internal padding: 24px
Element spacing: 16px
```

### Section Spacing
```
Top margin: 32px
Bottom margin: 32px
Internal padding: 24px
```

### Form Field Spacing
```
Label to input: 8px
Field to field: 16px
Field to button: 24px
```

## Button States

### Primary Button
```
Default: #22c55e
Hover: #16a34a
Active: #15803d
Disabled: #d1d5db (gray)
Disabled text: #9ca3af
```

### Secondary Button
```
Default: #0ea5e9
Hover: #0284c7
Active: #0369a1
Disabled: #d1d5db
Disabled text: #9ca3af
```

## Icon Guidelines

### Icon Sizes
- **24px**: Primary icons (buttons, navigation)
- **20px**: Secondary icons (input fields)
- **16px**: Tertiary icons (labels, badges)
- **32px**: Large icons (empty states, illustrations)

### Icon Colors
- **Active**: #22c55e
- **Inactive**: #d1d5db
- **Hover**: #16a34a
- **Error**: #ef4444
- **Warning**: #f59e0b

## Form Field Styling

### Input Field
```
Height: 44px
Padding: 12px 16px
Border: 1px solid #d1d5db
Border-radius: 8px
Font-size: 16px
Background: #ffffff

Focus:
Border-color: #22c55e
Box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1)

Disabled:
Background: #f3f4f6
Color: #9ca3af
Cursor: not-allowed
```

### Select Dropdown
```
Height: 44px
Padding: 12px 16px
Border: 1px solid #d1d5db
Border-radius: 8px
Background: #ffffff
Arrow icon: #6b7280
```

### Checkbox
```
Size: 20px × 20px
Border: 2px solid #d1d5db
Border-radius: 4px
Checked background: #22c55e
Focus ring: 3px rgba(34, 197, 94, 0.1)
```

### Radio Button
```
Size: 20px diameter
Border: 2px solid #d1d5db
Border-radius: 50%
Selected dot: #22c55e
Focus ring: 3px rgba(34, 197, 94, 0.1)
```

## Table Styling

### Header Row
```
Background: #f9fafb
Border-bottom: 2px solid #e5e7eb
Font-weight: 600
Font-size: 12px
Color: #4b5563
Padding: 12px 16px
```

### Body Rows
```
Border-bottom: 1px solid #e5e7eb
Padding: 12px 16px
Alternating background: None (keep white)
Hover background: #f9fafb
```

### Selected Row
```
Background: #eff6ff
Border-left: 4px solid #22c55e
```

## Badge/Chip Styling

### Success Badge
```
Background: #dcfce7
Text: #166534
Border: 1px solid #bbf7d0
```

### Warning Badge
```
Background: #fef3c7
Text: #92400e
Border: 1px solid #fcd34d
```

### Error Badge
```
Background: #fee2e2
Text: #991b1b
Border: 1px solid #fca5a5
```

### Info Badge
```
Background: #cffafe
Text: #164e63
Border: 1px solid #a5f3fc
```

## Sidebar Navigation

### Styling
```
Background: #1f2937 (dark gray)
Text: #ffffff (white)
Width: 256px (on desktop)
Active item background: #22c55e
Hover item background: #374151
Icon size: 20px
Padding per item: 12px 16px
```

## Responsive Typography

### Mobile
```
Display: 24px
Heading 1: 20px
Heading 2: 18px
Heading 3: 16px
Body: 14px
```

### Tablet
```
Display: 28px
Heading 1: 24px
Heading 2: 20px
Heading 3: 18px
Body: 16px
```

### Desktop
```
Display: 36px
Heading 1: 28px
Heading 2: 24px
Heading 3: 20px
Body: 16px
```