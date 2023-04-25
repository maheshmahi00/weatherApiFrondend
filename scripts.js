function fetchweather(){
    let place=id_place.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f9164d0bb1a347b51a7d0e25e247b6c&q=${place}&units=metric`).then(res=>res.json()).then(data=>displayweather(data))
}

function displayweather(data){

    let placename=data.name
    let icon=data.weather[0].icon
    let temp=data.main.temp
    let mintemp=data.main.temp_min
    let maxtemp=data.main.temp_max
    let pressure=data.main.pressure
    let humidity=data.main.humidity
    let desc=data.weather[0].description
    let feels_like=data.main.feels_like
    console.log(placename,icon,temp,mintemp,maxtemp,pressure,humidity,desc);
    let htmlData=`
    <div class="card text-center">
  <div class="card-header">weather Api
  </div>
  <div class="card-body">
    <h5 class="card-title">${placename}</h5>
    <p class="card-text"> <h2 class="card-title">${temp}</h2></p>

    <p class="card-text"> <h4 class="card-title">${desc}</h4></p>
    <p class="card-text"> <h4 class="card-title">${feels_like}</h4></p>
    <p class="card-text"> <h4 class="card-title">${humidity}</h4></p>
    /<a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>`

document.querySelector("#id_result").innerHTML=htmlData
    
    
}



function fetchweatherbylocation() {
    navigator.geolocation.getCurrentPosition((p)=>{
      let lat=p.coords.latitude
      let long=p.coords.longitude
      fetch(`https://api.openweatmap.oherrg/data/2.5/weather?lat=${lat}&lon=${long}&appid=8f9164d0bb1a347b51a7d0e25e247b6c&units=metric`).then(res=>res.json()).then(data=>displayweather(data))
    })
  
    
}

// 92bbded135d1452980044ee89c80e994