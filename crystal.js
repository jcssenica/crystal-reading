

const baseURL = "https://crystal-fall23-lab.onrender.com/";

const colorPick = document.querySelector('.dropdown-content-colors');

// // Add an event listener to the select element
colorPick.addEventListener('change', function() {
    const colorValue = this.value; // 'this' refers to the dropdown
    
    console.log(colorValue); // This will print the selected color to the console each time the user changes the selection
    getCrystals(colorValue); // Call the function to fetch the data
});

//console.log(colorPick);


// Make request function
const getCrystals = async function (colorValue) {
    try{
        const crystalIDs = await fetch(`${baseURL}crystalsByColor?color=${colorValue}`);
        const crystalIDsJSON = await crystalIDs.json();

        console.log(crystalIDsJSON);

        // Clear previous results
        
        // crystalList.innerHTML = '';

        crystalIDsJSON.forEach(crystal => {
            const crystalList = document.getElementById("crystalNames");
            const listItem = document.createElement("li");
            const crystalName = document.createTextNode(crystalIDsJSON[0].name);
            listItem.appendChild(crystalName);
            crystalList.appendChild(listItem);
        });

    }catch(error) {
        console.log(error);
    }
}

/*
get the list of crystals back 
json = { 
0: crystal0,
1: crystal1
}

Objects.keys(json).forEach((key,value) => {
    crystalName = crystalIDsJSON[key].name
})

*/

getCrystals()

