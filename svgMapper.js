var fs = require('fs');
fs.mkdir('sprites', function(err) {

});


function _folder(path) {

}
function _files(file) {
    fs.writeFile("sprites/test.svg", "", function(err) {
        
        callback = (err === true ? err : 'The file was saved!');
        return console.log(callback);
    });
}