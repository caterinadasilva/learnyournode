var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(error, lista) {
    lista.forEach(function(elem) {
        if (path.extname(elem).replace('.', '') == process.argv[3]) {
            console.log(elem);
        };
    });
});