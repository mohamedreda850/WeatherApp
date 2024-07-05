

// async function test(){
// let urlTest =await fetch("http://api.weatherapi.com/v1/forecast.json?key=2ae65eccc9bd4ef4b8303253240307&q=London&days=3")
// let res = await urlTest.json()
// console.log( res)
// }; //

// test();



 
function getDate(){
    let currentDate = new Date(); 


let day = currentDate.getDate();


let monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let month = monthNames[currentDate.getMonth()];

let formattedDate = `${day}${month}`;

return formattedDate
}
let dateSec = document.querySelector(".date-sec-1")
dateSec.innerText = getDate()




document.querySelector('#search-bar').addEventListener('click', function() {
    this.classList.add('active');
    
});
document.querySelector('#search-bar').addEventListener('focus', function() {
    this.placeholder = ''
    
});
document.querySelector('#search-bar').addEventListener('blur', function() {
    this.placeholder = 'Find your location...'
    
});

function getDayName(offset =0){
    let currentDate = new Date(); 
    currentDate.setDate(currentDate.getDate() + offset);
    let dayNames = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    let dayOfWeek = dayNames[currentDate.getDay()];
    
    return dayOfWeek;
    
}
console.log(getDayName());
let daySec = document.querySelector(".day-sec-1")
daySec.innerText = getDayName()
let daySec2 = document.querySelector(".day-sec-2")
daySec2.innerHTML = getDayName(1)
let daySec3 = document.querySelector(".day-sec-3")
daySec3.innerHTML = getDayName(2)

async function getLocation() {
   
    const response = await fetch('http://ip-api.com/json/');
    const data = await response.json();
    return data.city;
}

let searchBar = document.querySelector(".search-input").value

console.log(searchBar);
//${encodeURIComponent(query)}
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click',async () => {
        const query = searchBar.value;
        const Url =await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2ae65eccc9bd4ef4b8303253240307&q=${encodeURIComponent(query)}&days=3`);

        let city = await Url.json();
        

            let cityName = document.querySelector(".city-name");
            cityName.innerText = city.location.name;

            let tempSec = document.querySelector(".temp-sec");
            console.log(city.forecast.forecastday[0].day.avgtemp_c);
            tempSec.innerText = city.forecast.forecastday[0].day.avgtemp_c + "°C";
            let weatherIcon = document.querySelector(".weather-icon");
            weatherIcon.innerHTML = ` <img
            src=${city.forecast.forecastday[0].day.condition.icon}
            alt="clear"
            class="w-25 "
          />`;
            let clear = document.querySelector(".clear");
            clear.innerHTML =city.forecast.forecastday[0].day.condition.text;
            let weatherIconSec2 = document.querySelector(".weather-icon-sec-2");
            weatherIconSec2.innerHTML =` <img
            src=${city.forecast.forecastday[1].day.condition.icon}
            alt="clear"
            class="w-25 "
          />`;

          let sec2highTemp = document.querySelector(".sec-2-temp-high");
          sec2highTemp.innerText =city.forecast.forecastday[1].day.maxtemp_c + "°C";
          let sec2lowTemp = document.querySelector(".sec-2-temp-low");
          sec2lowTemp.innerText =city.forecast.forecastday[1].day.mintemp_c + "°C";
          let weatherStatus1 = document.querySelector(".weather-status-1");
          weatherStatus1.innerText = city.forecast.forecastday[1].day.condition.text; 


          let weatherIconSec3 = document.querySelector(".weather-icon-sec-3")
           weatherIconSec3.innerHTML = ` <img
        src=${city.forecast.forecastday[2].day.condition.icon}
        alt="clear"
        class="w-25 "
      />`;


      let sec3highTemp = document.querySelector(".sec-3-temp-high");
      sec3highTemp.innerText =city.forecast.forecastday[2].day.maxtemp_c + "°C";
      let sec3lowTemp =document.querySelector(".sec-3-temp-low");
      sec2lowTemp.innerText =city.forecast.forecastday[2].day.mintemp_c + "°C";
      let weatherStatus2 = document.querySelector(".weather-status-2")
      weatherStatus2.innerText = city.forecast.forecastday[2].day.condition.text; 

    });
});


