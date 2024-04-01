const celsiusFiled = document.querySelector("#celsius")
const degree = document.querySelector("#degree")
const convertBtn = document.querySelector("#convert-btn")
const tempType = document.querySelector("#temp-type")


window.addEventListener("load",() =>{
    degree.value="";
    celsiusFiled.innerHTML="";
})

convertBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    convertToCelsius();

})

function convertToCelsius(){
    let inputValue = degree.value;

    if(tempType.value==="farenhiete"){
        const farenhieteToCelsius = (inputValue -32) * (5/9);
        celsiusFiled.innerHTML = `${farenhieteToCelsius.toFixed(3)} °C`
    }
    else if(tempType.value === "Kelvin"){
        const kelvinToCelsius = inputValue - 273.15;
        celsiusFiled.innerHTML = `${kelvinToCelsius.toFixed(3)} °C`
    }

}