# ScentStore Website Documentation

## Overview

ScentStore is a small homemade perfume shop website built with Node.js, Express, HTML, CSS, and vanilla JavaScript. It presents a simple online storefront for handcrafted perfumes, lets users browse products, add items to a cart, and open a login/sign up screen.

The current store focuses on three signature perfumes:

- Rose Delight: a sweet rose scent with natural oils
- Lavender Calm: a relaxing lavender fragrance
- Citrus Fresh: a refreshing citrus aroma

## Main Features

- Responsive storefront layout with a warm perfume-shop design
- Product catalog loaded from local JSON data
- Shopping cart with quantity controls, totals, and persistent storage in the browser
- Login and sign up page for future account integration
- Clean Express backend for serving static files and product data

## Pages

### Home page

The home page is the main shopping experience. It shows the store branding, product cards, and cart controls. Visitors can browse perfumes and add items to their cart without leaving the page.

### Login / Sign up page

The auth page provides separate login and registration forms. Right now it is a front-end interface with demo validation and placeholder feedback, ready to be connected to a real authentication backend later.

## How the Store Works

1. The Express server serves the files inside the `public` folder.
2. The homepage requests perfume data from `/api/perfumes`.
3. Each perfume card is rendered dynamically in the browser.
4. When a user adds an item to the cart, the cart is saved in `localStorage` so it remains available after refresh.
5. The login and sign up page gives the store a complete account flow for future expansion.

## API

### `GET /api/perfumes`

Returns the perfume catalog from `data/perfume.json` as JSON.

Example response:

```json
[
  {
    "name": "Rose Delight",
    "description": "Sweet rose scent with natural oils.",
    "price": 15,
    "image": "perfume1.jpg"
  }
]
```

## Project Structure

- `server.js`: Express server and API route
- `data/perfume.json`: perfume catalog data
- `public/index.html`: storefront homepage
- `public/auth.html`: login and sign up page
- `public/css/styles.css`: shared styling for the site
- `public/images/`: product images and visual assets

## Running the Website

1. Install dependencies with `npm install`.
2. Start the server with `node server.js`.
3. Open `http://localhost:4000` in your browser.

## Notes

- The cart is currently stored in the browser only.
- Authentication is designed as a UI flow and is not connected to a backend yet.
- The site name appears as ScentStore in the current homepage branding.