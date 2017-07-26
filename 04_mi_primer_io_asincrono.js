var fs = require('fs');

fs.readFile(process.argv[2], function(error, data){
    var resultado = data.toString().split('\n').length - 1;

    console.log(resultado);
});