# GOL INFRA - Static Website

This is a pure HTML, CSS, and Vanilla JavaScript conversion of the React website.

## Files Structure

```
static-site/
├── index.html       # Main HTML file with all components
├── style.css        # Complete styling (converted from Tailwind + custom CSS)
├── script.js        # All JavaScript functionality
├── favicon.png      # Site favicon
└── images/          # Image assets folder
```

## Features Implemented

### Navigation
- Fixed header with scroll effect
- Dropdown mega menu on hover
- Mobile responsive hamburger menu
- Smooth scroll to sections

### Hero Slider
- 5 full-screen slides
- Auto-play every 6 seconds
- Pause on hover
- Bottom dot indicators
- Smooth transitions
- Zoom animation on images

### Sections
- Startup India recognition section
- Solutions grid with icons
- Industries section
- Innovation cards
- Contact form with validation
- Footer with links

### Animations
- Scroll-triggered animations
- Fade-in and slide-up effects
- Hover effects on cards
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px
- Touch-friendly navigation
- Optimized for all screen sizes

## How to Use

1. Open `index.html` in any modern web browser
2. No build process required
3. No dependencies needed
4. Works offline

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary: hsl(158, 42%, 48%);
  --accent: hsl(25, 45%, 55%);
  --background: hsl(220, 14%, 10%);
}
```

### Slider Timing
Edit in `script.js`:
```javascript
autoplayInterval = setInterval(nextSlide, 6000); // 6 seconds
```

### Images
Replace images in the `images/` folder:
- hero-it-new.jpg
- hero-av-new.jpg
- hero-security-new.jpg
- hero-isp-new.jpg
- hero-startup-new.jpg

## Notes

- All React components have been flattened into semantic HTML
- Framer Motion animations converted to CSS animations
- React state management converted to vanilla JavaScript
- Form validation uses native HTML5 validation
- No external dependencies or frameworks
