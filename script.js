const baseURL = "https://car-api-2w8k.onrender.com/"

const colorPick = "Green"; 
// (user inputs)

//make request function
const getCars = async function () {
    try{
        const carIDs = await fetch(`${baseURL}?color=${colorPick}`)
        const carIDsJSON = await carIDs.json();

        console.log(carIDsJSON)

        // const carh1 = document.getElementById("carIDs");
        // carh1.innerHTML = carIDsJSON;

        Object.keys(carIDsJSON).forEach(async (key,value) => {
            try{
                const carInfo = await fetch(`${baseURL}car/:${carIDsJSON[key]}`)
                const carInfoJSON = await carInfo.json();

                console.log(carInfoJSON)

                const carh1 = document.getElementById("carIDs");
                const listItem = document.createElement("li")

                const carName = document.createTextNode(carInfoJSON.name)

                listItem.appendChild(carName);
                carh1.appendChild(listItem)

            }catch(error){
                console.log(error)
            }
        })

    }catch(error) {
        console.log(error)
    }
}
//fetch(`${baseURL}?color=${color}`) --- got it from api;

getCars();
