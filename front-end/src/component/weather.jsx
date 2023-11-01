import React, {useState} from 'react'

function Weather() {
  const [cityName , setCity] = useState('');
  console.log(cityName)
  const [weatherData,setWeather]=useState("");
  const handleChange = (e)=>{
    setCity(e.target.value)
  }
  async function fetchWeather(){
    const jsondata = {
        city : cityName
    }
    try{
        const response = await fetch(`https://kubernetes-ahqh.vercel.app/weathersearch`,{
        // const response = await fetch(`http://todo.com/weathersearch`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(jsondata),
        })
        const result = await response.json()
        if(result.status === 'ok'){
            setWeather(result)
        }if(result.status === 'error'){
            alert(result.result)
        }
        console.log(result.result)
    }catch(err){
        console.log(err)
    }
  }
  return (
    <div >
        <h1>Weather</h1>
        <div>
            <div>
                <input type="text" value={cityName} onChange={handleChange} placeholder='City' autoFocus/>
                <button style={{marginLeft:'2px', borderRadius:'8px'}} onClick={()=>fetchWeather()} >Search</button>
            </div>
            <div>
                {!weatherData.result ? (<p>Please Enter City name</p>):(
                    <>
                        <p>Country: {weatherData.result?.sys.country}</p>
                        <p>City: {weatherData.result?.name}</p>
                        <p>Temperature: {weatherData.result?.main.temp}</p>
                        <p>Wind speed: {weatherData.result?.wind.speed}</p>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Weather