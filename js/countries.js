const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountryInfo(data));
}
loadCountries();

const displayCountryInfo = data => {
    const thumbContainer = document.getElementById('country-thumb-container')
    // console.log(data);
    /* for (const country of data) {
        console.log(country.name);
        const countryName = document.createElement('h3');
        countryName.innerText = `${country.name}`;
        thumbContainer.appendChild(countryName);
    } */
    data.forEach(country => {
        // console.log(country)
        const countryThumbDiv = document.createElement('div');
        countryThumbDiv.classList.add('thum-div')
        countryThumbDiv.innerHTML = `
        <h3>${country.name}</h3>
        <p>Capital : <span class="capital-name">${country.capital}</span></p>
        <button onclick="loadCountryByName('${country.name}')"><a href="#country-details"></a> Show Details</button>
        `
        thumbContainer.appendChild(countryThumbDiv);
    })
}

const loadCountryByName = (name) => {
    // console.log(name);
    fetch(`https://restcountries.com/v2/name/${name}`)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = details => {
    const mainDetailDive = document.getElementById('country-details');
    console.log(details);
    // const countryDiv = document.createElement('div');
    mainDetailDive.innerHTML = `
    <div id="core-info">
    <div class="flag">
        <img src="${details.flags[0]}" alt="">
        </div>
        <div>
        <h2 class="name">${details.name}</h2>
        <p class="capital">Capital: ${details.capital}, 
        Population: ${details.population}, Region: ${details.region}</p>
        <p class="population"></p>
        <p class="region"></p>
        </div>
    </div>
    `
    // mainDetailDive.appendChild(countryDiv);

}

