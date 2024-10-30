const { Employee } = require("./Employee");

class SoftwareEngineer extends Employee {
  #programmingLanguages;

  constructor(name, position, salary, programmingLanguages) {
    super(name, position, salary);
    this.#programmingLanguages = programmingLanguages;
  }

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }

  setProgrammingLanguages(newLanguage) {
    this.#programmingLanguages.push(newLanguage);
  }
}

module.exports = {
  SoftwareEngineer,
};
