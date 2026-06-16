# Component Library - EduTrack Nigeria

## Overview

This document defines all reusable UI components with implementation examples.

## Button Component

### Variants
- Primary (green background)
- Secondary (blue background)
- Outline (transparent with border)
- Ghost (no background, text only)
- Danger (red background)

### Sizes
- Small: 32px height
- Medium: 40px height (default)
- Large: 48px height

### States
- Default
- Hover
- Active (pressed)
- Disabled
- Loading

### Props
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
}
```

## Card Component

### Variants
- Default
- Elevated (shadow)
- Outlined (border)
- Filled (colored background)

### Props
```tsx
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  hover?: boolean;
  onClick?: () => void;
  children: ReactNode;
}
```

## Input Component

### Variants
- Text
- Email
- Password
- Number
- Date
- Textarea

### Props
```tsx
interface InputProps {
  type: 'text' | 'email' | 'password' | 'number' | 'date';
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  icon?: ReactNode;
  onChange?: (value: string) => void;
  onBlur?: () => void;
}
```

## Select/Dropdown Component

### Props
```tsx
interface SelectProps {
  label?: string;
  options: Option[];
  value?: string;
  placeholder?: string;
  searchable?: boolean;
  clearable?: boolean;
  multiple?: boolean;
  error?: string;
  disabled?: boolean;
  onChange?: (value: string | string[]) => void;
}

interface Option {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}
```

## Badge/Chip Component

### Variants
- Success (green)
- Warning (amber)
- Error (red)
- Info (blue)
- Default (gray)

### Props
```tsx
interface BadgeProps {
  variant: 'success' | 'warning' | 'error' | 'info' | 'default';
  size?: 'small' | 'medium' | 'large';
  closable?: boolean;
  onClose?: () => void;
  children: string;
}
```

## Modal/Dialog Component

### Props
```tsx
interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  size?: 'small' | 'medium' | 'large';
  closeButton?: boolean;
  backdrop?: boolean;
}
```

## Table Component

### Features
- Sorting
- Pagination
- Selection (checkboxes)
- Expandable rows
- Fixed header

### Props
```tsx
interface TableProps {
  columns: Column[];
  data: any[];
  sortable?: boolean;
  selectable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  onSort?: (field: string, order: 'asc' | 'desc') => void;
  onSelect?: (rows: any[]) => void;
  onPageChange?: (page: number) => void;
}

interface Column {
  key: string;
  header: string;
  sortable?: boolean;
  width?: string;
  render?: (value: any, row: any) => ReactNode;
}
```

## Alert/Toast Component

### Variants
- Success
- Error
- Warning
- Info

### Props
```tsx
interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
  onDismiss?: () => void;
  autoClose?: number; // ms
}
```

## Pagination Component

### Props
```tsx
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize?: number;
  totalItems?: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  showPageSizeOptions?: boolean;
}
```

## Loading States

### Spinner Component
```tsx
interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  fullScreen?: boolean;
}
```

### Skeleton Loader
```tsx
interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  count?: number;
  circle?: boolean;
}
```

## Form Component

### Features
- Field validation
- Error messages
- Field grouping
- Conditional fields

### Props
```tsx
interface FormProps {
  onSubmit: (data: any) => void;
  initialValues?: any;
  validation?: any; // Joi schema or similar
  children: ReactNode;
  layout?: 'vertical' | 'horizontal';
}
```

## Navbar Component

### Props
```tsx
interface NavbarProps {
  logo?: ReactNode;
  title?: string;
  items?: NavItem[];
  userMenu?: UserMenu;
  sticky?: boolean;
  variant?: 'light' | 'dark';
}

interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
  active?: boolean;
  submenu?: NavItem[];
}
```

## Sidebar Component

### Props
```tsx
interface SidebarProps {
  items: SidebarItem[];
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

interface SidebarItem {
  id: string;
  label: string;
  icon: ReactNode;
  href?: string;
  submenu?: SidebarItem[];
  badge?: number;
}
```

## Avatar Component

### Props
```tsx
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  initials?: string;
  status?: 'online' | 'offline' | 'away';
  onClick?: () => void;
}
```

## Progress Component

### Props
```tsx
interface ProgressProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  showLabel?: boolean;
  color?: 'success' | 'warning' | 'error' | 'info';
  animated?: boolean;
  size?: 'small' | 'medium' | 'large';
}
```

## Tag Component

### Props
```tsx
interface TagProps {
  label: string;
  color?: string;
  icon?: ReactNode;
  closable?: boolean;
  onClose?: () => void;
  onClick?: () => void;
}
```

## Typography Components

### Heading
```tsx
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}
```

### Text
```tsx
interface TextProps {
  variant?: 'body' | 'caption' | 'label';
  size?: 'small' | 'medium' | 'large';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: string;
  children: ReactNode;
}
```

## Divider Component

### Props
```tsx
interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  text?: string;
  dashed?: boolean;
  margin?: string;
}
```