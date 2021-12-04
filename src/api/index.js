import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


  


export const getPlacesData  = async (sw,ne)=>{
    try{
        // request
        const {data:{data}} = await axios.get(URL,{
        
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '0c607a869fmsh58a777006292edep1b62ebjsn9b600a15f114'
            }


        });


        return data

    }catch(error){
        console.log(error)

    }

}