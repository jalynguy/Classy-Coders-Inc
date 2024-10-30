const { Employee } = require("./classes/Employee")

class SalesPerson extends Employee{
    #totalSales = 0
    constructor(name, position, salary, isHired,clients, totalSales){
        super(name, position, salary, isHired);
        this.clients = clients;
        this.#totalSales = totalSales;
    }
    getSalesNumbers(){
        return this.#totalSales;ß
    }
    makeSale(amount){
        this.#totalSales += amount;
    }    
}

module.exports = {
    SalesPerson,
}