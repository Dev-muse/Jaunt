import React,{useState,useEffect} from 'react'
import {getPlacesData,getWeatherData} from './api'
import {CssBaseline , Grid} from '@material-ui/core'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

function App() {

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    // Map coordinate states
    const [coordinates, setCoordinates] = useState({});
    const [bounds , setBounds] = useState({})
    

    // child clicked state for List & Map
    const [childClicked, setChildClicked] = useState(null)

    // loading state 
    const [isLoading,setIsLoading] = useState(false);


    // store api data in state
    const [places,setPlaces] = useState([]);
    const [weatherData,setWeatherData] = useState([]);

    const [filteredPlaces,setFilteredPlaces] = useState([]);
    
    // set users location as default map coordinates
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude} })=>{
            setCoordinates({lat: latitude, lng: longitude})
            
        })
        },[])


    // filter places data on change of rating state
    useEffect(()=>{
        const filtered = places.filter((place) => Number(place.rating) > rating);
        setFilteredPlaces(filtered)
        
    },[rating])



    //getting api weather and places data and set in state
    useEffect(()=>{
        
        if(bounds.sw && bounds.ne){

           setIsLoading(true);

           getWeatherData(coordinates.lat, coordinates.lng).then(data=>setWeatherData(data))

            getPlacesData(type,bounds.sw, bounds.ne).then((data)=>{
                setPlaces(data?.filter(place=>place.name && place.num_reviews > 0));
                setFilteredPlaces([])
                setIsLoading(false);
            })
        }

    },[bounds,type]);



    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Grid container spacing={3} style={{width:'100%'}}>
                <Grid item md={4} xs={12}>
                    <List places={filteredPlaces.length? filteredPlaces : places} 
                          childClicked={childClicked} isLoading={isLoading}
                          type={type} setType={setType} 
                          rating={rating} setRating={setRating} />
                </Grid>
                <Grid item md={8} xs={12}>
                    <Map setCoordinates= {setCoordinates}
                         setBounds={setBounds}
                         coordinates = {coordinates} 
                         places={filteredPlaces.length? filteredPlaces : places}
                         setChildClicked={setChildClicked}
                         weatherData={weatherData}
                         />
                </Grid>
            </Grid>                   
        </>
    )
}

export default App
