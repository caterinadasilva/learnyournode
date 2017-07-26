var lista = require('./06_hazlo_modular_modulo.js');

lista(process.argv[2], process.argv[3], function(error, data){
    if (error) {
        return console.error(error);
    }
    data.forEach(function(elem){
        console.log(elem);
    });
});