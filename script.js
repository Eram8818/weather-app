const input= document.querySelector("input");
const searchBtn=document.querySelector(".search-btn");
const temp=document.querySelector(".temp");
const cityName=document.querySelector(".city-name");
const weatherTxt=document.querySelector(".text");
const humidity=document.querySelector(".humidity span:last-child");
const uv=document.querySelector(".uv span:last-child");
const dayTime=document.querySelector(".day-time");
const midBg=document.querySelector(".sunrise-pic");
const pressure=document.querySelector(".pressure span:last-child");
const content=document.querySelector(".weather-card");
const apiKey = "52a472fde13d46cbb50124320260607";
const getWeather = async (typedWord) =>{
        const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${typedWord}`;
        let response = await fetch(URL);
        let weather=await response.json();
        if(weather.error){
            alert(weather.error.message);
            return;
        }
        content.style.display = "block";
        console.log(weather.current);
        temp.innerHTML=Math.round(weather.current.temp_c) + "°C";
        dayTime.innerHTML=weather.location.localtime;
        cityName.innerHTML=weather.location.name;
        humidity.innerHTML=weather.current.humidity + "%";
        uv.innerHTML=weather.current.uv;
        pressure.innerHTML=weather.current.pressure_mb + " hPa";
        weatherTxt.innerHTML=weather.current.condition.text;
        
        changeBg(weather);
        }
const changeBg = (weather) =>{
    const condition= weather.current.condition.code;
    const condition2= weather.current.condition.text;
    const day_night=weather.current.is_day;
    if(day_night===0){
        midBg.style.backgroundImage = "url('assets/moon3.png')";  
    }
    else{
        if(condition===1000){//sunny
        midBg.style.backgroundImage = "url('assets/afternoon bg.png')";
        }
        else if(condition===1003){//partly cloudy
        midBg.style.backgroundImage = "url('assets/pc.png')";
        }
        else if(condition===1006){//cloudy
        midBg.style.backgroundImage = "url('assets/cloudy.png')";
        }
        else if ( condition === 1087 || condition === 1273 || condition === 1276 || condition === 1279 || condition === 1282){
        midBg.style.backgroundImage = "url('assets/thunderstorm bg.png')";
        }
        else if(condition2.includes("rain") || condition2.includes("Rain")){
        midBg.style.backgroundImage = "url('assets/Rain bg.png')";
        }
        else{
            midBg.style.backgroundImage="url('assets/afternoon bg.png')"
        }
    }
}
searchBtn.addEventListener("click",() =>{
    const typedWord = input.value;
    if(typedWord.trim()===""){
        alert("Please type the city name");
    }
    else{  
        getWeather(typedWord);
     
    }
});
input.addEventListener("keydown",(event) =>{
    if(event.key==="Enter"){
        searchBtn.click();
    }
});