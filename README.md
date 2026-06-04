# 🐱 Cat Breed Explorer

A modern, responsive React web application that lets users discover and explore different cat breeds. Using a public API, the application displays a random cat breed card complete with beautiful images, comprehensive characteristics, temperament tags, and key facts.

Built with **React 19**, **Vite**, and **Tailwind CSS v4** for a lightning-fast and premium user experience.

---

## ✨ Features

- **Dynamic Randomizer**: Fetch and explore a new cat breed instantly with a single click.
- **Aesthetic Cards**: High-quality imagery with an overlay description and rare breed detection.
- **Interactive Ratings**: Visual progress bars representing breed traits like:
  - Intelligence & Energy Level
  - Affection Level & Adaptability
  - Child, Dog, and Stranger Friendliness
  - Social Needs
- **Quick Facts**: Instantly view the breed's average life span, weight (metric), origin country, and vocalisation/grooming index.
- **Temperament Tags**: Custom tags displaying the breed's behavior/personality characteristics.
- **Modern Performance**: Integrated with React's `AbortController` to handle cleanups and prevent race conditions during API requests.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) (Hooks: `useState`, `useEffect`, `useCallback`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the new `@tailwindcss/vite` plugin)
- **Build Tool**: [Vite](https://vite.dev/)
- **Data Source**: [FreeAPI Cats Endpoint](https://api.freeapi.app/api/v1/public/cats/cat/random)

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### 📋 Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### ⚙️ Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Lohar-anil-01/cat-breed-explorer.git
   cd cat-breed-explorer
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
cat-breed-explorer/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images/icons
│   ├── components/         # Reusable UI components
│   │   ├── Rating.jsx      # Progress bar component for characteristics
│   │   └── StatCard.jsx    # Card component for stats and quick facts
│   ├── App.css             # Main styling rules
│   ├── App.jsx             # Core application layout and API fetching logic
│   ├── index.css           # Tailwind CSS imports
│   └── main.jsx            # React application entry point
├── eslint.config.js        # ESLint rules configuration
├── index.html              # HTML shell
├── package.json            # Scripts and dependencies
└── vite.config.js          # Vite config with Tailwind CSS plugin
```

---

## 🧩 Components Overview

### 1. `App.jsx`
Manages the application state including `randomCat` data, loading state, and error handling. It utilizes the standard Fetch API wrapped in `useCallback` with an `AbortController` signal to clean up pending requests when components unmount or re-render.

### 2. `StatCard.jsx`
A clean, modular component used to display factual information (such as Origin, Weight, and Lifespan) in a structured grid format.
```jsx
export default function StatCard({ title, value }) {
  return (
    <div className="bg-slate-50 rounded-xl p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  );
}
```

### 3. `Rating.jsx`
Displays progress bars for key behavior metrics out of 5, providing a quick visual reference for each breed's characteristics.
```jsx
export default function Rating({ label, value }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value}/5</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full">
        <div
          className="h-3 bg-emerald-500 rounded-full"
          style={{ width: `${value * 20}%` }}
        />
      </div>
    </div>
  );
}
```

---

## 📄 License

This project is licensed under the MIT License. Feel free to use and modify it as you see fit!
