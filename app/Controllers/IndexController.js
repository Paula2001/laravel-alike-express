let Controller = require("./Controller");
let Log = require('../Models/Log');

module.exports = class IndexController  extends Controller { 
    //the constructor of controller only takes Dependencies 
    constructor(req){
        super();
        this.log = new Log();
    }

    index(Request,asd){
        this.log.saveLog(Request);
        return Request.params   ;
    }
}
