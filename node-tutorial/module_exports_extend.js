var people = function (name) {
  this.name = name;
  this.sayHello = function () {
      return 'hello ' + this.name;
  };
  this.sayGoodBye = function () {
      return 'goodbye ' + this.name;
  }
};
module.exports = people;
console.log("module exports extend: ")
console.log(module.exports);
console.log(exports);
console.log(exports === module.exports);