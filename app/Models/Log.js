let BaseModel = require('./BaseModel');
let schema = false;

module.exports = class Car extends BaseModel{
    constructor() {
        super();
        schema = ( schema ) ? schema : this.setSchema({
            "ownerId":{
                type:String
            },
        });
    }

    saveLog(){
        let log = new schema({ownerId : '123'});
        log.save(function (err) {
            // saved!
        })
    }

    getLogs(){

    }


}