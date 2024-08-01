let vehicle = {};
let garage = [];
const makeInput = document.getElementById("make-input");
const modelInput = document.getElementById("model-input");
const addVehBtn = document.getElementById("addvehiclebtn");

let dateDropdown = document.getElementById("date-dropdown");

let currentYear = new Date().getFullYear();
let earliestYear = 1970;
while (currentYear >= earliestYear) {
  let dateOption = document.createElement("option");
  dateOption.text = currentYear;
  dateOption.value = currentYear;
  dateDropdown.add(dateOption);
  currentYear -= 1;
}

const addVehicle = () => {
  vehicle = {
    carid: `${makeInput.value}${modelInput.value}${Date.now()}`,
    year: dateDropdown.value,
    make: makeInput.value,
    model: modelInput.value,
  };
  garage.push(vehicle);
};

addVehBtn.addEventListener("click", addVehicle);
