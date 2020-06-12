let fs = require('fs');
let path = require('path');
var Finder = require('fs-finder');
module.exports = class FileOperations{

    static searchFile(file_name ,search_dir){
      var files = Finder.from(path.normalize(`${global.appRoot}/${search_dir}`))
      .findFile(file_name);
      console.log(files);		
    }

}