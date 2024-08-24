let vehicle = {};
let garage = [];
const makeInput = document.getElementById("make-input");
const modelInput = document.getElementById("model-input");
const addVehBtn = document.getElementById("addvehiclebtn");
let dateDropdown = document.getElementById("date-dropdown");
const garageData = JSON.parse(localStorage.getItem("garage_data")) || [];

let currentYear = new Date().getFullYear();
let earliestYear = 1970;
while (currentYear >= earliestYear) {
  let dateOption = document.createElement("option");
  dateOption.text = currentYear;
  dateOption.value = currentYear;
  dateDropdown.add(dateOption);
  currentYear -= 1;
}

const insertOrUpdateGarageVehicle = () => {
  vehicleObj = {
    carid: `${makeInput.value}${modelInput.value}${Date.now()}`,
    year: dateDropdown.value,
    make: makeInput.value,
    model: modelInput.value,
  };

  const vehicleIndex = garageData.findIndex(
    (car) => car.id === vehicleObj.carid
  );

  if (vehicleIndex === -1) {
    garageData.unshift(vehicleObj);
  } else {
    garageData[vehicleIndex] = vehicleObj;
  }

  localStorage.setItem("garage_data", JSON.stringify(garageData));
  displayService();

  //formBody.classList.add("hidden");
};

addVehBtn.addEventListener("click", insertOrUpdateGarageVehicle);
currentYear;

export default garage;
