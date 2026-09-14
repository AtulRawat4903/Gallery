# My Gallery

A photo gallery app built with React and the Unsplash API. Search for photos, browse them in a masonry layout, save favorites (persisted in `localStorage`), and view full-size images in a modal.

## Features

- **Search** — query the Unsplash API for photos by keyword, loads "nature" photos by default on first render.
- **Masonry gallery** — responsive multi-column layout (2 columns on mobile, 3 on tablet, 4 on desktop) using CSS columns, with staggered fade-in animation per card.
- **Favorites** — toggle a heart on any photo to save/remove it; favorites persist across sessions via `localStorage`.
- **Image modal** — click any photo to view it full-size with a fade/scale transition; closable via the close button, clicking the backdrop, or the `Escape` key.
- **Loading skeletons** — animated shimmer placeholders shown while a search is in flight.
- **Image lazy-load shimmer** — each individual card shows a shimmer placeholder until its image finishes loading.

## Tech Stack

- React (hooks: `useState`, `useEffect`, `useCallback`, `useRef`)
- Axios for API requests
- Tailwind CSS for styling
- Unsplash API (`/search/photos` endpoint)
- Google Fonts: Newsreader (display/italic headings) and Inter (body text)

## Project Structure

```
src/
├── App.jsx                  # Root component: state, data fetching, view routing
├── index.css                 # Tailwind import, custom keyframes, font setup
└── components/
    ├── Navbar.jsx             # Title + Gallery/Favorites toggle switch
    ├── SearchBar.jsx          # Search input with icon button, triggers on Enter or click
    ├── Gallery.jsx            # Masonry grid of ImageCards for search results
    ├── Favorites.jsx          # Grid of ImageCards for saved favorites
    ├── ImageCard.jsx          # Individual photo card: lazy-load shimmer, favorite toggle, hover overlay
    ├── ImageModal.jsx         # Full-size image viewer overlay
    └── SkeletonGrid.jsx       # Shimmer placeholder grid shown while loading
```

## Component Overview

### `App.jsx`
Holds top-level state: `images`, `favorites` (synced to `localStorage`), `view` (`"gallery"` or `"favorites"`), `selectedImage`, `loading`, and `error`. Fetches images from Unsplash via `fetchImages(query)` and renders one of: skeleton grid, error message, favorites view, empty state, or the gallery — based on current state.

### `Navbar.jsx`
Displays the app title and a pill-shaped toggle to switch between Gallery and Favorites views, with an animated sliding indicator.

### `SearchBar.jsx`
Controlled text input with a search icon button. Submits on `Enter` or icon click, calling `onSearch` passed down from `App`.

### `Gallery.jsx` / `Favorites.jsx`
Both render a grid of `ImageCard` components — `Gallery` uses a CSS-column masonry layout for search results, `Favorites` uses a standard grid for saved images.

### `ImageCard.jsx`
Renders a single photo with:
- Shimmer placeholder until the image loads (`onLoad`/`onError`)
- Staggered entrance animation based on index
- Heart button to toggle favorite status, with a "pop" animation on click
- Hover overlay showing the photographer's name
- Click opens the image in `ImageModal`

### `ImageModal.jsx`
Full-screen overlay showing the selected image at full resolution, with photographer name and location (if available). Closes via backdrop click, close button, or `Escape` key. Uses `useCallback` for a stable `close` reference and animates in/out with opacity/scale transitions.

### `SkeletonGrid.jsx`
Renders a masonry grid of shimmering placeholder blocks (varied heights) shown while a search request is in flight.

### `index.css`
Imports Tailwind, defines custom keyframe animations (`fadeInUp`, `heartPop`, `shimmer`), and sets up the `Newsreader` (italic display font) and `Inter` (body font) typefaces.

## Setup

Clone this repo.
Inside your project folder, run these commands:
**npm install** and
**npm run dev**
