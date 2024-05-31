import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    } else {
      this._amount = amount;
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    } else {
      this._currency = currency;
    }
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
