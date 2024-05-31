import Car from './10-car.js'; // Assuming Car is in 10-car.js

class EVCar extends Car {
  static #range = Symbol('range');

  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call parent constructor
    this[EVCar.#range] = range;
  }

  // Getter for range (optional)
  get range() {
    return this[EVCar.#range];
  }

  cloneCar() {
    // Create a new Car instance with properties from this object
    return new Car(this.brand, this.motor, this.color);
  }
}
