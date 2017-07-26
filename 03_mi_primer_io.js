var fs = require('fs');
var texto = fs.readFileSync(process.argv[2]);
var final = texto.toString().split('\n').length - 1;

console.log(final);