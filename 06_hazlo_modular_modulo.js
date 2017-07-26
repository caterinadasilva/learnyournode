var fs = require('fs');
var path = require('path');

var lista = function(rutaDirectorio, extensionFiltro, callback) {
    fs.readdir( rutaDirectorio, function(error, data) {
        if (error) {
            return callback(error);
        } else {
            return callback(null, data.filter(function(elem) {
                if (path.extname(elem).replace('.', '') == extensionFiltro) {
                    return elem;
                }
            }));
        }
    });
}

module.exports = lista;