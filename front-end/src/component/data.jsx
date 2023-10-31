import React, {useState,useEffect} from 'react'
import moment from 'moment'

function User() {
  const [data,setData] = useState('') 

  async function fetchData(){
    try{
        // const res = await fetch(`http://todo.com/sensors`)
        const res = await fetch(`http://127.0.0.1:8080/am319`)
        const result = await res.json()
        setData(result.result)
        console.log(result)
        // setData(result.result[0])
        // console.log(result.result[0].Temperature)
    }catch(err){
        console.log(err)
    }
  }
  useEffect(()=>{
    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 10 seconds
    }, 15000); // 10000 milliseconds = 10 seconds
    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  })
  
  return (
    <div>
      <h3>Temperature sensors</h3>
      {!data.temperature ? (<p>Loading Data....</p>):(
        <>
        <p>Last update: {(data?.Timestamp).replace(/T/, ' ').replace(/\..+/, '') }</p>
        <p>Temperature: {data?.temperature}</p>
        <p>Humidity: {data?.humidity}</p>
        </>
      )}
    </div>
  )
}

export default User