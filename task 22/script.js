async function call() {
    try {
        let data = await fetch("https://restcountries.com/v3.1/all");
        let allData = await data.json();
        console.log(allData);
        allData.forEach(countries => {
            let country =document.createElement("div");
            country.setAttribute("class","container");
            country.innerHTML =`
            <h2>${countries.name.common}</h2>
            <img src=${countries.flags.svg}
            class = "flag" />
            <div class="info">
            
            <p><span><b>Population:</b></span>${countries.population}</p>
            <p><span><b>Region:</b></span>${countries.region}</p>
            <p><span><b>Capital:</b></span>${countries.capital}</p>
            <p><span><b>Continents:</b></span>${countries.continents}</p>
            <p><span><b>Code:</b></span>${countries.fifa}</p>
            <button>
            <a href="https://api.openweathermap.org/data/2.5/weather?q=${countries.name.common}&appid=0cce614772ff998ddfb7a45f88155367">
            Click for weather</button></a>
            </div>`

            document.body.appendChild(country);
            
        });

    } catch (er) {
        console.log("Eroor 404")
    }
}call();