var sayHello = function () {
    console.log('hello');
};
module.exports = sayHello;
console.log("module exports: ")
console.log(module.exports);
console.log(exports);
console.log(exports === module.exports);