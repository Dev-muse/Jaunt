import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const Map = ({coordinates,setCoordinates,setBounds,places,setChildClicked}) => {
    const classes = useStyles();

    // set to false if device width >600px
    const isDesktop = useMediaQuery('(min-width:600px)');
    


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
            bootstrapURLKeys = {{key: 'AIzaSyB2RGP8ZFcahgaNndgdDNsXoSvEzXiukI8'}}
            defaultCenter ={coordinates}
            center={coordinates}
            defaultZoom = {14}
            margin={[50,50,50,50]}
            options={''}
            onChange = {(e)=>{
                setCoordinates({lat: e.center.lat,lng: e.center.lng})
                setBounds({ne: e.marginBounds.ne,sw: e.marginBounds.sw})
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

            </GoogleMapReact>             
        </div>
    )
}

export default Map
