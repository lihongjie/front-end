var exports_mode = require('./exports_mode');

exports_mode.sayHello();

var module_exports_mode = require('./module_exports_mode');

new module_exports_mode();

var module_exports_extend = require('./module_exports_extend');

var people = new module_exports_extend('Li');
console.log(people.sayHello());
console.log(people.sayGoodBye());
