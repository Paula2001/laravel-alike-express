let path = require("path");
var express = require('express');

let app = express();
module.exports = class BaseRouter{ 
    static resolveControllerMethod(controller_method){
        let matches = controller_method.match(/(^\w+)@(\w+$)/);
        return path.join("asd", 'Controllers', `${matches[1]}.js`); 
    }
    static render(res ,controller_method,response_type){
        let resolve = BaseRouter.resolveControllerMethod(controller_method); 
        console.log(process.env.PORT);
    
        res[response_type](resolve);
    }
}