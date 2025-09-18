# Northland Global School Website

A modern, professional website for Northland Global School built with Next.js, featuring a beautiful glassmorphic design theme.

## 🎨 Design Features

- **Glassmorphic Theme**: Frosted-glass panels with subtle gradients and glowing shadows
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Mobile-first approach that scales beautifully on all devices
- **Premium Typography**: Poppins and Inter Google Fonts for a professional look
- **Smooth Animations**: Framer Motion powered animations and transitions

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom glassmorphic utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Google Fonts (Poppins, Inter)

## 📱 Pages & Features

### Homepage
- Hero section with school branding
- About preview with key highlights
- Mission & Vision cards
- Why Choose Us section
- Academic toppers showcase
- Gallery preview
- Testimonials carousel

### About Us
- School overview and history
- Mission, Vision, and Core Values
- Leadership information
- Contact details

### Admissions
- Step-by-step admission process
- Online application form
- Required documents list
- Contact information for admissions office

### Infrastructure
- Facilities overview with image grids
- Campus highlights
- Statistics and achievements
- Campus tour booking

### Facilities
- Detailed facility descriptions
- Feature lists for each facility
- Additional amenities
- Facility statistics

### Gallery
- Filterable image gallery by categories
- Lightbox view for images
- Gallery statistics
- Categories: Academics, Sports, Events, Celebrations, Infrastructure

### Careers
- Current job openings
- Job application form with file upload
- Benefits and work culture
- Department-wise contact information

### Contact Us
- Contact form with validation
- Interactive map placeholder
- Department-wise contact details
- Office hours and location

### Mandatory Disclosure
- CBSE compliance information
- School details and statistics
- Downloadable documents
- Fee structure and policies

## 🎯 Key Features

- **SEO Optimized**: Meta tags, semantic HTML, and proper structure
- **CRM Ready**: Clean, modular code structure for easy backend integration
- **Form Handling**: Contact forms, admission forms, and job applications
- **Interactive Elements**: Image lightbox, testimonial carousel, smooth scrolling
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized images and lazy loading

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd northland-school-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── admissions/        # Admissions page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── disclosure/        # Mandatory Disclosure page
│   ├── facilities/        # Facilities page
│   ├── gallery/           # Gallery page
│   ├── infrastructure/    # Infrastructure page
│   ├── globals.css        # Global styles with glassmorphic utilities
│   ├── layout.tsx         # Root layout with Navbar and Footer
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Homepage hero section
│   ├── AboutPreview.tsx   # About preview section
│   ├── MissionVision.tsx  # Mission & Vision section
│   ├── WhyChooseUs.tsx    # Why Choose Us section
│   ├── ToppersShowcase.tsx # Academic toppers section
│   ├── GalleryPreview.tsx # Gallery preview section
│   └── Testimonials.tsx   # Testimonials carousel
├── lib/                   # Utility functions
└── types/                 # TypeScript type definitions
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue gradient (primary-500 to primary-900)
- Secondary: Yellow gradient (secondary-500 to secondary-900)
- Glass effects: White/transparent overlays

### Fonts
- Primary: Poppins (headings and UI elements)
- Secondary: Inter (body text and details)

### Glassmorphic Effects
Custom CSS classes in `globals.css`:
- `.glass`: Basic glass effect
- `.glass-card`: Enhanced glass card with hover effects
- `.glass-dark`: Dark glass variant
- `.gradient-text`: Gradient text effect

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## 🔧 Future Enhancements

- Backend integration for forms
- CMS integration for content management
- Multi-language support
- Advanced search functionality
- Student portal integration
- Online fee payment system

## 📞 Support

For any questions or support regarding the website, please contact:
- Email: info@northlandglobalschool.edu
- Phone: +1 (234) 567-8900

## 📄 License

This project is proprietary to Northland Global School. All rights reserved.

---

**Built with ❤️ for Northland Global School**