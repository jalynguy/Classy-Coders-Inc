const { Employee } = require("./classes/Employee")

class SalesPerson extends Employee{
    #totalSales = 0
    constructor(clients, totalSales){
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