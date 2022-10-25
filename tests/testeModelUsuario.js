const {Usuario} = require('../database/models');

console.log(Usuario.findAll());

let promise = Usuario.findAll(); promise.then( data => { console.table(data); } ).catch( err => { console.log("Deu muito ruim!"); } ) 
