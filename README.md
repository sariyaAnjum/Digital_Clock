# Moment — Digital Clock

A real-time digital clock with a glowing, 3D-inspired display. It shows your
local time, date, and timezone in a responsive interface built with React.

## Features

- Live 24-hour clock, updated every second
- Local date and detected timezone
- Glowing blue digits, subtle 3D tilt, and mirrored reflection
- Responsive layout for desktop and mobile
- Respects reduced-motion preferences
- Accessible time text for assistive technologies

## Tech stack

- React
- Vite
- CSS

## Getting started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Install and run

```bash
git clone https://github.com/sariyaAnjum/Digital_Clock.git
cd Digital_Clock
npm install
npm run dev
```

Open the local URL printed by Vite to view the clock.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  App.jsx       Clock interface and live time logic
  App.css       Clock layout, effects, and responsive styles
  index.css     Global styles and design tokens
  main.jsx      React application entry point
public/         Static assets
```

## Design inspiration

The 3D clock aesthetic was inspired by
[parsa-farshah/clock3D](https://github.com/parsa-farshah/clock3D), adapted for
this React application.
