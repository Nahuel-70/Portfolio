# 💼 Personal Portfolio - Nahuel Gonzalez

Welcome to my personal portfolio website! This is a single-page application built with **React** and **Tailwind CSS** on **Vite**, designed to showcase my skills, projects, and background as a Junior Developer.

You can visit the page [here](https://nahuelgonzalez.netlify.app/).

## 📌 Introduction

This portfolio is my personal space on the web — where I present who I am, what technologies I use, and the projects I've built. It's fast, responsive, and constantly evolving as I grow in my journey as a developer.

## ✨ Features

- 🧑‍💻 About Me section  
- 🧠 Skills overview  
- 📂 Projects with links to GitHub and live demos  
- 📫 Contact section  
- 📱 Fully responsive design  

## 🛠️ Stack

- ⚛️ React  
- ⚡ Vite  
- 🎨 Tailwind CSS  
- 📦 npm  
- 🔍 ESLint  

## 🗂️ Project Structure

```txt
/
├── public/                             # Static files served as-is
│   ├── icons/                          # Public icons (icons, logos, etc.)
│   └── img/                            # Public images (e.g. background, profile)
│
├── src/                                # Source code of the application
│   ├── app/                            # Core app logic
│   │   ├── App.jsx                     # Main component with routing and structure
│   │   ├── i18n.js                     # Internationalization setup (i18next config)
│   │   └── main.jsx                    # Entry point that mounts the app
│   │
│   ├── assets/                         # Static assets imported in code (e.g. PNGs)
│   │
│   ├── components/                     # Reusable UI components
│   │   ├── Button.jsx                  # Styled button component
│   │   ├── ProfileImage.jsx            # User profile image component
│   │   ├── ProjectCard.jsx             # Card layout for showcasing projects
│   │   ├── Section.jsx                 # Generic section wrapper
│   │   ├── SkillCard.jsx               # Card to display skills
│   │   ├── SocialLink.jsx              # Social media icon + link
│   │   ├── TabNavigation.jsx           # Tabbed interface navigation
│   │   └── Tag.jsx                     # Tag or label component (e.g. for tech stack)
│   │
│   ├── layout/                         # Structural layout components
│   │   └── Header.jsx                  # Navigation bar / header of the site
│   │
│   ├── locales/                        # Language files for translations
│   │   ├── en.json                     # English translations
│   │   └── es.json                     # Spanish translations
│   │
│   ├── pages/                          # Main sections of the portfolio
│   │   ├── About.jsx                   # About Me section
│   │   ├── Contact.jsx                 # Contact form or info
│   │   ├── Home.jsx                    # Landing section of the portfolio
│   │   ├── Projects.jsx                # Projects showcase section
│   │   └── Skills.jsx                  # Skills section with icons or charts
│   │
│   └── styles/                         # Global styles and themes
│       └── style.css                   # Main CSS file
│
├── eslint.config.js                   # ESLint config for code quality
├── index.html                         # HTML template used by Vite
├── package-lock.json                  # Auto-generated lock file for npm
├── package.json                       # Project metadata and dependencies
├── postcss.config.js                  # Config for PostCSS (used with Tailwind)
├── README.md                          # This very file you're reading now
├── tailwind.config.js                 # Tailwind CSS configuration
└── vite.config.js                     # Vite configuration (build, plugins, etc.)
```

## 🚀 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/Nahuel-70/Portfolio.git

# Go to the project folder
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🤝 Contributions
This project is personal and not open for contributions at the moment,
but feel free to fork or use the structure for your own portfolio.

## 📄 License
This project is licensed under the MIT License — © 2025 Nahuel Gonzalez.

## 🔗 Connect with Me

- GitHub: [Nahuel-70](https://github.com/Nahuel-70)  
- Email: [nahuelgonzalezmartins@gmail.com](mailto:nahuelgonzalezmartins@gmail.com)  
- Discord: [@Nahuel_70](https://discord.com/users/951189383397113906)
