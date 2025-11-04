import { CssBaseline, Grid } from "@material-ui/core";
import { LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { getPlacesData, getWeatherData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const libraries = ["places", "geometry", "drawing"];

function App() {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  // Set user location as default coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Geolocation error:", error);
        // Fallback to a default location (e.g., London)
        setCoordinates({ lat: 51.507, lng: -0.127 });
      }
    );
  }, []);

  // Filter places on rating change
  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating, places]);

  // Fetch weather and places data when bounds or type changes
 useEffect(() => {
  if (!bounds.sw || !bounds.ne) return;

  const fetchData = async () => {
    setIsLoading(true);

    try {
      // Fetch both APIs concurrently
      const [placesResult, weatherResult] = await Promise.allSettled([
        getPlacesData(type, bounds.sw, bounds.ne),
        getWeatherData(coordinates.lat, coordinates.lng),
      ]);

      // Handle places data
      if (placesResult.status === "fulfilled") {
        const safePlaces = placesResult.value?.filter(
          (place) => place.name && place.num_reviews > 0
        );
        setPlaces(safePlaces || []);
        setFilteredPlaces([]); // reset filtered
      } else {
        console.error("Error fetching places:", placesResult.reason);
        setPlaces([]); // safe fallback
        setFilteredPlaces([]);
      }

      // Handle weather data
      if (weatherResult.status === "fulfilled") {
        setWeatherData(weatherResult.value || []);
      } else {
        console.error("Error fetching weather:", weatherResult.reason);
        setWeatherData([]); // safe fallback
      }
    } catch (error) {
      console.error("Unexpected error fetching data:", error);
      setPlaces([]);
      setFilteredPlaces([]);
      setWeatherData([]);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, [bounds, type]); // coordinates removed from dependencies


  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item md={4} xs={12}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </LoadScript>
  );
}

export default App;
