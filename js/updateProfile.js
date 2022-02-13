async function raisePicoEvent(url = ''){
    const response = await fetch(url)
        .catch(error => console.log("Error: " + error));
    return response.json();
}

async function updateProfile(){
    baseURI = "http://localhost:3000/sky/event/"
    eci = "ckyupmlr1003ke1zt5yk8ezfh";
    eid = "upProf"
    domain = "sensor";
    type = "profile_updated";

    newSName = document.getElementById("newSensorNameInput").value;
    newSLoc = document.getElementById("newSensorLocationInput").value;
    newSThresh = document.getElementById("newSensorThresholdInput").value;
    newSPhone = document.getElementById("newSensorPhoneInput").value;

    response = await raisePicoEvent(baseURI + eci + '/' + eid + '/' + domain + '/' + type + "?sensorName=" + newSName + "&sensorLocation=" + newSLoc + "&threshold=" + newSThresh + "&phone=" + newSPhone);

    console.log(response);
}

document.getElementById("submit").addEventListener("click", updateProfile);