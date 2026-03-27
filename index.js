console.log("my name is Ayoo")
alert("yo")
// variables; a way of how you can store stuff in your code
// declaring a variable uses the var, let, or const key words.
// and assigning it a value.
// var is function-scoped and can be redeclared and updated
var name="Ayoo"
console.log (name)
name= "deee"
console.log (name)
// let is block-scoped and can  be updated but cannot be redeclared
let age=23
console.log(age)
age= 13
console.log(age, "gotta chop the yaers beibi")
// const is block-scoped and cannoy be updaed or redeclared
const country= "uganda"
console.log(country)
// country= "kenya"
// onsole.log(country)
// data types


let mark = 80
if(mark > 69) {
    console.log("very good, you have passed the exam")
}
if(mark >=70){
    console.log("you have passed the exam")     
}else{
    console.log("you have failed the exam")
}

// arrays
// ["mango", "apple", "banana"]
// ["1", "2", "3"]

let fruits = ["mango", "apple", "banana"]
console.log(fruits);
console.log(fruits[2])
let mixedArray = [ "dee", 25, "uganda", true, null, (name,'jon')]
console.log(mixedArray)
console.log(mixedArray[5])

// objects
let person= {
    name:"dee",
    district:"blue",
    country:"comoros",
    hobbies:["reading", "coding", "modelling"]
}
console.log(person [4])
// today friday...
let scores= [
    {name: "annet", score:85},
    {name: "justine", score:63},
    {name: "samuel", score:75},
    {name: "martin", score:57},
    {name: "resty", score:39},
    {name: "liz", score:95},
]
scores.forEach(student => {
    let grade;
    if (student.score>=90){
        grade="A"
    }
     if (student.score>=80){
        grade="B"
    }
     if (student.score>=70){
        grade="C"
    }
     if (student.score>=60){
        grade="D"
    }
     if (student.score>=50){
        grade="E"
    }

    else  {
        grade="F"}
    console.log(student.name +":"+student.score+":"+grade)
});

// functions; we can use it any number of times we want.they are reusable blocks of code that perform a specific task.
// function declaration; we use the key word  function

function returnSomeValue(){
    let value= "this is my first function";
    console.log(value)
}
returnSomeValue()

function returnParameter(parameter){
    return parameter
}
console.log(returnParameter("hello world"))

function addNumbers(x, y) {
    return x + y;
}
const sum = addNumbers(4, 5);
console.log(sum)


