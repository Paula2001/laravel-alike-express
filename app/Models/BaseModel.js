// let mon = require('./../database_drivers/mongodb');
const mongoose = require('mongoose');

module.exports = class BaseModel {
    constructor() {

    }
    setSchema(schema){
        return  mongoose.model('logs', mongoose.Schema(schema));
    }

}