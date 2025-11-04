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
        setCoordinates({ lat: 51.507, lng: -0.127 }); // fallback location
      }
    );
  }, []);

  // Filter places on rating change
  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating, places]);

  // Fetch places data when bounds or type changes
  useEffect(() => {
    if (!bounds.sw || !bounds.ne) return;

    const fetchPlaces = async () => {
      setIsLoading(true);
      try {
        const data = await getPlacesData(type, bounds.sw, bounds.ne);
        const safePlaces = data?.filter(
          (place) => place.name && place.num_reviews > 0
        );
        setPlaces(safePlaces || []);
        setFilteredPlaces([]); // reset filtered
      } catch (error) {
        console.error("Error fetching places:", error);
        setPlaces([]);
        setFilteredPlaces([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaces();
  }, [bounds, type]);

  // Fetch weather data when coordinates change
  useEffect(() => {
    if (!coordinates.lat || !coordinates.lng) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const data = await getWeatherData(coordinates.lat, coordinates.lng);
        setWeatherData(data || []);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setWeatherData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [coordinates.lat, coordinates.lng]);

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
