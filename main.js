const body = document.querySelector("body");
const city = document.createElement("h2");
const form = document.createElement("form");
const select = document.createElement("select");
const option1 = document.createElement("option");
const option2 = document.createElement("option");
const option3 = document.createElement("option");
const option4 = document.createElement("option");
const nightNumber = document.createElement("h2");
const inputNightNumber = document.createElement("input");
const carDaysNumber = document.createElement("h2");
const inputCarDaysNumber = document.createElement("input");
const btnCalculator = document.createElement("button");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");
const costcalculator = document.createElement("h1");

body.appendChild(city);
body.appendChild(form);
body.appendChild(nightNumber);
body.appendChild(inputNightNumber);
body.appendChild(carDaysNumber);
body.appendChild(inputCarDaysNumber);
body.appendChild(btnCalculator);
body.appendChild(costcalculator);
form.appendChild(select);
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
btnCalculator.appendChild(span1);
btnCalculator.appendChild(span2);
btnCalculator.appendChild(span3);

city.innerHTML = "<h2>Ciudad: </h2>"
nightNumber.innerHTML = "<h2>Numero de noches: </h2>"
carDaysNumber.innerHTML = "<h2>Numero de dias de alquiler del coche: </h2>"
btnCalculator.innerHTML = "<button>Calcular Coste</button>"
inputNightNumber.type="number"
inputCarDaysNumber.type="number"
option1.innerText = "Barcelona"
option2.innerText = "Madrid"
option3.innerText = "Sevilla"
option4.innerText = "Valencia"

// Coste del hotel
function costeHotel(nights) {
    return nights * 140;
}

// Coste del avion
function costeAvion(city, nights) {
    let cost;

    switch(city){
        case "Barcelona":
            cost = 90;
            break;
        case "Madrid":
            cost = 90;
            break;
        case "Sevilla":
            cost = 50;
            break;
        case "Valencia":
            cost = 40;
            break;
        default:
            cost = 0;
            break;
    }

    if(nights > 3) {
        cost = cost * 0.9;
    }
    
    return cost;
}

// Coste del coche
function costeCoche(days) {
    let cost = days * 40;

    if(days >= 7){
        cost -= 50;
    } else if(days >= 3){
        cost -= 20;
    }

    return cost;
}

// Función para calcular el coste total
function calcularCoste() {
    const city = select.value;
    const nights = Number(inputNightNumber.value);
    const days = Number(inputCarDaysNumber.value);

    const hotelCost = costeHotel(nights);
    const flightCost = costeAvion(city, nights);
    const carCost = costeCoche(days);
    
    const totalCost = hotelCost + flightCost + carCost;

    costcalculator.innerText = `El costo total del viaje es: ${totalCost}€`;
}

//evento click del botón de calcular
btnCalculator.addEventListener("click", calcularCoste);




const inputs = "margin: 30px; background: none; border: none; outline: none; maxWidth: 190px;padding: 10px 20px; font-size: 16px; border-Radius: 9999px; box-shadow: inset 2px 5px 10px rgb(5, 5, 5);   color: #000000  ";
const boton = "fontFamily: uiMonospace, SFMonoRegular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;fontSize: 17px;padding: 1em 2.7em;fontWeight: 500;background: #1F2937;color: white;border: none;position: relative;overflow: hidden;borderRadius: 0.6em;"
const effect1 = "position: absolute;width: 100%;height: 100%;left: 0;top: 0;border-radius: 0.6em;margin-top: -0.25em;backgroundImage: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))"
const effect2 = "position: relative;top: -1px;"
const effect3 = "transition-timing-function: cubicBezier(0, 0, 0.2, 1);transitionDuration: 500ms;backgroundColor: rgba(16, 185, 129, 0.6);borderRadius: 9999px;width: 0;height: 0;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);"
const hover = "width: 14em;height: 14em"
const active = "transform: scale(0.97)"

inputNightNumber.style = inputs
inputCarDaysNumber.style = inputs
btnCalculator.style = boton
span1.style = effect1
span2.style = effect2
span3.style = effect3
btnCalculator.style = hover
btnCalculator.style = active

body.style.fontFamily = "Arial, sans-serif";
body.style.margin = "0";
body.style.padding = "0";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.height = "100%";
body.style.backgroundColor = "FFFFFF"
body.style.backgroundRepeat ="no-repeat"


form.style.marginBottom = "1em";
form.style.display = "flex";
form.style.alignItems = "center";
form.style.justifyContent = "center";

select.style.padding = "0.2em";
select.style.fontSize = "2.5em";

inputNightNumber.style.display ="flex"
inputNightNumber.style.height = "50px"
inputNightNumber.style.width = "350px"
inputNightNumber.style.fontSize ="30px"

inputCarDaysNumber.style.display ="flex"
inputCarDaysNumber.style.height = "50px"
inputCarDaysNumber.style.width = "350px"
inputCarDaysNumber.style.fontSize ="30px"

// btnCalculator.style.margin = "0.5em";
// btnCalculator.style.padding = "0.5em";
// btnCalculator.style.fontSize = "30px";
// btnCalculator.style.cursor = "pointer";
// btnCalculator.style.marginTop = "1em";
// btnCalculator.style.backgroundColor = "yellow";

