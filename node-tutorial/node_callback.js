var fs = require('fs');
var path = '../resource/input.txt';

var data = fs.readFileSync(path);
console.log(data.toString());

////////////////////////////

fs.readFile(path, function (err, data) {
    if (err)
        return console.error(err);
    console.log(data.toString());
});

console.log("End");