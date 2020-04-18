var express = require('express');
var router = express.Router();
let BaseRouter = require('./RouteBase');
//these two lines are biohezard .. 

let path = './../app/Controllers/IndexController'; 
let indexController = require(path); 
let indexC = new indexController(); 


//require controller in here 
/* GET home page. */
let index = 'index';
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'it restarting the server no issue' });
//   //so render function is just render a view .. 
// });




router.get('/',function(req,res,nx){
  //so we will have our pass two parameters one with response and the other with
  //controller and the method to resolve 
 BaseRouter.render(res,"Controller@Function",'send');
});

module.exports = router;
