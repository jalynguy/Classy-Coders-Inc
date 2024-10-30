class Employee {
  static #allEmployees = [];
  #salary;
  #isHired;

  constructor(name, position, salary, isHired = true) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = isHired;
    Employee.#allEmployees.push(this);
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary = amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    this.#isHired = command === "hire";
  }

  static getEmployees() {
    return Employee.#allEmployees;
  }

  static getTotalPayroll() {
    return Employee.#allEmployees;
  }
}

module.exports = {
  Employee,
};
