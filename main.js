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


// costcalculator.innerText =`<h1>Coste : ${calcularCoste()} Euros </h1>` ;
city.innerHTML = "<h2>Ciudad: </h2>"
nightNumber.innerHTML = "<h2>Numero de noches: </h2>"
carDaysNumber.innerHTML = "<h2>Numero de dias de alquiler del coche: </h2>"
btnCalculator.innerHTML = "<button>Calcular Coste</button>"
inputNightNumber.type="number"
inputCarDaysNumber.type="number"
option1.innerText = "Barcelona"
option2.innerText = "Mardrid"
option3.innerText = "Sevilla"
option4.innerText = "Valencia"

// let options = [
//     { value: "Barcelona", text: "Barcelona" },
//     { value: "Madrid", text: "Madrid" },
//     { value: "Sevilla", text: "Sevilla" },
//     { value: "Valencia", text: "Valencia" },
//   ];

//   function createSelect(optionsList) {
//     let select = document.createElement("select");
  
//     for (let i = 0; i < optionsList.length; i++) {
//       const element = optionsList[i];

//       let option = document.createElement("option");

//       option.setAttribute("value", element.value);
//       option.innerText = element.text;
//       select.appendChild(option);
//     }
  
//     return select;
//   }
//   const select = createSelect(options);
// form.appendChild(select);


console.log(body);

