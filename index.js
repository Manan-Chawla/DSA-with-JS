
// PRINT HELLOWORLD
console.log("Hello world");
console.warn("Hello world");
console.error("Hello world");


// I/O
//let name=prompt("What is your name?");

document.write(name);


// obj data
const student1={
    names:"Asha",
    age:21,
    DOB:6,
    School:"2nd class",
    fun :function(){
        console.log(`Hi i am ${this.names}`);
    }
};

console.log(student1.fun());


// changing title using js
document.title="ASHA PAGE";

console.log(document);


// constructor


// function constructor
function car(cname,cmodel)
{
    this.cname=cname;
    this.cmodel=cmodel;
}

const car1= new car("BRONCO","FORD");
console.log(car1.cmodel);
console.log(car1.cname);


// class constructor
class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    det()
    {
        console.log(`NAME : ${this.name}`);
        console.log(`AGE : ${this.age}`);
    }
}

let p1=new Person("Manan",23);
p1.det();
   


// filtering odd numbers from a array
let arr=[10,21,35,67,100];
let od=arr.filter(checking);
function checking(elem)
{
    return elem%2==!0;
}

console.log(od);



// changing value of html tags
// document.getElementById("one").innerHTML="<h1>WOW</h1>";

// document.querySelector("#one").innerHTML="<h2>Asha</h2>";
let result=document.querySelectorAll("#one li")[2].innerHTML;
console.warn(result);

// DOM navigation
const e1=document.querySelectorAll("ol");
e1.forEach(e1=>{
    const fc=e1.firstElementChild;
    fc.style.background="red";

    const lc=e1.lastElementChild;
    lc.style.background="yellow";
})




