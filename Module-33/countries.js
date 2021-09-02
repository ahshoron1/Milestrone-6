function loadCounties(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCounties();
const displayCountries = counties =>{
    const countriesDiv = document.getElementById('counties');
    counties.forEach(country => {
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountiesByName('${country.name}')">Details</button>
        `
        countriesDiv.appendChild(div);
    })
}
const loadCountiesByName = name =>{
    // console.log(name)
    const url = `https://restcountries.eu/rest/v2/name/${name}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetalis(data[0]))
}
const displayCountriesDetalis = country =>{
    const countryDiv = document.getElementById('contry-details');
    countryDiv.innerHTML = `
        <h5>${country.name}</h5>
        <p>population: ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `
}