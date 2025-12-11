React + Vite Number Counter App

A simple and interactive number-counting application built using React and Vite. The project demonstrates basic React state management, reusable components, and clean UI styling.

Features

Increment and decrement numbers smoothly.
Prevents negative values with a validation alert.
Clean component structure (App.jsx, Greeting.jsx).
Fast development environment powered by Vite.
Responsive UI with simple CSS styling.

Project Preview

The app includes:
A title and heading rendered from App.jsx.
A reusable Greeting component that displays the counter and two buttons.
Increment and Decrement button logic controlled using React’s useState.

Tech Stack

React
Vite
JavaScript (ES6+)
CSS

Installation & Setup
1. Install dependencies
npm install
2. Start development server
npm run dev
3. Build for production
npm run build
4. Preview production build
npm run preview

Folder Structure
src/
 ├── App.jsx        # Main UI structure  
 ├── Greeting.jsx   # Counter component with logic  
 ├── App.css        # Component-level styles  
 ├── index.css      # Global stylesheet  
 └── main.jsx       # Entry point – renders React

How It Works
useState stores the current count.
handleclick → Increases the count.
handledec → Decreases the count but blocks negative numbers.
The UI updates instantly on every click.