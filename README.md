# Alexander Núñez - Portfolio

A modern, dark-themed portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Design**
- Dark mode with purple-to-mint gradient accents
- Smooth animations with Framer Motion
- Fully responsive mobile-first design
- Glassmorphism UI elements

📱 **Sections**
- **Hero**: Eye-catching landing section with call-to-action
- **About**: Career summary and key strengths
- **Projects**: Featured projects (NuBrain, Muvin, Taxi System)
- **Skills**: Technical expertise categorized by domain
- **Experience**: Career timeline with company details
- **Contact**: Multiple ways to get in touch

🎯 **Optimized For**
- Recruiters and hiring managers
- Freelance/consulting opportunities
- Showcasing technical expertise
- Professional networking

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The portfolio will open at `http://localhost:5173`

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Fixed header nav
│   │   ├── Hero.tsx            # Landing section
│   │   ├── About.tsx           # About & strengths
│   │   ├── Projects.tsx        # Featured work
│   │   ├── Skills.tsx          # Tech stack
│   │   ├── Experience.tsx      # Career history
│   │   └── Contact.tsx         # Contact section
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite configuration
└── package.json
```

## Customization

### Update Personal Information
Edit the contact details and social links in:
- `src/components/Contact.tsx` - Email, phone, social links
- `src/components/Hero.tsx` - Bio and intro text
- `src/components/About.tsx` - About section content

### Modify Projects
Edit `src/components/Projects.tsx` to update:
- Project descriptions
- Technologies used
- Live links and GitHub repos
- Status badges

### Change Colors
Tailwind color variables are defined in `tailwind.config.js`:
- Purple: `primary` and its variants
- Mint Green: `accent` color
- Dark backgrounds: `dark` and `dark-secondary`

### Add More Content
Components use Framer Motion for animations. Follow the same pattern:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Your content here
</motion.div>
```

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages
1. Update `vite.config.ts` with your repo name
2. Build and push to GitHub
3. Enable GitHub Pages in repo settings

## Performance Tips

- Images are lazy-loaded and optimized
- Animations use GPU acceleration (transform, opacity)
- Smooth scrolling enabled globally
- Mobile-optimized with responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Personal portfolio - feel free to use as inspiration for your own.

## Contact

- **Email**: alex.nb.92@gmail.com
- **Phone**: +593 979 011 445
- **LinkedIn**: [wilson-alexander-nunez-barrera](https://linkedin.com/in/wilson-alexander-nunez-barrera/)
- **Location**: Ecuador
