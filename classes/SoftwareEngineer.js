const { Employee } = require("./classes/Employee")

class SoftwareEngineer extends Employee{
    #programmingLanguages = []
    constructor(programmingLanguages = []){
        this.#programmingLanguages = programmingLanguages;
    }
    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }
    setProgrammingLanguages(language){
        this.#programmingLanguages.push(language);
    }
}

module.exports = {
    SoftwareEngineer,
}