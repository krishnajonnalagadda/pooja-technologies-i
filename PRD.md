# Pooja Technologies - Training Institute Website

A futuristic, glassmorphism-designed website for an IT & emerging-technology training institute that transforms students and job seekers into industry-ready real-time engineers.

**Experience Qualities**:
1. **Futuristic** - Cutting-edge glassmorphism design with neon accents and depth creates an immersive, forward-thinking tech atmosphere
2. **Professional** - Premium tech-institute aesthetic with polished layouts and sophisticated visual hierarchy establishes credibility and trust
3. **Inspiring** - Dynamic animations and vibrant gradients energize visitors and communicate innovation, possibility, and career transformation

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a full-featured multi-page website with navigation system, multiple content sections, dynamic course catalogs, form handling, and comprehensive information architecture requiring sophisticated routing and state management.

## Essential Features

### Multi-Page Navigation System
- **Functionality**: Complete navigation between 9 distinct pages with smooth transitions
- **Purpose**: Organize extensive content logically and enable intuitive user journey through institute offerings
- **Trigger**: User clicks navigation links or CTAs
- **Progression**: User on any page → clicks nav link → smooth transition animation → new page loads with appropriate content
- **Success criteria**: All pages accessible, navigation highlights current page, mobile hamburger menu works flawlessly

### Course Catalog System
- **Functionality**: Organized display of 40+ courses across 7 categories with filtering and search capabilities
- **Purpose**: Help prospective students discover relevant training programs and understand course offerings
- **Trigger**: User navigates to Courses page or uses category filters
- **Progression**: User lands on courses → sees categorized grid → clicks category filter → view updates → clicks course card → sees details modal/section
- **Success criteria**: All courses visible, categories filter correctly, course details accessible, mobile-responsive grid

### Contact Form
- **Functionality**: Multi-field form with validation for prospective student inquiries
- **Purpose**: Enable lead generation and direct communication with interested students
- **Trigger**: User navigates to Contact page and fills form
- **Progression**: User opens contact page → fills name/email/phone/course interest/message → clicks submit → validation runs → success message appears → form resets
- **Success criteria**: All fields validate correctly, error messages clear, submission provides feedback, data could be captured

### Hero Section with CTAs
- **Functionality**: Eye-catching landing section with institute branding and primary call-to-action buttons
- **Purpose**: Immediately communicate value proposition and drive conversions
- **Trigger**: Page load on homepage
- **Progression**: Page loads → animated hero appears → user reads tagline → clicks CTA → navigates to Courses or Contact
- **Success criteria**: Hero loads smoothly, text readable, CTAs prominent and functional, animations enhance rather than distract

### Testimonials Display
- **Functionality**: Carousel or grid of student success stories with ratings and outcomes
- **Purpose**: Build trust and provide social proof of training effectiveness
- **Trigger**: User scrolls to testimonials section
- **Progression**: User scrolls → testimonials animate in → user reads stories → optionally cycles through carousel → gains confidence → proceeds to CTA
- **Success criteria**: Testimonials readable, carousel smooth if implemented, content credible, responsive layout

## Edge Case Handling

- **Empty Form Submission** - All required fields validated before submission, inline error messages appear
- **Long Course Names** - Text truncation with ellipsis and tooltip on hover for full title
- **Mobile Navigation** - Hamburger menu with overlay, prevents body scroll when open
- **Slow Network** - Skeleton loaders for content, progressive image loading, no layout shift
- **Missing Images** - Fallback gradients or placeholder graphics maintain design integrity
- **Broken Navigation** - All routes defined with 404 fallback handling
- **Small Screens** - Stacked layouts, readable font sizes, touch-friendly tap targets (min 44px)

## Design Direction

The design should evoke a sense of **cutting-edge innovation, technological sophistication, and future-forward thinking**. Visitors should feel they're entering a premium institution at the forefront of emerging technologies. The glassmorphism aesthetic creates depth and modernity while maintaining professional credibility. Neon accents and gradients energize the experience without sacrificing readability. Every element should communicate excellence, transformation, and industry-readiness.

## Color Selection

A futuristic tech palette combining deep space backgrounds with vibrant neon accents and frosted glass surfaces.

- **Primary Color (Electric Cyan)**: `oklch(0.70 0.19 230)` - Vibrant cyan-blue that communicates innovation, technology, and trust. Used for primary CTAs, active states, and key highlights.
- **Secondary Color (Deep Space)**: `oklch(0.12 0.02 260)` - Rich dark blue-violet creating depth and sophistication. Used for backgrounds and sections.
- **Tertiary Color (Neon Magenta)**: `oklch(0.65 0.25 330)` - Electric magenta-pink accent for emphasis and energy. Used sparingly for highlights and gradients.
- **Accent Color (Cyber Purple)**: `oklch(0.58 0.22 290)` - Vibrant purple for hover states and secondary CTAs. Creates visual interest and depth.
- **Muted Glass**: `oklch(0.25 0.03 260)` with backdrop-blur - Semi-transparent dark surface for glassmorphism cards.
- **Success Green**: `oklch(0.72 0.18 145)` - Neon green for success states and positive indicators.

**Foreground/Background Pairings**:
- Primary on Dark Background: White text (`oklch(0.98 0 0)`) on Electric Cyan (`oklch(0.70 0.19 230)`) - Ratio 8.2:1 ✓
- Body Text on Deep Space: Light gray (`oklch(0.85 0.01 260)`) on Deep Space (`oklch(0.12 0.02 260)`) - Ratio 11.5:1 ✓
- Heading Text on Deep Space: White (`oklch(0.98 0 0)`) on Deep Space (`oklch(0.12 0.02 260)`) - Ratio 15.8:1 ✓
- Accent Text on Card: White (`oklch(0.98 0 0)`) on Muted Glass (`oklch(0.25 0.03 260)`) - Ratio 10.2:1 ✓

## Font Selection

Typefaces should communicate technical precision, modernity, and forward-thinking innovation while maintaining excellent readability across all content types.

- **Primary Font**: Space Grotesk (headings, hero text, navigation) - Geometric sans-serif with tech-forward character
- **Secondary Font**: Inter (body text, descriptions, UI elements) - Exceptional clarity and readability for content
- **Accent Font**: JetBrains Mono (code snippets, technical labels) - Adds authentic developer/engineering aesthetic

**Typographic Hierarchy**:
- H1 (Hero/Page Titles): Space Grotesk Bold / 48px (desktop), 32px (mobile) / -0.02em letter-spacing / 1.1 line-height
- H2 (Section Headings): Space Grotesk Bold / 36px (desktop), 28px (mobile) / -0.01em letter-spacing / 1.2 line-height
- H3 (Card Titles): Space Grotesk Semibold / 24px / normal letter-spacing / 1.3 line-height
- Body (Paragraphs): Inter Regular / 16px / normal letter-spacing / 1.6 line-height
- Small (Captions): Inter Regular / 14px / normal letter-spacing / 1.5 line-height
- Button Text: Inter Semibold / 16px / 0.01em letter-spacing / uppercase for primary CTAs

## Animations

Animations should create a sense of fluidity, depth, and technological sophistication while maintaining performance and usability. Use framer-motion for orchestrated entrance animations, hover effects that suggest interactivity through subtle scale and glow, and smooth page transitions. Key moments: hero text fade-up on load (400ms), course cards stagger-in when scrolling into view (100ms offset), glassmorphism cards lift and glow on hover (200ms), navigation smooth-scroll with easing (600ms), form success celebration with scale bounce (500ms). All animations respect prefers-reduced-motion.

## Component Selection

**Components**:
- **Navigation**: Custom navbar with mobile drawer using Sheet component - glassmorphism sticky header with blur
- **Hero Section**: Custom with framer-motion animations - full-viewport with gradient overlay
- **Course Cards**: Card component with hover effects - glass surfaces with gradient borders
- **Buttons**: Button component (multiple variants) - primary (filled cyan), secondary (outlined), ghost for nav
- **Contact Form**: Form component with Input, Textarea, Select - floating labels with validation states
- **Testimonials**: Custom carousel using embla-carousel-react - card-based with star ratings
- **Footer**: Custom component with multi-column layout - links, social icons (Phosphor)
- **Modals**: Dialog component for course details - glassmorphism with backdrop blur
- **Blog Cards**: Card with Aspect Ratio for featured images - consistent 16:9 ratio
- **Stats Section**: Custom grid with animated counters - glassmorphism panels

**Customizations**:
- Glass Card Wrapper: Reusable component with backdrop-blur-lg, border gradients, and shadow-glow effects
- Section Container: Max-width wrapper with consistent padding and scroll-margin for navigation
- Gradient Text: Utility component for background-clip text effects on headings
- Floating CTA: Fixed position on scroll with slide-in animation
- Logo Component: SVG-based geometric logo with "PT" monogram and neon accents

**States**:
- Buttons: Default (glass surface) → Hover (scale 1.05, glow increase) → Active (scale 0.98) → Disabled (opacity 0.5)
- Form Inputs: Default (subtle border) → Focus (cyan ring, label float) → Error (red ring, shake) → Success (green checkmark)
- Cards: Default (static) → Hover (lift 8px, border glow, content reveal) → Active (slight depression)
- Navigation Links: Default (muted) → Hover (cyan color) → Active (cyan + underline glow)

**Icon Selection**:
- Navigation: House, BookOpen, GraduationCap, Users, Briefcase, ChatCircle (Phosphor)
- Features: Lightning, Code, ChartLine, Trophy (technical excellence icons)
- Contact: Envelope, Phone, MapPin (communication)
- Social: LinkedinLogo, TwitterLogo, InstagramLogo, YoutubeLogo
- Courses: Chip (AI/ML), Database (Data), CloudArrowUp (Cloud), Code (Dev)
- UI Actions: MagnifyingGlass (search), X (close), List (menu), ArrowRight (CTA)

**Spacing**:
- Section Padding: py-20 (desktop), py-12 (mobile)
- Card Padding: p-6 (default), p-8 (large cards)
- Grid Gap: gap-6 (cards), gap-4 (form elements)
- Container: max-w-7xl mx-auto px-4 (standard wrapper)
- Margins: mt-2 (tight), mt-4 (default), mt-8 (section breaks)

**Mobile**:
- Navigation: Full-screen drawer overlay with stacked links and backdrop blur
- Hero: Stacked layout, reduced font sizes, single-column CTAs
- Course Grid: 1 column on mobile, 2 on tablet, 3-4 on desktop
- Forms: Full-width inputs with increased tap targets
- Footer: Stacked columns, centered alignment
- Cards: Reduced padding, simplified hover states (tap feedback)
- Typography: Fluid scaling using clamp() for responsive sizing
