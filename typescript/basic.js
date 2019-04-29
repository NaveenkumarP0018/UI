//boolean type
var isdone = false;
console.log(isdone);
console.log("===================================================");
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(hex);
console.log("===================================================");
//string
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
console.log("===================================================");
var color = "blue";
color = "123";
console.log(color);
console.log("===================================================");
function f() {
    var a = 12;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
console.log(g());
console.log("===================================================");
function f1() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
console.log(f1()); // returns '2'
console.log("===================================================");
var str = '1';
str = 1;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.walk = function (distance) {
        document.write("hi,my name is" + this.name + " and iam walking " + (distance + 1) + "meters");
    };
    return Animal;
}());
var a1 = new Animal("danger");
a1.walk(10);
console.log("===================================================");
var Employee = /** @class */ (function () {
    function Employee(eID, name) {
        this.empID = eID;
        this.fullName = name;
    }
    Employee.prototype.toString = function () {
        console.log("EMP ID of " + name + ":" + this.empID);
    };
    return Employee;
}());
// 
var employee = new Employee("E001", "Kunal");
console.log(employee);
//   class Customer implements Person {
//     custID: string;
//     fullName: string;
//     constructor (cID: string, name: string) {
//      this.custID = cID;
//      this.fullName = name;
//     }
//     toString() {
//      console.log(`Customer ID of ${name}`);
//     }
//    }
// let customer: Person = new Customer("C001", "");
// console.log(customer)
