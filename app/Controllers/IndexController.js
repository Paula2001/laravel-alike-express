let Controller = require("./Controller");
let Car = require('./../Models/Car');
module.exports = class IndexController  extends Controller { 
    //the constructor of controller only takes Dependencies 
    constructor(req){
        super();
        this.car = new Car() ;
    }

    index(Request,asd){
        console.log(Request)
        return Request.params   ;
    }

    
}
