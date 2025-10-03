# 🔄 Metric/Imperial Unit Converter

A sleek, responsive web application for converting between metric and imperial units with an elegant dark/light mode toggle. Built with vanilla JavaScript, this converter handles length, volume, and mass conversions with precision and style.

![Unit Converter Preview](<./Readme-imgs/127.0.0.1_8080_(Readme).png>)

## ✨ Features

- **🌓 Dark/Light Mode Toggle**: Seamless theme switching with persistent user preference
- **📏 Multiple Unit Types**: Convert length (meters/feet), volume (liters/gallons), and mass (kilograms/pounds)
- **🎯 Real-time Conversion**: Instant bidirectional conversion results
- **📱 Responsive Design**: Optimized for all device sizes and screen resolutions
- **♿ Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **🎨 Modern UI**: Clean, professional interface with smooth animations
- **💾 Local Storage**: Remembers your theme preference across sessions

## 🚀 Live Demo

[View Live Project](your-live-demo-link-here) <!-- Replace with your actual demo link -->

## 📸 Screenshots

### Dark Mode

![Light Mode](<./Readme-imgs/127.0.0.1_8080_(Readme).png>)

### Light Mode

![Dark Mode](<./Readme-imgs/127.0.0.1_8080_(Readme)%20(1).png>)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom properties, Flexbox, CSS Grid, animations
- **Vanilla JavaScript**: ES6+ features, DOM manipulation, event handling
- **Local Storage API**: Theme persistence
- **Responsive Design**: Mobile-first approach

## 🧮 Conversion Logic

The application uses precise conversion factors:

- **Length**: 1 meter = 3.281 feet
- **Volume**: 1 liter = 0.264 gallons
- **Mass**: 1 kilogram = 2.204 pounds

Results are displayed with 3 decimal places for accuracy.

## 🏗️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/unit-converter.git
   cd unit-converter
   ```

2. **Open in browser**

   ```bash
   # Using Python 3
   python -m http.server 8080

   # Using Node.js (if you have live-server installed)
   npx live-server

   # Or simply open index.html in your browser
   ```

3. **Access the application**
   - Navigate to `http://localhost:8080` (if using server)
   - Or open `index.html` directly in your browser

## 📁 Project Structure

```
unit-converter/
├── index.html          # Main HTML structure
├── index.css           # Styling and theme management
├── index.js            # Application logic and event handling
├── Readme-imgs/        # Screenshot assets
│   ├── light-mode.png
│   └── dark-mode.png
└── README.md           # Project documentation
```

## 🎯 Key Implementation Highlights

### Theme Management

```javascript
// Persistent theme switching with localStorage
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}
```

### CSS Custom Properties for Theming

```css
:root {
  --bg-color: #1f2937;
  --card-bg: #374151;
  --header-bg: #6366f1;
  /* ... more theme variables */
}

[data-theme="light"] {
  --bg-color: #f3f4f6;
  --card-bg: #ffffff;
  /* ... light theme overrides */
}
```

### Input Validation

```javascript
// Robust input validation with user feedback
if (isNaN(inputValue) || inputValue < 0) {
  alert("Please enter a valid positive number");
  return;
}
```

## 🚀 Features in Detail

### 🔄 Bidirectional Conversion

Each conversion shows both directions simultaneously:

- `20 meters = 65.616 feet | 20 feet = 6.096 meters`

### 🎨 Smooth Animations

- Theme transition animations
- Hover effects on interactive elements
- Smooth color transitions

### 📱 Mobile-First Design

- Responsive breakpoints
- Touch-friendly interface
- Optimized for mobile devices

## 🔧 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Optimizations

- **Lightweight**: No external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **Efficient DOM Updates**: Minimal reflows and repaints
- **Cached Theme Preference**: Instant theme application on reload

## 🔮 Future Enhancements

- [ ] **Additional Units**: Temperature, area, speed conversions
- [ ] **History Feature**: Save and review previous conversions
- [ ] **Custom Precision**: User-selectable decimal places
- [ ] **Copy to Clipboard**: One-click result copying
- [ ] **Keyboard Shortcuts**: Power user features
- [ ] **PWA Support**: Offline functionality and app installation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Illona Addae**

- GitHub: [@illonaaddae](https://github.com/illonaaddae)
- LinkedIn: [@illonaaddae](https://www.linkedin.com/in/illonaaddae/)
- Portfolio: [@illonaaddae]([your-portfolio-url](https://oceaniccodes.netlify.app/))

## 🙏 Acknowledgments

- **[Scrimba](https://scrimba.com)** - This project was created as a solo project assignment during my learning journey with Scrimba's Frontend and Fullstack Developer Path
- Inspired by modern conversion tools and clean UI design principles
- Built as part of continuous learning in web development
- Thanks to the developer community for best practices and inspiration

---

⭐ **Star this repository if you found it helpful!**

📧 **Have questions or suggestions? Feel free to reach out!**

---

_This project demonstrates proficiency in vanilla JavaScript, CSS theming, responsive design, and modern web development practices._
