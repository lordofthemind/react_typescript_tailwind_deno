# 🚀 Setting Up a React + Tailwind4 + Typescript Project with Deno and Vite

Welcome to the **RTTD Starter Kit** – a modern frontend boilerplate that combines the best tools for building fast, beautiful, and type-safe web applications.

> GitHub Repo: [github.com/lordofthemind/react_typescript_tailwind_deno](https://github.com/lordofthemind/react_typescript_tailwind_deno)

This starter project brings together:

- ⚛️ **React** – Component-based UI library
- 🧠 **TypeScript** – Static typing for safer code
- 💨 **Tailwind CSS v4** – Utility-first styling
- ⚡ **Vite** – Blazing fast dev/build tooling
- 🦕 **Deno** – Secure runtime with built-in tooling

---

## 📚 Table of Contents

- [🧰 Prerequisites](#-prerequisites)
- [📦 Step 1: Scaffold the Project](#-step-1-scaffold-the-project)
- [🚀 Step 2: Navigate and Open](#-step-2-navigate-and-open)
- [⚙️ Step 3: Install & Run](#️-step-3-install--run)
- [🎨 Step 4: Setup Tailwind CSS](#-step-4-setup-tailwind-css)
- [🛠️ Step 5: Configure Vite](#️-step-5-configure-vite)
- [💅 Step 6: Import Tailwind CSS](#-step-6-import-tailwind-css)
- [🧪 Step 7: Test It Out](#-step-7-test-it-out)
- [📁 Project Structure](#-project-structure)
- [📄 Pages & Components](#-pages--components)
- [🎉 Wrap-up](#-wrap-up)

---

## 🧰 Prerequisites

Make sure you have the following installed:

- **Deno ≥ v2.0** – [Install Deno](https://deno.land/manual/getting_started/installation)
- **VS Code** (or your favorite editor)

To check Deno version:

```bash
deno -V
```

---

## 📦 Step 1: Scaffold the Project

Run the Vite scaffolding script using Deno:

```bash
deno run -A npm:create-vite@latest
```

### Prompts:
- **Project name**: `react_typescript_tailwind_deno`
- **Framework**: `React`
- **Variant**: `TypeScript + SWC`

---

## 🚀 Step 2: Navigate and Open

```bash
cd react_typescript_tailwind_deno
code .
```

---

## ⚙️ Step 3: Install & Run

Install dependencies and run the dev server:

```bash
deno task dev
```

You should see:

```
VITE vX.X.X  ready in Xms
➜  Local: http://localhost:5173/
```

---

## 🎨 Step 4: Setup Tailwind CSS

Install Tailwind CLI and the Vite plugin using Deno:

```bash
deno add -A npm:tailwindcss@latest
```

Install the Vite plugin:

```bash
deno add -A npm:@tailwindcss/vite
```

---

## 🛠️ Step 5: Configure Vite

Open `vite.config.ts` and update the plugins:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

## 💅 Step 6: Import Tailwind CSS

Update your `src/index.css` file:

```css
@import "tailwindcss";
```

Ensure it's imported in `main.tsx`:

```ts
import './index.css';
```

---

## 🧪 Step 7: Test It Out

Start your dev server again:

```bash
deno task dev
```

Update `IndexPage.tsx` or any component and try out Tailwind classes to confirm styling works!

---

## 📁 Project Structure

```
react_typescript_tailwind_deno
├── src
│   ├── assets
│   ├── components      # Pages & UI
│   ├── hooks           # Custom hooks
│   ├── data            # Dummy/static data
│   ├── types           # TypeScript types
│   ├── App.tsx         # Router setup
│   └── main.tsx        # Entry point
├── public
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── deno.lock
├── tsconfig.json
└── package.json
```

---

## 📄 Pages & Components

- `IndexPage.tsx`: Intro page with interactive buttons and tech stack display
- `TodoPage.tsx`: Functional todo list using localStorage and state
- `AboutPage`, `ContactPage`, `SettingsPage`, `GreetPage`, `SignupPage`: Sample pages to demonstrate routing and components
- `Base.tsx`: Layout wrapper with consistent Nav/Footer
- `Nav.tsx` & `Footer.tsx`: Navigation and branding

---

## 🔌 Features

- 🎯 Modular and maintainable component structure
- 🌈 Tailwind-powered styling with full customization
- ⚛️ Functional React components with hooks
- ⚙️ Simple configuration using `vite.config.ts`
- 💾 LocalStorage support for todos
- 🛠️ Built-in pages for signup, contact, settings
- 📦 Deno-based task runner for development

---

## 🧪 Development Tips

- Use `src/components/IndexPage.tsx` to test HMR
- Tailwind classes are fully auto-complete friendly in VS Code
- Add icons using [Lucide](https://lucide.dev/) or emoji 🎉
- Customize colors in `tailwind.config.ts` with your own palette

---

## 🎉 Wrap-up

You're now ready to build full-scale apps with the RTTD Starter Kit! This project is designed to scale from simple MVPs to production-ready apps using modern tools and a clean setup.

Happy coding! 🦕⚛️💨

Contributions welcome — submit PRs or issues at the [GitHub repo](https://github.com/lordofthemind/react_typescript_tailwind_deno) ✨

