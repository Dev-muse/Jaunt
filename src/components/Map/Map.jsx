import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import mapStyles from './mapStyles';
import useStyles from './styles';

const Map = ({coordinates,setCoordinates,setBounds,places,setChildClicked,weatherData}) => {
    const classes = useStyles();

    // set to false if device width >600px
    const isDesktop = useMediaQuery('(min-width:600px)');
    console.log({weatherData})


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
            bootstrapURLKeys = {{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
            defaultCenter ={coordinates}
            center={coordinates}
            defaultZoom = {14}
            margin={[50,50,50,50]}
            options={{disableDefaultUI: true ,zoomControl:true,styles: mapStyles }}
            onChange = {(e)=>{
                setCoordinates({lat: e.center.lat,lng: e.center.lng});
                setBounds({ne: e.marginBounds.ne,sw: e.marginBounds.sw});
            }}
            onChildClick={(child)=>setChildClicked(child)}
            
            >
                {places?.map((place,index)=>(
                    <div className={classes.markerContainer}
                         lat={Number(place.latitude)}
                         lng={Number(place.longitude)}
                         key={index}                  
                    >
                        {!isDesktop?(
                            <LocationOnOutlinedIcon color="primary" fontSize="large" />
                        ): (
                            <Paper elevation={3} className={classes.paper}>
                                 <Typography gutterBottom className={classes.typography} variant="subtitle2">
                                     {place.name}
                                 </Typography>
                                 <img className={classes.pointer} 
                                      src={place.photo? place.photo.images.large.url:'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt={place.name} />
                                <Rating size="small" value={Number(place.rating)} readOnly/>
                            </Paper>
                        )
                        }
                    </div>
                ))}
                {
                    weatherData?.list?.map((data,i)=>(
                        <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                            <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} height={100} alt="weather icon" />

                        </div>
                    ))
                }

            </GoogleMapReact>             
        </div>
    )
}

export default Map
