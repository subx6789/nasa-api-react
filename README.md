# NASA APOD Website
This project is a fully responsive website built using React.js that displays NASA's Astronomy Picture of the Day (APOD). It fetches data from the NASA APOD API and includes functionality for caching the API data to improve performance and reduce unnecessary API calls.

## Features
- React.js: A JavaScript library for building user interfaces.
- NASA API: Fetches the Astronomy Picture of the Day from NASA's public API.
- Fully Responsive: The website is designed to work seamlessly on all device sizes.
- Caching: Implements localStorage to cache the API data for the current day, reducing the number of API calls.

## Technologies Used
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- NASA APOD API 🚀

## Components
- App: The main component that handles state and renders other components.
- Footer: Displays the footer of the website.
- Main: Displays the main content, including the APOD image.
- Sidebar: A sidebar that can be toggled to show additional information or controls.

## Installation

### Clone the repository:

   ```sh
   git clone https://github.com/subx6789/nasa-api-react.git
   cd nasa-apod-website
   ```

### Install dependencies:

   ```sh
   npm install
   ```

### Set up your environment variables:
Create a .env file in the root directory and add your NASA API key:

   ```sh
   VITE_API_KEY=your_nasa_api_key
   ```

### Run the development server:

   ```sh
   npm run dev
   ```

- The website should now be running at http://localhost:5137.

## Usage
- Home Page: On loading the home page, the app fetches the Astronomy Picture of the Day from NASA's API.
- Caching: The app caches the fetched data for the current day using localStorage. If the user revisits the page on the same day, the data is loaded from the cache instead of making a new API call.

## Acknowledgements
- [NASA APOD API](https://api.nasa.gov/) for providing the Astronomy Picture of the Day data.
- React.js for the amazing library that makes building user interfaces a breeze.
