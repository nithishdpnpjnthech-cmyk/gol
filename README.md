# GOL INFRA - Static Website

Pure HTML, CSS, and JavaScript website - no React, no build tools needed.

## Files Structure
```
static-website/
├── index.html          # Homepage
├── about.html          # About page
├── solutions.html      # Solutions page
├── products.html       # Products page
├── contact.html        # Contact page
├── favicon.png         # Site icon
├── css/
│   └── styles.css      # All styles
└── js/
    └── main.js         # Navigation & form handling
```

## How to Use

1. **Open directly in browser**: Double-click any HTML file
2. **Or use a local server**:
   ```bash
   cd static-website
   python3 -m http.server 8000
   # Visit: http://localhost:8000
   ```

## Email Integration (TODO)

The contact form is ready but needs email service integration. Options:

### Option 1: FormSubmit (Easiest - No signup)
In `contact.html`, change form tag to:
```html
<form action="https://formsubmit.co/YOUR-EMAIL@example.com" method="POST">
```

### Option 2: EmailJS (More features)
1. Sign up at emailjs.com
2. Add this before `</body>` in contact.html:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
3. Update `js/main.js` with EmailJS code

### Option 3: Web3Forms
Similar to FormSubmit - add action URL to form

## Customization

- **Colors**: Edit CSS variables in `css/styles.css`
- **Content**: Edit HTML files directly
- **Images**: Replace Unsplash URLs with your own
- **Contact Info**: Update phone/email in all pages

## Features

✅ Fully responsive design
✅ Mobile navigation menu
✅ Smooth animations
✅ Contact form ready
✅ No dependencies
✅ Fast loading
✅ SEO friendly structure

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge)
