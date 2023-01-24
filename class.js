class Account {
  constructor(balance) {
    this._balance = balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
  get balance() {
    return this._balance;
  }
  set balance(balance) {
    if (balance < 0) throw "Balance cannot be negative";

    this._balance = balance;
  }
}

class PremiumAccount extends Account {
  constructor(balance, bonusPoints) {
    super(balance);

    this._bonusPoints = bonusPoints;
  }
}

console.log(Account.register(900));
