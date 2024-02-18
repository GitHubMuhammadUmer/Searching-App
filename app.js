var mobiles = {
    iphone: {
        phone15: { camera: "108px", ram: "1tb", colors: ['red', 'green', 'white'] },
        phone14: { camera: "108px", ram: "2tb", colors: ['red', 'green', 'white'] },
        phone17: { camera: "108px", ram: "4tb", colors: ['red', 'green', 'white'] }
    },
    oppo: {
        oppo15: { pname: 'Ae15', camera: "512px", ram: "2tb", colors: ['red', 'green', 'white'] },
        oppo16: { pname: 'Ae15', camera: "512px", ram: "2tb", colors: ['red', 'green', 'white'] },
        oppo17: { pname: 'Ae15', camera: "512px", ram: "2tb", colors: ['red', 'green', 'white'] }
    },
    samsung: {
        samsung15: { pname: 'Ae15', camera: "512px", ram: "2tb", colors: ['red', 'green', 'white'] },
        samsung16: { pname: 'Ae15', camera: "512px", ram: "2tb", colors: ['red', 'green', 'white'] },
        samsung17: { pname: 'Ae15', camera: "512px", ram: "2tb", colors: ['red', 'green', 'white'] }
    }
   
};
var modelSelect = document.getElementById('modelSelect');

function submitForm(event) {
    event.preventDefault(); // prevent form submission
    var brand = getSelectedBrand();
    var model = modelSelect.value;

    alert("You selected:\nBrand: " + brand + "\nModel: " + model);
}

function populateModels() {
    var brand = getSelectedBrand();
    var models = Object.keys(mobiles[brand]);
    var optionsHTML = '';

    // Construct HTML for model options
    for (var i = 0; i < models.length; i++) {
        optionsHTML += '<option value="' + models[i] + '">' + models[i] + '</option>';
    }

    // Set the innerHTML of modelSelect
    modelSelect.innerHTML = optionsHTML;

    // Show model selection
    modelDiv.style.display = 'block';
}


// Function to get the selected brand
function getSelectedBrand() {
    var brandInputs = document.getElementsByName('brand');
    for (var i = 0; i < brandInputs.length; i++) {
        if (brandInputs[i].checked) {
            return brandInputs[i].value;
        }
    }
    return null; // No brand selected
}
// for(var key in mobiles){
//     for(var key1 in mobiles[key]){

//  for(var key2 in mobiles[key]){

//     console.log(mobiles[key][key1])
// }   }   }