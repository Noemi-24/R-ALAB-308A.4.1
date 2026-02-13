# Cat Breed Explorer - Axios API Lab

## Description
This project is a learning exercise for understanding HTTP requests, APIs, and the Axios library. 
It fetches cat breed data from **TheCatAPI** and displays images, breed information, and details 
about different cat breeds in an interactive carousel. Users can select a breed from a dropdown, 
view cat images, and mark favorites.

## Objectives Learned

### Core Concepts
- **HTTP Requests with Axios**: Understanding GET and POST requests using the Axios library
- **API Integration**: Fetching data from a third-party REST API (TheCatAPI)
- **Async/Await**: Writing asynchronous code and handling promises
- **Error Handling**: Implementing try/catch blocks for robust error management
- **Request Headers**: Setting default headers and authentication (API keys)

### Key Skills Developed
- Converting from `fetch()` to `axios` for HTTP requests
- Setting axios default configuration (baseURL, headers)
- Working with API responses and parsing JSON data
- Optional chaining (`?.`) for safe property access
- Event listeners and DOM manipulation
- Managing loading states and user feedback

### Best Practices Applied
- Separating API calls into organized functions
- Using default headers to avoid repetition of API keys in URLs
- Guarding against null/undefined values before accessing nested properties
- Proper error handling with specific error messages
- Modular code structure with imports/exports

## Project Structure
```text
├── index.html          # Main HTML file with page structure
├── index-axios.js      # Main application file (Axios version)
├── index-fetch.js      # Original fetch-based version (reference)
├── Carousel.js         # Carousel component and image display logic
├── styles.css          # Styling for the application
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

### File Descriptions

- **index.html**: Contains the page layout, form inputs (breed selector), carousel, and info display
- **index-axios.js**: Main app logic using Axios; handles breed loading, image fetching, and favorites
- **Carousel.js**: Reusable carousel component for displaying cat images with favorite buttons
- **styles.css**: Custom CSS styling for the UI

## How to Use It

### Prerequisites
- Node.js and npm installed on your system
- A package manager (npm or yarn)

### Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
    ```bash
   npm start
   ```
3. **Build for production**:
    ```bash
   npm run build
   ```

### Next Steps

## Enhanced Error Handling:

- Add retry logic for failed requests
- Implement user-friendly error messages with retry buttons
- Display loading spinners while fetching data

## UI/UX Enhancements:

- Add search/filter by breed characteristics
- Responsive design improvements for mobile devices
- Add image lightbox or modal for full-size viewing

## Advanced Axios Usage:

- Implement interceptors for request/response logging
- Add request timeouts
- Handle multiple concurrent requests with Promise.all()

---

### Author
Student: Noemi Roldan
Course: R-ALAB-308A.4.1 - Advanced JavaScript
Module: 308A - AJAX, Fetch & Axios
Date: February 2026