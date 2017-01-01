var fs = require('fs');
var path = require('path');

var root = path.dirname(require.main.filename);
var _buffer;

function embedded(Localpath) {
    fs.mkdir(`/sprites`, function(err) {
        console.log(err,root);
    });
}

module.exports = function(path) {
    console.log(path);
    return embedded(path);
};
    

    
    

// function createFile(path, buffer) {
//     fs.writeFile("../sprites/test.svg", _buffer, function(err) {
//         if(err)
//             return err;
//     });
// }
