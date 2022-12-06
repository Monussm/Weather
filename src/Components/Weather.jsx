import { useState,useEffect } from "react";
const Weather=()=>
{
    const [city,setCity]=useState(null)
    const [search,searchSet]=useState("India")
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a89b87fd28e5cb4141bd64d84b694a31`
    const getdetails=async()=>
    {
        const response=await fetch (url)
        const ndata=await response.json()
        console.log(ndata)
        setCity(ndata.main)

    }


useEffect(()=>
{
 
    getdetails()

},[]
)

    return<>
    <div className="container">
        <input type="search" 
        value={search}
        onChange={(event)=>{searchSet(event.target.value)}}/>
        {!city ?(
                    <p>Not data founds</p>

        ):(
            <>
             <h1>{search}</h1>
             <p>{city.temp}</p>
            
            </>


        )



        }

    </div>
       
        
       
    
    
    
    
    </>
}
export default Weather;