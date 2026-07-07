# Ratan Kumar — Portfolio

Personal portfolio website built to showcase my projects, skills, and experience as I transition from Drupal frontend development toward React-focused frontend roles.

🔗 **Live site:** [ratankumar.vercel.app](https://ratankumar.vercel.app)

## Tech Stack

- **React** — component-based UI
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **EmailJS** — contact form email delivery (no backend required)
- **Vercel** — hosting and deployment

## Features

- Responsive multi-section layout — Home, About, Skills, Projects, Contact
- Functional contact form with:
  - Client-side validation (required fields)
  - Live status feedback (sending / success / error states)
  - Auto-reply confirmation email sent to the user on submission
- Clean, dark-themed UI

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/ratanraj343/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Note: `.env` is git-ignored — you'll need to set these up yourself via [EmailJS](https://www.emailjs.com/) to run the contact form locally.

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components (Home, About, Skills, Projects, Contact)
├── assets/         # Images, icons, static files
└── App.jsx         # Root component and routing
```


## Connect

- [LinkedIn](https://www.linkedin.com/in/ratan-kumar-b0b98618b/)
- [GitHub](https://github.com/ratanraj343)
- Email: ratan.kumar8841@gmail.com

---

Built with React + Vite, styled with Tailwind CSS.