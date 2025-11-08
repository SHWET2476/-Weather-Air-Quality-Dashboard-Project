# -Weather-Air-Quality-Dashboard-Project
This document summarizes the development of the Weather + Air Quality Dashboard project.
 The project is built using HTML, CSS, and JavaScript with data from the OpenWeather API. It
 was designed to be unique, resume-ready, and user-friendly.
 • Step 1: Project Setup: Created a project folder with three main files: index.html (structure),
 style.css (design), and script.js (logic).
 • Step 2: API Key Setup: Signed up at OpenWeather, generated an API key, and tested
 Weather API + Air Quality API in the browser.
 • Step 3: HTML Structure: Built a modern HTML layout with a search input, button, and result
 cards for weather and air quality.
 • Step 3.5: CSS Styling: Applied Glassmorphism design with gradient backgrounds, frosted
 glass containers, and styled input/button.
 • Step 4: JavaScript Core Functionality: Connected Weather API → extracted temperature,
 humidity, condition, and coordinates. Then used coordinates in Air Pollution API → extracted
 AQI value. Displayed results dynamically.
 • Step 5.1: Dynamic Background: Background gradient changes automatically based on
 weather condition (Clear, Rain, Snow, Cloudy).
 • Step 5.2: AQI Health Tips: Along with AQI value, displayed helpful health tips (e.g., 'Great air
 quality! Perfect for outdoor activities').
 • Step 5.3: Save Last Search: Stored last searched city in localStorage and auto-loaded it when
 reopening the page.
 • Step 5.4: Added Wind Data: Displayed wind speed (m/s) and direction (degrees) along with
 weather data for completeness.
 Interview Tips:- Be ready to explain how you fetched data from the OpenWeather API using fetch() in JavaScript.- Show how you handled two APIs (Weather → lat/lon, then Air Quality using lat/lon).- Mention localStorage usage for persistence.- Point out the dynamic UI (Glassmorphism + changing background).- Highlight the health tips feature as a unique touch.- If asked about improvements, suggest adding charts, forecast data, or geolocation-based
 auto-detection.
 This project demonstrates skills in JavaScript (fetch, DOM manipulation, localStorage), CSS
 (modern UI design), and API integration. It is a strong intermediate-level project to showcase
 on a resume or portfolio
