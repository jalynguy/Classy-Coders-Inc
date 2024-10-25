const { Employee } = require("./classes/Employee")

class Manager extends Employee{
    #employeesManaged = []
    constructor(name, position, salary, isHired,department,employeesManaged = []){
        super(name, position, salary, isHired);
        this.department = department;
        this.#employeesManaged = employeesManaged;
    }
    getEmployeesManaged(){
        return this.#employeesManaged;
    }
    addEmployeeManaged(Employee){
        this.#employeesManaged.push(Employee);
    }
}

module.exports = {
    Manager,
}