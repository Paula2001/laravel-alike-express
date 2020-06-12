let path = require("path");
var express = require('express');
let fileOperations = require('./../core/FileOperations');


module.exports = class BaseRouter{ 

    static resolveControllerMethod(req,controller_method){
        let matches = controller_method.match(/(^\w+)@(\w+$)/);
        let controller_path = path.join(global.appRoot, 'app/Controllers', `${matches[1]}.js`);

        //autoload the controller
        let Controller = require(controller_path);

        let controller = new Controller();
        //we will need to create dependency injection .

        //get the arguments 
        let constructorDependencies = BaseRouter.resolveArgs(controller.constructor);

        //we will need to create dependency injection .
        constructorDependencies.forEach(dependency => {
            BaseRouter.createDependency(dependency);
            //create instance of these dependencies 
        });


        console.log(req);
        return controller[matches[2]](req); //here we need to pass the request parameters
        // we will need to create autoloader to the dependencies


    }
    static render(res ,req,controller_method,response_type){
        let resolve = BaseRouter.resolveControllerMethod(req,controller_method);
        console.log(resolve);
        res[response_type](resolve);
    }

    static resolveArgs(func){
        var args = func.toString().match(/.*?\(([^)]*)\)/)[1];        
        return args.split(',').map(function(arg) {
            return arg.replace(/\/\*.*\*\//, '').trim();
        }).filter(function(arg) {
            return arg;
        });
    }

    static createDependency(dependency){
        fileOperations.searchFile(dependency,'');
    }
}
