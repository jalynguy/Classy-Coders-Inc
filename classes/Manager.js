const { Employee } = require("./Employee");

class Manager extends Employee {
  #employeesManaged = [];

  constructor(name, position, salary, isHired, department) {
    super(name, position, salary, isHired);
    this.department = department;
  }

  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }

  setDepartment(newDepartment) {
    this.department = newDepartment;
  }
}

module.exports = {
  Manager,
};
