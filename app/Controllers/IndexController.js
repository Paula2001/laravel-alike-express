let Controller = require("./Controller");
let Car = require('./../Models/Car');
module.exports = class IndexController  extends Controller { 
    //the constructor of controller only takes Dependencies 
    constructor(index,Arg3){
        super();
        console.log("calling");
        this.car = new Car() ;
    }

    index(res,asd){
        return this.car.getCars();
    }

    
}
