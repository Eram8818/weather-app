const input= document.querySelector("input");
const searchBtn=document.querySelector(".search-btn");
const temp=document.querySelector(".temp");
const cityName=document.querySelector(".city-name");
const humidity=document.querySelector(".humidity span:last-child");
const uv=document.querySelector(".uv span:last-child");
const dayTime=document.querySelector(".day-time");
const pressure=document.querySelector(".pressure span:last-child");

const apiKey = "52a472fde13d46cbb50124320260607";

searchBtn.addEventListener("click",() =>{
    const typedWord = input.value;
    if(typedWord.trim()===""){
        alert("Please type the city name");
    }
    else{
      const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${typedWord}`
      const getWeather = async () =>{
        let response = await fetch(URL);
        let weather=await response.json();
        console.log(weather.current);
        temp.innerHTML=weather.current.temp_c + "°";
        dayTime.innerHTML=weather.location.localtime;
        cityName.innerHTML=weather.location.name;
        humidity.innerHTML=weather.current.humidity + "%";
        uv.innerHTML=weather.current.uv;
        pressure.innerHTML=weather.current.pressure_mb + " hPa";
        
        }
    getWeather();
    }
});