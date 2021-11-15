



const APIKEY ='144b7f905c903cea963eded9cd974aa9'

async function doAPICall(){
    let city=document.querySelector('#inputvalue').value
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=144b7f905c903cea963eded9cd974aa9`)
    .catch((e)=>{console.error(e);alert("Bad city name!!!!!")})
        .finally(console.log("API request is Over"))
            
                    console.log(result)
                    console.log(result.data)
                    result = result.data

    


//   document.querySelector("#names")
//   document.querySelector("#name").innerHTML=result.main.name
  document.querySelector("#high").innerHTML=result.main.temp_max
  document.querySelector("#low").innerHTML=result.main.temp_min
  document.querySelector("#description").innerHTML=result.weather[0].description
  document.querySelector("#humidity").innerHTML=result.main.humidity


}





