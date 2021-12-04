import React,{useState,useEffect} from 'react'
import {getPlacesData} from './api'
import {CssBaseline , Grid} from '@material-ui/core'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

function App() {
    // Map coordinate state
    const [coordinates, setCoordinates] = useState({});

    // child clicked state
    const [childClicked, setChildClicked] = useState(null)


    // Map bounds state 
    const [bounds , setBounds] = useState({})

    // store travel api data in state
    const [places,setPlaces] = useState([]);
    
    // set users location as default coordinates
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat: latitude, lng: longitude})
        })
        },[])
    

    //store api data in state on map change 
    useEffect(()=>{
        getPlacesData(bounds.sw, bounds.ne).then(data=>setPlaces(data))
    },[coordinates,bounds]);



    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width:'100%'}}>
                <Grid item md={4} xs={12}>
                    <List places={places} childClicked={childClicked}/>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Map setCoordinates= {setCoordinates}
                         setBounds={setBounds}
                         coordinates = {coordinates} 
                         places={places}
                         setChildClicked={setChildClicked}
                         />
                </Grid>
            </Grid>                   
        </>
    )
}

export default App
