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
        console.log(schema);

    }



    saveLogs(){
        console.log(schema);
        let log = new schema({ownerId : '123'});
        log.save(function (err) {
            // saved!
        })
    }
}