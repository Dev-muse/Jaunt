# 🌍 Jaunt - Travel Advisor Application

Jaunt is a modern travel companion application that helps users discover top attractions, restaurants, and hotels from around the world. Built with React and powered by Google Maps API and Travel Advisor API, Jaunt provides an intuitive interface to explore destinations with real-time weather information.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://jauntapp.netlify.app/)
[![React](https://img.shields.io/badge/React-17.0.2-blue)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-4.12.3-blue)](https://material-ui.com/)

## 🎯 Features

- **🗺️ Interactive Map**: Explore locations with an interactive Google Maps interface
- **📍 Geolocation**: Automatically detects your current location
- **🔍 Smart Search**: Search for places anywhere in the world
- **🏨 Multiple Categories**: Find restaurants, hotels, and attractions
- **⭐ Rating Filter**: Filter results by user ratings
- **🌤️ Weather Integration**: Get real-time weather information for any location
- **📱 Responsive Design**: Seamless experience across all devices
- **🎨 Material Design**: Beautiful and intuitive Material-UI interface

## 🚀 Demo

Check out the live demo: [Jaunt App](https://jauntapp.netlify.app/)

## 🛠️ Tech Stack

**Frontend:**
- React 17.0.2
- Material-UI 4.12.3
- Google Maps API
- Axios

**APIs:**
- Travel Advisor API (RapidAPI)
- Open Weather Map API (RapidAPI)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- A RapidAPI account for API keys
- Google Maps API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dev-muse/Jaunt.git
   cd Jaunt
   ```

   
2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your API key:
   ```env
   REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
   ```

4. **Update Google Maps API Key**
   
   Open `public/index.html` and replace the Google Maps API key in the script tag with your own:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=YOUR_GOOGLE_MAPS_API_KEY"></script>
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## 🔑 Getting API Keys

### RapidAPI Key
1. Sign up at [RapidAPI](https://rapidapi.com/)
2. Subscribe to [Travel Advisor API](https://rapidapi.com/apidojo/api/travel-advisor)
3. Subscribe to [Open Weather Map API](https://rapidapi.com/community/api/open-weather-map)
4. Copy your API key from the dashboard

### Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Maps JavaScript API
4. Create credentials (API Key)
5. Copy your API key

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
jaunt/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── api/
│   │   └── index.js          # API calls
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Header/           # Search header component
│   │   ├── List/             # Places list component
│   │   └── Map/              # Map component
│   ├── App.js                # Main app component
│   └── index.js              # Entry point
├── .env                      # Environment variables
├── package.json
└── README.md
```

## 🎮 How to Use

1. **Allow Location Access**: Grant permission for the app to access your location
2. **Explore the Map**: Pan and zoom to explore different areas
3. **Search Locations**: Use the search bar to find specific places
4. **Filter Results**: 
   - Select type (Restaurants, Hotels, Attractions)
   - Filter by minimum rating
5. **View Details**: Click on markers or list items to see more information
6. **Check Weather**: View current weather conditions for the displayed location

## 🌐 APIs Used

- **Travel Advisor API**: Provides data for restaurants, hotels, and attractions
- **Open Weather Map API**: Supplies real-time weather information
- **Google Maps JavaScript API**: Powers the interactive map interface

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rahman muse**
- GitHub: [@Dev-muse](https://github.com/Dev-muse)

## 🙏 Acknowledgements

- [React Documentation](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Google Maps Platform](https://developers.google.com/maps)
- [RapidAPI](https://rapidapi.com/)
- [Awesome README Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [How to Write a Good README](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## 📧 Support

If you have any questions or run into issues, please open an issue on GitHub.


**Made with ❤️ by Dev-muse**
  
