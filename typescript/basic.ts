//boolean type
let isdone:boolean=false;
console.log(isdone)
console.log("===================================================")

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(hex)
console.log("===================================================")

//string
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);
console.log("===================================================")
let color:string="blue"
color="123"
console.log(color)
console.log("===================================================")

function f() {
    var a = 12;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
console.log(g());
console.log("===================================================")

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
console.log("===================================================")


var str:any= '1' 
str=1
class Animal{
    private name:string;

    constructor(name){
        this.name=name;

    }
    walk(distance:number){
        document.write("hi,my name is" + this.name + " and iam walking " +(distance + 1)+"meters");
    }
}
let a1=new Animal("danger");
a1.walk(10);
console.log("===================================================")

interface Person {
    fullName: string;
    toString();
   }
class Employee implements Person {
    empID: string;
    fullName: string;
    constructor (eID: string, name: string) {
     this.empID = eID;
     this.fullName = name;
    }
    toString() {
     console.log(`EMP ID of ${name}:${this.empID}`);
    }
   }
// 
   let  employee: Person = new Employee("E001", "Kunal");
   console.log(employee)
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