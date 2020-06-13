var express = require('express');
var router = express.Router();
let BaseRouter = require('./BaseRoute');
//these two lines are biohezard .. 


//require controller in here 

/* GET home page. */

router.get('/:id',function(req,res,nx){
  //so we will have our pass two parameters one with response and the other with
  //controller and the method to resolve
 BaseRouter.render(res,req,"IndexController@index",'json');

});

module.exports = router;
