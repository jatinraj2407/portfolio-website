# Portfolio-website
## Overview
This is the repository for my personal portfolio website, showcasing my projects, skills, and experience. The website is designed with a minimalistic and professional color scheme, featuring interactive elements, animations, and a responsive design.

## Features
- **Responsive Design:** The website is fully responsive, ensuring it looks great on all devices, from desktops to mobile phones.
- **Interactive Elements:** Includes animations and hover effects for a dynamic user experience.
- **Sections:**
  - **Header:** A full-screen background image with a welcome message.
  - **Introduction:** A brief introduction about me.
  - **Skills:** A showcase of my technical skills with interactive skill cards.
  - **Projects:** Featured projects with descriptions and images.
  - **Contact:** A contact form for visitors to reach out to me.
  - **Resume Download:** A link to download my resume.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Bootstrap 4

## How to Use
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd portfolio-website
   ```
3. **Open `index.html` in your web browser to view the website.**

## Code Structure
- `homepage.html`: The main HTML file containing the structure of the website.
- `homepage.css`: The main CSS file for styling the website.
- `homepage.js`: The main JavaScript file for adding interactivity.

## Customization
### Changing the Background Image
To change the background image in the header section, update the `background` property in the `.header-bg` class in `style.css`:
```css
.header-bg {
  background: url('path/to/your/image.jpg'); 
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
```

### Updating Contact Form
The contact form is hidden by default and is toggled using JavaScript. To modify the form, update the HTML inside the `#contact-form-container` div in `index.html`.

### Changing Colors and Styles
You can customize the color scheme and styles by updating the CSS classes in `style.css`.

## JavaScript Interactivity
The website includes several interactive features powered by JavaScript:
- **Smooth Scrolling:** Smooth scrolling for anchor links.
- **Back to Top Button:** A button that appears when you scroll down and smoothly scrolls back to the top when clicked.
- **Toggle Contact Form:** A button that toggles the visibility of the contact form.

