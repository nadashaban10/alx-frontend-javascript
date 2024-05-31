export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string' || typeof motor !== 'string' || typeof color !== 'string') {
      throw new TypeError('brand, motor, and color must be strings');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
