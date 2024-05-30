export default class Currency {
  constructor(code, name) {
    if (code && name !== 'string') {
      throw new TypeError(postMessage);
    } else {
      this._code = code;
      this._name = name;
    }
  }

  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
