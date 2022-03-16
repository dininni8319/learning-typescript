"use strict";
//Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuple 
let person = [1, "Brad", true];
//Tuple Array 
let employee;
employee = [
    [1, "Anton"],
    [2, "John"],
    [3, "Jil"],
];
//Union, can be string or number
let pId = 22;
pId = '22';
///Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
//Objects
const user = {
    id: 1,
    name: "Salvatore Dininni"
};
// console.log(user);
//Type Assertion
let cid = 1;
let customerId = cid;
// functions // you need to assign 
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(2, 3));
//Void
// The void type denotes the absence of having any type at all. It is a little like the opposite of the any type. Typically, you use the void type as the return type of functions that do not return a value
function log(message) {
    console.log(message);
}
//Objects
const user1 = {
    id: 1,
    name: "Salvatore Dininni"
};
// uses the same interface 
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'brad');
const Mike = new Person(2, 'Mike Jordan');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", 'Developer');
//Generics
// T is a placeholder
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 5, 6, 7]);
let strArr = getArray(["Paul", "Hello", "Jill", "Brad", "Pit"]);
numArr.push(1, 'Hello Word');
console.log(numArr);
strArr.push("Ciao", 223);
console.log(strArr);
