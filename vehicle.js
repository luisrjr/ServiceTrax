const Vehicle = class {
  constructor(
    year,
    make,
    model,
    vehType,
    engineSize,
    oilCapacity,
    numCylinders,
    fuelType,
    mileage,
    oilType,
    vehCategory,
    transmissionType,
    numOfGears,
    suspensionType,
    differentialType
  ) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.vehType = vehType;
    this.engineSize = engineSize;
    this.oilCapacity = oilCapacity;
    this.numCylinders = numCylinders;
    this.fuelType = fuelType;
    this.mileage = mileage;
    this.oilType = oilType;
    this.vehCategory = vehCategory;
    this.transmissionType = transmissionType;
    this.numOfGears = numOfGears;
    this.suspensionType = suspensionType;
    this.differentialType = differentialType;
  }
};

// const m3 = new Vehicle(
//   (year = 2002),
//   (make = "BMW"),
//   (model = "M3"),
//   (vehType = "Coupe"),
//   (engineSize = 3.2),
//   (oilCapacity = 6),
//   (numCylinders = 6),
//   (fuelType = "petrol"),
//   (mileage = 127000),
//   (oilType = "5w-30"),
//   (vehCategory = "sportscar"),
//   (transmissionType = "sequential manual"),
//   (numOfGears = 6),
//   (suspensionType = "macpherson"),
//   (differentialType = "limited slip")
// );

// const m4 = new Vehicle(
//   (year = 2002),
//   (make = "BMW"),
//   (model = "M4"),
//   (vehType = "Coupe"),
//   (engineSize = 3.2),
//   (oilCapacity = 6),
//   (numCylinders = 6),
//   (fuelType = "petrol"),
//   (mileage = 50000),
//   (oilType = "5w-30"),
//   (vehCategory = "sportscar"),
//   (transmissionType = "sequential manual"),
//   (numOfGears = 6),
//   (suspensionType = "macpherson"),
//   (differentialType = "limited slip")
// );

export default Vehicle;
