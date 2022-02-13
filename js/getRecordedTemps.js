async function queryPico(url = ''){
    const response = await fetch(url)
        .catch(error => console.log("Error: " + error));
    return response.json();
}

async function getTemps(){
    baseURI = "http://localhost:3000/sky/cloud/"
    eci = "ckyupmlr1003ke1zt5yk8ezfh";
    ruleset = "temperature_store"
    f = "temperatures"

    let tempList = await queryPico(baseURI + eci + '/' + ruleset + '/' + f);

    form = document.getElementById("tempList");

    tempList.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item.temperature;
        form.append(li);
    })
}

getTemps();