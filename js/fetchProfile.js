async function queryPico(url = ''){
    const response = await fetch(url)
        .catch(error => console.log("Error: " + error));
    return response.json();
}

async function fetchProfile(){
    baseURI = "http://localhost:3000/sky/cloud/"
    eci = "ckyupmlr1003ke1zt5yk8ezfh";
    ruleset = "sensor_profile"

    sName = await queryPico(baseURI + eci + '/' + ruleset + "/sensor_name");
    sLoc = await queryPico(baseURI + eci + '/' + ruleset + "/sensor_location");
    sThresh = await queryPico(baseURI + eci + '/' + ruleset + "/sensor_threshold");
    sPhone = await queryPico(baseURI + eci + '/' + ruleset + "/alert_phone");

    document.getElementById("sensorName").innerText = sName;
    document.getElementById("sensorLocation").innerText = sLoc;
    document.getElementById("sensorThreshold").innerText = sThresh;
    document.getElementById("sensorPhone").innerText = sPhone;
}

fetchProfile();