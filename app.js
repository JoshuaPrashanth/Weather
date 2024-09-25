let search = document.querySelector("input");
let btn = document.querySelector("button");
let temper = document.querySelector(".temp");
let cityname = document.querySelector("h2");
let hum = document.querySelector("#hum");
let win = document.querySelector("#win");
let state = document.querySelector(".wimg");
let show = document.querySelector(".showcase");
let error = document.querySelector(".error");
let com = document.querySelector(".company");

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "30299f89108d83901da7ff275296409a";

async function checkwheather(city) {
    const response = await fetch(apiurl + city + "&appid=" + apikey);   
    var data = await response.json();
    if(response.status == 404){
        com.style.display = "none";
        error.style.display = "contents";
        show.style.display = "none";
    }
    else {
        com.style.display = "none";
        error.style.display = "none";
        show.style.display = "contents";
        console.log(data);
        console.log(data.main.temp);
    temper.innerText = Math.round(data.main.temp) + "°C";
    cityname.innerText = data.name;
    hum.innerText = data.main.humidity + "%";
    win.innerText = Math.round(data.wind.speed) + "km/h";
    if(data.weather[0].main == "Clouds"){
        state.src ="https://raw.githubusercontent.com/JoshuaPrashanth/Weather/48414fbe3d9aefb89e946671803f6ea88c15a7ae/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        state.src ="https://raw.githubusercontent.com/JoshuaPrashanth/Weather/48414fbe3d9aefb89e946671803f6ea88c15a7ae/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        state.src ="https://raw.githubusercontent.com/JoshuaPrashanth/Weather/48414fbe3d9aefb89e946671803f6ea88c15a7ae/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        state.src ="/items/https://raw.githubusercontent.com/JoshuaPrashanth/Weather/48414fbe3d9aefb89e946671803f6ea88c15a7ae/snow.png";
    }
    else if(data.weather[0].main == "Rain"){
        state.src ="https://raw.githubusercontent.com/JoshuaPrashanth/Weather/48414fbe3d9aefb89e946671803f6ea88c15a7ae/rain.png";
    }
    }
}
btn.addEventListener("click", ()=>{
    checkwheather(search.value);
})
