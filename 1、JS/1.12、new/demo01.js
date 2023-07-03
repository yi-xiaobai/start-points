


function Person(name) {
    this.name = name
}

Person.prototype.getName = function () {
    return this.name
}

var p = new Person("11")

console.log(p.name);    // 11
console.log(p.getName());   // 11