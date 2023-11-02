//create elements

const body = document.querySelector(`body`);
const freeLancerH1 = document.createElement(`h1`);
const freeLancerP = document.createElement(`p`);
const freeLancerH2 = document.createElement(`h2`);
const freeLancerTable = document.createElement(`table`);
const tableHeaderRow = document.createElement(`tr`);
const tableNameHeader = document.createElement(`th`);
const tableOccupationHeader = document.createElement(`th`);
const tablePriceHeader = document.createElement(`th`);

const freeLancers = [
    {name: `John Smith`, occupation: `Graphic Designer`, price: `$50`},
    {name: `Jane Doe`, occupation: `Advertiser`, price: `$40`},
    {name: `Mike Jordan`, occupation: `Architect`, price: `$60`}
]

// const tableHead = document.createTHead(`th`);

//insert values into elements

freeLancerH1.textContent = `Freelancer Forum`;
freeLancerP.textContent = `The average starting price is $30.`;
freeLancerH2.textContent = `Available Freelancers`;
tableNameHeader.textContent = `Name`;
tableOccupationHeader.textContent = `Occupation`;
tablePriceHeader.textContent = `Price`;


//append the elements to the html so they show up

body.appendChild(freeLancerH1);
body.appendChild(freeLancerP);
body.appendChild(freeLancerH2);
body.appendChild(freeLancerTable);
freeLancerTable.appendChild(tableHeaderRow);
tableHeaderRow.appendChild(tableNameHeader);
tableHeaderRow.appendChild(tableOccupationHeader);
tableHeaderRow.appendChild(tablePriceHeader); 



//style the elements

body.setAttribute(`style`, `border: 2px solid black; width: 40%; min-width: 450px; margin: 0 auto;`);
freeLancerH1.setAttribute(`style`, `text-align: center; font-size: 3rem;`);
freeLancerP.setAttribute(`style`, `text-align: center; font-size: 1.75rem;`);
freeLancerH2.setAttribute(`style`, `text-align: center; font-size: 2rem;`);

//make table have 3 headers ex: Name, Occupation, Starting Price
