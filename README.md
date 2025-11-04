# 🌍 Jaunt - Your Travel Companion

<div align="center">

![Jaunt Logo](src/assets/logo.svg)

**Discover the world's best restaurants, hotels, and attractions with real-time weather information**

[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-4.12.3-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://material-ui.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[Live Demo](https://jaunt-gold.vercel.app/) • [Report Bug](https://github.com/Dev-muse/Jaunt/issues) • [Request Feature](https://github.com/Dev-muse/Jaunt/issues)

</div>

---

## 📖 About The Project

Jaunt is a modern, responsive travel advisor application that helps explorers discover amazing places around the world. Whether you're searching for the perfect restaurant, a comfortable hotel, or exciting attractions, Jaunt provides detailed information, ratings, and real-time weather data to help you make informed decisions.

### ✨ Key Features

- 🗺️ **Interactive Google Maps** - Seamlessly explore locations with a fully interactive map interface
- 📍 **Geolocation Support** - Automatically detects and centers on your current location
- 🔍 **Smart Autocomplete Search** - Powered by Google Places API for instant location search
- 🏨 **Multiple Categories** - Browse restaurants, hotels, and attractions in any area
- ⭐ **Rating Filters** - Filter places by minimum rating (3.0, 3.5, 4.0, 4.5+)
- 🌤️ **Real-Time Weather** - View current weather conditions for any location
- 📱 **Fully Responsive** - Optimized experience across desktop, tablet, and mobile devices
- 🎨 **Beautiful UI** - Clean, modern interface built with Material-UI
- 🖼️ **Rich Place Details** - View photos, ratings, reviews, pricing, and contact information
- 🔄 **Dynamic Updates** - Results update automatically as you pan and zoom the map

---

## 🚀 Live Demo

Experience Jaunt in action: **[https://jauntapp.netlify.app/](https://jauntapp.netlify.app/)**

---

## 🛠️ Built With

**Frontend Framework:**
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Material-UI](https://material-ui.com/) - React UI framework

**APIs & Services:**
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript) - Interactive maps and geolocation
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service) - Autocomplete search
- [Travel Advisor API](https://rapidapi.com/apidojo/api/travel-advisor) - Restaurant, hotel, and attraction data
- [Open Weather Map API](https://rapidapi.com/community/api/open-weather-map) - Real-time weather information

**Additional Libraries:**
- [Axios](https://axios-http.com/) - HTTP client for API requests
- [google-map-react](https://github.com/google-map-react/google-map-react) - Google Maps wrapper component

---

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **API Keys** (see setup instructions below):
  - RapidAPI account (for Travel Advisor & Weather APIs)
  - Google Cloud account (for Maps & Places APIs)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Dev-muse/Jaunt.git
cd Jaunt
```


### 2️⃣ Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 3️⃣ Get Your API Keys

#### **RapidAPI Keys** (Travel Advisor & Weather)

1. Sign up at [RapidAPI](https://rapidapi.com/)
2. Subscribe to [Travel Advisor API](https://rapidapi.com/apidojo/api/travel-advisor)
3. Subscribe to [Open Weather Map API](https://rapidapi.com/community/api/open-weather-map)
4. Copy your RapidAPI key from the dashboard

#### **Google Maps API Key**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
4. Navigate to **Credentials** → **Create Credentials** → **API Key**
5. Copy your API key
6. **Important:** Restrict your API key to prevent unauthorized use

### 4️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**Security Note:** Never commit your `.env` file to version control. It's already included in `.gitignore`.

### 5️⃣ Start the Development Server

```bash
npm start
```

The application will automatically open at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
jaunt/
├── public/
│   ├── index.html              # HTML template
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── api/
│   │   └── index.js            # API integration (Travel Advisor & Weather)
│   ├── assets/
│   │   └── logo.svg            # Application logo
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx      # Search bar with autocomplete
│   │   │   └── styles.js       # Component styles
│   │   ├── List/
│   │   │   ├── List.jsx        # Places list with filters
│   │   │   └── styles.js
│   │   ├── Map/
│   │   │   ├── Map.jsx         # Interactive Google Map
│   │   │   ├── mapStyles.js    # Custom map styling
│   │   │   └── styles.js
│   │   └── PlaceDetails/
│   │       ├── PlaceDetails.jsx # Individual place card
│   │       └── styles.js
│   ├── App.js                  # Main application component
│   └── index.js                # Application entry point
├── .env                        # Environment variables (create this)
├── .gitignore
├── package.json
└── README.md
```

---

## 🎮 How to Use

1. **Allow Location Access**  
   When prompted, grant the application permission to access your location for automatic positioning.

2. **Explore the Map**  
   Pan, zoom, and navigate the interactive map to discover places around the world.

3. **Search for Locations**  
   Use the search bar at the top to find specific cities, addresses, or points of interest.

4. **Filter Your Results**
   - **Type:** Choose between Restaurants, Hotels, or Attractions
   - **Rating:** Set a minimum rating filter (e.g., show only 4+ star places)

5. **View Place Details**  
   Click on map markers or list items to see detailed information including:
   - Photos
   - Ratings and reviews
   - Price range
   - Contact information
   - Rankings

6. **Check the Weather**  
   View real-time weather conditions for the current map location.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000) |
| `npm build` | Builds the app for production to the `build` folder |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm eject` | Ejects from Create React App (⚠️ irreversible) |

---

## 🐛 Troubleshooting

### Map not loading?
- Verify your Google Maps API key is correct in `.env`
- Ensure Maps JavaScript API is enabled in Google Cloud Console
- Check browser console for API errors

### No places showing up?
- Confirm your RapidAPI key is valid and has active subscriptions
- Check that you haven't exceeded API rate limits
- Try zooming in closer to a specific location

### Location not detecting?
- Allow location permissions in your browser
- Check that your browser supports geolocation
- Try manually searching for a location

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Rahman Muse**

- GitHub: [@Dev-muse](https://github.com/Dev-muse)
- Project Link: [https://github.com/Dev-muse/Jaunt](https://github.com/Dev-muse/Jaunt)

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Material-UI Components](https://material-ui.com/components/)
- [Google Maps Platform](https://developers.google.com/maps)
- [RapidAPI Hub](https://rapidapi.com/)
- [Create React App](https://create-react-app.dev/)
- Icons by [Material-UI Icons](https://material-ui.com/components/material-icons/)

---

## 📧 Support

If you encounter any issues or have questions:

- 🐛 [Open an Issue](https://github.com/Dev-muse/Jaunt/issues)
- 💬 [Start a Discussion](https://github.com/Dev-muse/Jaunt/discussions)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Dev-muse](https://github.com/Dev-muse)

</div>
 
