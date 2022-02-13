async function queryPico(url = ''){
    const response = await fetch(url)
        .catch(error => console.log("Error: " + error));
    return response.json();
}

async function getVioTemps(){
    baseURI = "http://localhost:3000/sky/cloud/"
    eci = "ckyupmlr1003ke1zt5yk8ezfh";
    ruleset = "temperature_store"
    f = "threshold_violations"

    let vioList = await queryPico(baseURI + eci + '/' + ruleset + '/' + f);

    form = document.getElementById("violList");

    vioList.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item.temperature;
        form.append(li);
    })
}

getVioTemps();