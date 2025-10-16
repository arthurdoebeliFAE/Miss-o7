# Design Guidelines: Microsserviço de Piadas API

## Design Approach

**Selected Approach:** Design System - Material Design with Playful Accents

**Justification:** This is a utility-focused educational tool for developers learning backend concepts. The interface prioritizes functionality and code readability while maintaining a friendly, approachable feel appropriate for a jokes API.

**Key Design Principles:**
- Developer-first clarity: Code snippets and JSON responses must be highly readable
- Minimalist functionality: Clean interface that doesn't distract from learning
- Playful touches: Subtle humor elements without compromising professionalism
- Documentation clarity: API information presented clearly and accessibly

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 220 20% 12% (deep navy-charcoal)
- Surface: 220 18% 18% (elevated surface)
- Primary: 280 70% 65% (vibrant purple - playful yet professional)
- Accent: 45 95% 60% (warm amber for success states)
- Text Primary: 0 0% 95%
- Text Secondary: 220 10% 70%
- Border: 220 15% 25%
- Code Background: 220 25% 15%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 280 60% 50%
- Accent: 45 90% 50%
- Text Primary: 220 20% 15%
- Text Secondary: 220 15% 45%

### B. Typography

**Font Families:**
- Interface: 'Inter', system-ui, sans-serif (clean, modern)
- Code/JSON: 'JetBrains Mono', 'Fira Code', monospace (developer-friendly)

**Hierarchy:**
- Page Title: text-3xl font-bold (learning focus)
- Section Headers: text-xl font-semibold
- Body Text: text-base font-normal
- Code Snippets: text-sm font-mono
- API Labels: text-sm font-medium uppercase tracking-wide

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, and 16
- Component padding: p-4 to p-6
- Section gaps: gap-6 to gap-8
- Container margins: mx-4 to mx-8
- Vertical spacing: space-y-6

**Grid Structure:**
- Single column on mobile (max-w-full)
- Two-column layout on desktop: Sidebar (API info) + Main (testing area)
- Container max-width: max-w-7xl mx-auto

### D. Component Library

**Navigation:**
- Clean top header with project title and GitHub link
- Minimal design with subtle border-bottom

**API Testing Panel:**
- Large, prominent "Get Random Joke" button (primary color, w-full on mobile, w-auto on desktop)
- Response display card with syntax-highlighted JSON
- Request/Response status indicators

**Code Display:**
- Dark background code blocks with syntax highlighting
- Copy-to-clipboard button on hover
- Language indicator badge (JSON, JavaScript, Python)

**Documentation Cards:**
- Endpoint cards with method badges (GET in green)
- Route path in monospace font
- Description in regular text
- Example response collapsible section

**Joke Display:**
- Clean card with joke text
- Category badge (rounded, subtle color)
- Light border and shadow for depth

**Status Indicators:**
- Health check pill (green for online, red for offline)
- Loading spinner (simple, primary color)
- Success/error toasts (top-right, auto-dismiss)

### E. Interaction & Animation

**Minimal Animation Strategy:**
- Button hover: subtle scale (scale-105) and brightness increase
- Card entry: fade-in only on initial load
- Response arrival: smooth height expansion (no jarring jumps)
- NO decorative animations or unnecessary transitions

**Interactive States:**
- Buttons: Clear hover/active states with color shifts
- Code blocks: Highlight on focus
- Copy buttons: Visual feedback on click (checkmark icon swap)

---

## Page Structure

**Single-Page Application Layout:**

1. **Header Section** (py-4 border-b)
   - Logo/Project title on left
   - GitHub repository link on right
   - Health status indicator

2. **Hero Section** (py-12 to py-16, no image)
   - Clear title: "API de Piadas - Microsserviço Educacional"
   - Brief description of learning objectives
   - Quick start code snippet

3. **Main Content** (two-column on desktop: 40% sidebar, 60% main)
   
   **Sidebar (API Documentation):**
   - Endpoints list with method badges
   - Request/response examples
   - Category filter options (if implemented)
   
   **Main Panel (Testing Interface):**
   - Interactive test button
   - Live response display
   - Joke rendering area with category badge

4. **Footer Section** (py-8 border-t)
   - Author credit
   - Educational context note
   - Link to learning materials

---

## Images Section

**No Hero Image Required** - This is a developer tool focused on functionality over marketing aesthetics.

**Optional Decorative Elements:**
- Small emoji/icon next to "Piada" responses (😄, 🤣, 😂)
- Simple illustration for empty state ("Click button to get your first joke")

---

## Accessibility & Best Practices

- All code snippets must have sufficient contrast (WCAG AAA for code)
- Interactive elements min-height of 44px for touch targets
- Keyboard navigation fully supported
- Screen reader labels for all icon buttons
- Form inputs with visible labels and focus states
- Consistent dark mode throughout (including code blocks and inputs)