const { Employee } = require("./Employee");

class SalesPerson extends Employee {
  #totalSales = 0;

  constructor(name, position, salary, productsSold) {
    super(name, position, salary);
    this.productsSold = productsSold;
  }

  makeSale(amount) {
    this.#totalSales += amount;
  }

  getSalesNumber() {
    return this.#totalSales;
  }
}

module.exports = {
  SalesPerson,
};
