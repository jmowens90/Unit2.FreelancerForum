//create elements

const body = document.body;
const freeLancerH1 = document.createElement(`h1`);
const freeLancerP = document.createElement(`p`);
const freeLancerH2 = document.createElement(`h2`);
const freeLancerTable = document.createElement(`table`);

//insert values into elements

freeLancerH1.textContent = `Freelancer Forum`;
freeLancerP.textContent = `The average starting price is $30.`;
freeLancerH2.textContent = `Available Freelancers`;

//append the elements to the html so they show up

body.appendChild(freeLancerH1);
body.appendChild(freeLancerP);
body.appendChild(freeLancerH2);


//style the elements

body.setAttribute(`style`, `border: 2px solid black; width: 40%; min-width: 450px; margin: 0 auto;`);
freeLancerH1.setAttribute(`style`, `text-align: center; font-size: 3rem;`);
freeLancerP.setAttribute(`style`, `text-align: center; font-size: 1.75rem;`);
freeLancerH2.setAttribute(`style`, `text-align: center; font-size: 2rem;`)
