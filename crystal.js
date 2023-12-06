// const baseURL = "https://crystal-fall23-lab.onrender.com/"

// const colorPick = "Purple"; 
// // (user inputs)

// // make request function
// const getCrystals = async function () {
//     try{
//         const crystalNames = await fetch(`${baseURL}/?crystalsByColorcolor=Purple`);
//         const crystalNamesJSON = await crystalNames.json();

//         // console.log(crystalNamesJSON)

//         Object.keys(crystalNamesJSON).forEach(async (key,value) => {
//             try{
//                 const crystalInfo = await fetch(`${baseURL}crystalsByColor/${crystalNamesJSON[key]}`)
//                 const crystalInfoJSON = await crystalInfo.json();

//                 console.log(crystalInfoJSON)

//                 const crystalh1 = document.getElementById("crystalNames");
//                 const listItem = document.createElement("li")

//                 const crystalName = document.createTextNode(crystalInfoJSON.name)

//                 listItem.appendChild(crystalName);
//                 crystalh1.appendChild(listItem)
//             }catch(error) {
//                 console.log(error)
//             }
//         })
        


//     }catch(error) {
//         console.log(error)
//     }
// }
// //fetch(`${baseURL}?color=${color}`) --- got it from api;

// getCrystals();




// crystal.js

// crystal.js

document.addEventListener("DOMContentLoaded", function () {
    const baseURL = "https://crystal-fall23-lab.onrender.com/";
  
    // Get the color dropdown element
    const colorDropdown = document.querySelector(".dropdown-content-colors");
  
    // Add an event listener for the change event on the color dropdown
    colorDropdown.addEventListener("change", function () {
      // Get the selected color value
      const selectedColor = colorDropdown.value;
  
      // Check if a color is selected
      if (selectedColor !== "Select") {
        // Fetch and display crystal information based on the selected color
        getCrystalsByColor(selectedColor);
      }
    });
  
    // Function to fetch and display crystal information based on the selected color
    async function getCrystalsByColor(selectedColor) {
      try {
        // Fetch crystal names based on the selected color
        const response = await fetch(`${baseURL}crystalsByColor?color=${selectedColor}`);
        const crystalNamesJSON = await response.json();
  
        // Clear previous results
        const crystalh1 = document.getElementById("crystalNames");
        crystalh1.innerHTML = "";
  
        // Iterate over the crystal names and fetch detailed information for each crystal
        Object.keys(crystalNamesJSON).forEach(async (key, value) => {
          try {
            // Fetch crystal details using the retrieved crystal name
            // const crystalInfoResponse = await fetch(`${baseURL}crystalsByColor/${crystalNamesJSON[key]}`);
            // const crystalInfoResponse = await fetch(`${baseURL}crystalsByColor/${encodeURIComponent(crystalNamesJSON[key].name)}`);
            const crystalInfoResponse = await fetch(`${baseURL}crystalsByColor?color=${crystalNamesJSON[key]}`);



            const crystalInfoJSON = await crystalInfoResponse.json();
  
            // Log the details for demonstration purposes
            console.log(crystalInfoJSON);
  
            // Display the details in the UI
            const listItem = document.createElement("li");
            const crystalName = document.createTextNode(crystalInfoJSON.name);
            listItem.appendChild(crystalName);
            crystalh1.appendChild(listItem);
           }catch (error){
            console.error("Error fetching crystal info:", error);
            }   
        });
        } catch (error) {
            console.error("Error fetching crystal names:", error);
        }
    }
  });
  