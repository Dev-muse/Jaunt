import React,{useState,useEffect} from 'react'
import {getPlacesData} from './api'
import {CssBaseline , Grid} from '@material-ui/core'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

function App() {

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    // Map coordinate state
    const [coordinates, setCoordinates] = useState({});

    // child clicked state for List & Map
    const [childClicked, setChildClicked] = useState(null)

    // loading state 
    const [isLoading,setIsLoading] = useState(false);


    // Map bounds state 
    const [bounds , setBounds] = useState({})

    // store travel api data in state
    const [places,setPlaces] = useState([]);

    const [filteredPlaces,setFilteredPlaces] = useState([]);
    
    // set users location as default coordinates
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat: latitude, lng: longitude})
        })
        },[])
    
    useEffect(()=>{
        const filteredPlaces = places?.filter((place)=>place.rating > rating)
        setFilteredPlaces(filteredPlaces)
        
    },[rating])



    //store api places data in state on map change 
    useEffect(()=>{
        setIsLoading(true);

        getPlacesData(type,bounds.sw, bounds.ne)
            .then((data)=>{
                setPlaces(data);
                setFilteredPlaces([])
                setIsLoading(false);
            })

    },[coordinates,bounds,type]);



    return (
        <>
            <CssBaseline />
            <Header />
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
                         />
                </Grid>
            </Grid>                   
        </>
    )
}

export default App
