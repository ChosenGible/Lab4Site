async function queryPico(url = ''){
    const response = await fetch(url)
        .catch(error => console.log("Error: " + error));
    return response.json();
}

async function getCurrTemp(){
    baseURI = "http://localhost:3000/sky/cloud/"
    eci = "ckyupmlr1003ke1zt5yk8ezfh";
    ruleset = "temperature_store"
    f = "temperatures"

    let temps = await queryPico(baseURI + eci + '/' + ruleset + '/' + f);

    var form = document.getElementById("currTemp");
    form.innerHTML = temps[temps.length - 1].temperature;
}

getCurrTemp();