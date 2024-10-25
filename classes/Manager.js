const { Employee } = require("./classes/Employee")

class Manager extends Employee{
    #employeesManaged = []
    constructor(department,employeesManaged = []){
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