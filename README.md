# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing projects, skills, and contact information for Shaurya Gaur, a Software Developer & AI Engineer.

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router
- **Email Service**: EmailJS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Notifications**: Sonner (toast notifications)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:####](http://localhost:####) in your browser.

### EmailJS Setup (for Contact Form)

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (e.g., Gmail)
3. Create an email template with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. Update `src/components/Contact.tsx` with your credentials:
   - Replace `'YOUR_PUBLIC_KEY'` with your public key
   - Replace `'YOUR_SERVICE_ID'` with your service ID
   - Replace `'YOUR_TEMPLATE_ID'` with your template ID

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── About.tsx     # About section
│   ├── Contact.tsx   # Contact form and social links
│   ├── Hero.tsx      # Hero section with intro
│   ├── Navigation.tsx # Navigation bar
│   ├── Projects.tsx  # Projects showcase
│   ├── Skills.tsx    # Skills section
│   └── ComingSoon.tsx # Coming soon page for demos
├── pages/
│   ├── Index.tsx     # Main page
│   └── NotFound.tsx  # 404 page
├── hooks/            # Custom hooks
├── lib/              # Utilities
└── assets/           # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contact

Shaurya Gaur - [shauryagaur07@gmail.com](mailto:shauryagaur07@gmail.com)

Project Link: [https://github.com/s7g4/portfolio-2](https://github.com/s7g4/portfolio-2)
