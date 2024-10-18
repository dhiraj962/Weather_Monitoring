# Weather_Monitoring
This is a simple weather application that allows users to view current and forecasted weather conditions for a specific location. The app uses the OpenWeatherMap API to fetch real-time weather data, and it provides users with information such as temperature, weather descriptions, humidity, and wind speed. The app updates automatically every 15 minutes.

Features
Displays the current weather with a description.
Shows the forecast for upcoming days.
Allows users to search weather by entering the city name.
Responsive layout with animations.
.
├── index.html       # Main HTML file for the Weather App
├── dhi.css          # Stylesheet for the Weather App
├── dh.js            # JavaScript logic for fetching and displaying weather data
└── README.md        # Instructions for running the project

Instructions to Run the Project
Follow the steps below to get the weather app running:

1. Clone or Download the Project
Clone the repository to your local machine using the following command:
bash
Copy code
git clone https://github.com/your-username/weather-app.git
Or download the ZIP file and extract it.

3. Open the Project in a Code Editor
Open the folder containing the project files (index.html, dhi.css, dh.js) in your preferred code editor (e.g., VSCode)

4. Open the Project in a Code Editor
Open the folder containing the project files (index.html, dhi.css, dh.js) in your preferred code editor (e.g., VSCode, Sublime Text).

5. Replace the API Key
Open dh.js and replace the placeholder API key with your own from OpenWeatherMap:
javascript
Copy code
appid: 'your-api-key-here'

7. Run the Application
Simply open index.html in your web browser by double-clicking the file or dragging it into the browser window.

9. Use the App
Enter the name of a city in the text input to view its current and forecasted weather.
The weather updates automatically every 15 minutes.

How the App Works
Weather Fetching: The app listens for changes in the city input field and sends a request to the OpenWeatherMap API using Axios to retrieve the weather data.
Data Display: The current temperature, weather description, humidity, wind speed, and 5-day forecast are displayed dynamically based on the API response.
Icons: Weather icons corresponding to different weather conditions are fetched from OpenWeatherMap using their icon codes.

External Libraries
Font Awesome: Used for displaying icons like location and wind speed.
Google Fonts: Used for custom fonts, providing a modern and sleek look.
Axios: Used for making HTTP requests to the weather API.

Troubleshooting
API Key Issues: If you see an error message regarding the API key, ensure that you have replaced the placeholder with a valid key.
CORS Issues: If you're developing locally and encounter CORS errors, consider using a local server like Live Server in VSCode to serve your files.
Network Errors: If the app fails to fetch weather data, check your internet connection and the status of the OpenWeatherMap API.
