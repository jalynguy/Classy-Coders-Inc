class Employee {
    #salary;
    #isHired;
    constructor(name, position, salary, isHired){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = isHired
    }
    getSalary(){
        return this.#salary;
    }
    setSalary(amount){
        this.#salary = amount;
    }
    getStatus(){
        return this.#isHired;
    }
    setStatus(command){
        if(command == 'hire'){
            this.#isHired = true;
        }
        if(command == 'fire'){
            this.#isHired = false;
        }
    }
}

module.exports = {
    Employee,
}