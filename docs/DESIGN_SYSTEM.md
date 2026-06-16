# UI/UX Design System - EduTrack Nigeria

## Design Philosophy

- **Clean & Modern**: Minimalist approach with maximum usability
- **Accessibility**: WCAG 2.1 Level AA compliant
- **Consistency**: Unified design language across web and mobile
- **Educational**: Warm, welcoming colors suitable for learning environment
- **Responsive**: Mobile-first design that scales to desktop

## Color Palette

### Primary Colors
- **Green (Primary)**: `#22c55e` - Growth, learning, success
- **Blue (Secondary)**: `#0ea5e9` - Trust, information, calm
- **Warm Accent**: `#f59e0b` - Warnings, important notices
- **Danger Red**: `#ef4444` - Errors, critical alerts

### Neutral Colors
- **White**: `#ffffff` - Backgrounds, content areas
- **Light Gray**: `#f9fafb` - Secondary backgrounds
- **Medium Gray**: `#d1d5db` - Borders, dividers
- **Dark Gray**: `#374151` - Secondary text
- **Black**: `#1f2937` - Primary text

### Status Colors
- **Success**: `#22c55e` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Error**: `#ef4444` (Red)
- **Info**: `#0ea5e9` (Blue)
- **Pending**: `#8b5cf6` (Purple)

## Typography

### Font Family
- **Primary**: Inter (sans-serif)
- **Fallback**: System fonts, sans-serif

### Font Sizes
- **Display Large**: 36px (headings)
- **Display Medium**: 28px (page titles)
- **Heading 1**: 24px (section titles)
- **Heading 2**: 20px (subsection titles)
- **Heading 3**: 18px (card titles)
- **Body Large**: 16px (primary text)
- **Body Medium**: 14px (secondary text)
- **Body Small**: 12px (labels, captions)
- **Caption**: 11px (fine print)

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Spacing System

```
4px   (0.25rem)
8px   (0.5rem)
12px  (0.75rem)
16px  (1rem)
24px  (1.5rem)
32px  (2rem)
48px  (3rem)
64px  (4rem)
```

## Components

### Buttons

**Primary Button**
- Background: `#22c55e`
- Text Color: `#ffffff`
- Padding: `12px 16px`
- Border Radius: `8px`
- Font Weight: 600
- Hover: `#16a34a` (darker green)

**Secondary Button**
- Background: `#e0f2fe`
- Text Color: `#0369a1`
- Padding: `12px 16px`
- Border Radius: `8px`
- Font Weight: 600
- Hover: `#cffafe`

**Outline Button**
- Border: `2px solid #d1d5db`
- Background: transparent
- Text Color: `#374151`
- Padding: `10px 14px`
- Border Radius: `8px`
- Hover: `#f3f4f6`

### Cards

- Background: `#ffffff`
- Border Radius: `12px`
- Box Shadow: `0 1px 3px 0 rgba(0, 0, 0, 0.1)`
- Padding: `24px`
- Border: `1px solid #e5e7eb`

### Input Fields

- Background: `#ffffff`
- Border: `1px solid #d1d5db`
- Border Radius: `8px`
- Padding: `12px 16px`
- Focus Border Color: `#22c55e`
- Focus Ring: `2px #86efac`

### Status Badges

**Pending**
- Background: `#fef3c7`
- Text Color: `#92400e`
- Border Radius: `20px`
- Padding: `6px 12px`
- Font Size: 12px

**Submitted**
- Background: `#dcfce7`
- Text Color: `#166534`

**Graded**
- Background: `#cffafe`
- Text Color: `#164e63`

**Absent**
- Background: `#fee2e2`
- Text Color: `#991b1b`

## Layout System

### Grid
- Desktop: 12-column grid
- Tablet: 8-column grid
- Mobile: 4-column grid
- Gutter: 24px

### Breakpoints
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px - 1440px
- Wide: 1441px+

### Container Widths
- Mobile: 100% (with padding)
- Tablet: 704px
- Desktop: 960px
- Wide: 1200px

## Shadows

```
Shadow XS: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
Shadow SM: 0 1px 3px 0 rgba(0, 0, 0, 0.1)
Shadow MD: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Shadow LG: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
Shadow XL: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

## Border Radius

```
4px   - Small elements
8px   - Standard
12px  - Cards, larger elements
16px  - Buttons, input fields
24px  - Badges, chips
9999px - Fully rounded (circles)
```

## Accessibility Guidelines

1. **Color Contrast**: Minimum 4.5:1 for text
2. **Focus States**: Visible focus indicators on all interactive elements
3. **Alt Text**: Descriptive alt text for all images
4. **ARIA Labels**: Proper ARIA labels for screen readers
5. **Keyboard Navigation**: Full keyboard support
6. **Motion**: Prefer reduced motion for animations

## Animation Guidelines

### Transitions
- Fast: 150ms (button hover)
- Normal: 200ms (navigation)
- Slow: 300ms (modals, overlays)
- Extra Slow: 500ms (page transitions)

### Easing
- Ease In: `cubic-bezier(0.4, 0, 1, 1)`
- Ease Out: `cubic-bezier(0, 0, 0.2, 1)`
- Ease In Out: `cubic-bezier(0.4, 0, 0.2, 1)`

## Responsive Design

### Mobile First Approach
1. Start with mobile layout
2. Add features as screen size increases
3. Test on actual devices
4. Optimize touch targets (minimum 48px)

### Touch Targets
- Minimum: 48x48px
- Recommended: 56x56px
- Spacing between targets: 8px minimum