# Mini Action Inbox

A small React + TypeScript app for viewing and managing action items. It shows a mock inbox of emails, tasks, meetings, and follow-ups, with simple controls to filter by status and mark items active or completed.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```
Runs the app locally with hot reload.
Vite will print a local URL, usually `http://localhost:5173`, where you can open the app in your browser.


## Project Notes

- Mock action items live in `src/mockData.ts`.
- The main app view is in `src/App.tsx`.
- Individual action item rows are rendered by `src/ActionItem.tsx`.

## What I would improve next

I would use React Virtualized to virtualize the list so that only visible elements are rendered
