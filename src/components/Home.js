
import React, { useState } from 'react';
import "../styles/Home.css";
import searchIcon from "../assets/search.jpg";
import humidity from "../assets/humidity.jpg";
import wind from "../assets/wind-icon.webp";
import weather from "../assets/weather-icon.jpg";
import cloud from "../assets/sun-cloud.jpg";


const Home = () => {

const[search,setSearch] = useState("");
const[display,setDisplay] = useState({})

const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c66bf69dcb317c919482ad3dd72b195d`

const searchButton = () =>{
   fetch(url).then(response =>response.json())
    .then(data => {
       setDisplay(data)
       console.log(data)
      
  }
  )
}



  return (
    <div className="home-container">
    <div className='home'>
      <h2>Weather App</h2>
      <div className="container-display">
        <div className="input-display">
           <input type="text" placeholder='Enter city'  onChange={(e) =>setSearch(e.target.value)}/>
            <button className='submit-btn' onClick={searchButton}><img src={searchIcon} alt="iconSearch"  className="search" /></button>
       </div>
       
        <div className="display">
            {display.weather ? <h2 className="details">{display.weather[0].description}</h2> : null}
              <img src={weather} alt="weater-icon"  className='weather-icon'/>

                {display.main ? <h1 className="temp">{display.main.temp}°C</h1> : null}
                 <br />
                <h4 className="city-text">{display.name}</h4>
        </div>
        <div className="description">
          <div className="descript-1">
                 <img src={humidity} alt="hum" className='humidity-image' />
               <div className="text">
                  {display.main ? <span>{display.main.humidity}%</span> : null}
                   <p className="humidity">Humidity</p>
                </div>
            </div>
            <div className="descript-1">
                 <img src={cloud} alt="hum" className='cloud-image' />
               <div className="text">
                  {display.clouds ? <p>{display.clouds.all}Okta</p> : null}
                   <p className="cloud">Cloud</p>
                </div>
            </div>
         
          <div className="descript-1">
                 <img src={wind} alt="wind"  className='wind-image'/>
             <div className="text">
                {display.wind ? <span>{display.wind.speed}km/h</span> : null}
                <p className="wind">Wind speed</p>
             </div>
              </div>
          </div>
    </div>
    </div>
    </div>
  )
}

export default Home
