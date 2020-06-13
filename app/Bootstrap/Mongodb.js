const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/acme',{useNewUrlParser : true});
mongoose.connection
    .once('open',() => console.log("Connected"))
    .on('error',(err)=>{
        console.log("error");
    })