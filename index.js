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

// create array to hold freelancers information

const freeLancers = [
    {name: `John Smith`, occupation: `Graphic Designer`, price: `$50`},
    {name: `Jane Doe`, occupation: `Advertiser`, price: `$40`},
    {name: `Mike Jordan`, occupation: `Architect`, price: `$60`}
];

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

// create function to go through array and add each freelancer to the freelancer table

freeLancers.forEach((freelancer) => {
    //make freelancer table row for each freelancer
    const freeLancerRow = document.createElement(`tr`);

    //make the value places for each type of freelancer information
    const nameValue = document.createElement(`td`);
    const occupationValue = document.createElement(`td`);
    const priceValue = document.createElement(`td`);

    //insert content into the values using the freelancer array
    nameValue.textContent = freelancer.name;
    occupationValue.textContent = freelancer.occupation;
    priceValue.textContent = freelancer.price;

    //add the value places to the row
    freeLancerRow.appendChild(nameValue);
    freeLancerRow.appendChild(occupationValue);
    freeLancerRow.appendChild(priceValue);

    //add the row to the table
    freeLancerTable.appendChild(freeLancerRow);

 });



//style the elements

body.setAttribute(`style`, `border: 2px solid black; width: 40%; min-width: 450px; margin: 0 auto;`);
freeLancerH1.setAttribute(`style`, `text-align: center; font-size: 3rem;`);
freeLancerP.setAttribute(`style`, `text-align: center; font-size: 1.75rem;`);
freeLancerH2.setAttribute(`style`, `text-align: center; font-size: 2rem;`);

//make table have 3 headers ex: Name, Occupation, Starting Price
