export default class HolbertonClass {
  constructor(size, location) {
    // Store size and location in underscore attributes
    this._size = size;
    this._location = location;

    // Throw errors if size is not a number or location is not a string
    if (typeof size !== 'number') {
      throw new Error('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new Error('location must be a string');
    }
  }

  // Cast to number returns size
  valueOf() {
    return this._size;
  }

  // Cast to string returns location
  toString() {
    return this._location;
  }
}
