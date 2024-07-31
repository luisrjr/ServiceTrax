const main = document.querySelector("main");
const displayContainer = document.getElementById("display-container");
const serviceCategory = document.getElementById("category-input");
const dateOfService = document.getElementById("service-date");
const descriptionInput = document.getElementById("service-description-select");
const mileageInput = document.getElementById("mileage-input");
const addServiceBtn = document.getElementById("addbtn");
const formBody = document.getElementById("add-service-form-body");
const insertServiceBtn = document.getElementById("insert-service-btn");
const cancelServiceBtn = document.getElementById("cancel-service-btn");
const serviceData = [];
const currentService = {};

const insertServiceItem = () => {
  const serviceObj = {
    id: `${serviceCategory.value}${Date.now()}`,
    dateOfService: dateOfService.value,
    category: serviceCategory.value,
    description: descriptionInput.value,
    mileage: mileageInput.value,
  };

  serviceData.unshift(serviceObj);

  displayService();
  formBody.classList.add("hidden");
};

addServiceBtn.addEventListener("click", (event) => {
  formBody.classList.remove("hidden");
});

cancelServiceBtn.addEventListener("click", (event) => {
  formBody.classList.add("hidden");
});

insertServiceBtn.addEventListener("click", (event) => {
  event.preventDefault();
  insertServiceItem();
  formBody.classList.add("hidden");
});

const displayService = () => {
  serviceData.forEach((serviceObject) => {
    displayContainer.innerHTML += `
        <div class="task" id="${serviceObject.id}">
        <p><strong>Mileage:</strong> ${serviceObject.mileage}</p>
          <p><strong>Category:</strong> ${serviceObject.category}</p>
          <p><strong>Description:</strong> ${serviceObject.description}</p>
          <p><strong>Date:</strong> ${serviceObject.dateOfService}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
      `;
  });
};

const resetForm = () => {
  serviceCategory.value = "";
  dateOfService.value = "";
  serviceCategory.value = "";
  descriptionInput.value = "";
  mileageInput.value = "";
};
