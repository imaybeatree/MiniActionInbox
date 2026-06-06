## CODEX
Used to generate mock action items data in mockData.ts and to write README with some modifications of my own.
Used to make performance improvements across the action item list:

- In `src/ActionItem.tsx`, wrapped `ActionItemRow` with React `memo` so rows that did not change can skip unnecessary re-renders.
- In `src/App.tsx`, added `useCallback` for the status toggle handler so the same function reference can be reused between renders.
- In `src/App.tsx`, added a stable filter change handler with `useCallback` instead of creating an inline function inside the JSX on every render.
- In `src/index.css`, added `content-visibility: auto` and `contain-intrinsic-size` to action item rows so the browser can avoid extra layout and paint work for offscreen rows when the list grows.
- Verified the changes by running `npm run lint` and `npm run build`.
