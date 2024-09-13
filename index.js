// let fullName = "Mako Zhang";
// let age = 24;
// let isStudent = "True";

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// students = students ** 2
// students += 2;
// students -= 2;
// students *= 2;
// students **= 2;
// students %= 2;
// -------------------------------------------------------------------
// Easy way
// let username;

// username = window.prompt("What's your username?");

// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function() {
//      username = document.getElementById("myText").value;
//      document.getElementById("myH1").textContent = `Hello ${username}`
// }

// How to convert from string to number ex:
// let age = window.prompt("How old are you?");
// age atm is a string to convert to number do the following 
// age = Number(age);


// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// HTML
// <!-- <h1 id="myH1">Enter the radius of a circle</h1>
// <label>radius:</label>
// <input type="text" id="myText" /><br /><br />
// <button id="mySubmit">submit</button>
// <h3 id="myH3"></h3> -->


// const PI = 3.14159;
// let radius; 
// let circumference;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + "cm" ;
// }


// HTML:

// <!-- <label id="countLabel">0</label><br />
// <div id="btnContainer">
//   <button id="decreaseBtn" class="buttons">decrease</button>
//   <button id="resetBtn" class="buttons">reset</button>
//   <button id="increaseBtn" class="buttons">increase</button>
// </div>


// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const incraseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// incraseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function() {
//     count--;
//     countLabel.textContent = count;
// }

// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }
/////////////////////////////////////////////////////////////
// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max + min)) + min;

// console.log(randomNum);

// Random number generator -------------------------
// HTML

/* <button id="myButton">roll</button><br />
<label id="label1" class="myLabels"></label><br />
<label id="label2" class="myLabels"></label><br />
<label id="label3" class="myLabels"></label><br />

const myButton = document.getElementById("myButton");
const label1  = document.getElementById("label1");
const label2  = document.getElementById("label2");
const label3  = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
------------------------------------------------ */

// let age = 13;

// if(age >=18){
//     console.log("You are old enough to enter this site");
// } 
// else {
//     console.log("You must be 18+ to enter this site");
// }

// let time = 14;

// if(time < 12) {
//     console.log("Good morning!");
// }
// else{
//     console.log("Good afternoon!");
// }

// let isStudent = true;

// if(isStudent){
//     console.log("You are a student")
// } else {
//     console.log("You are not a student")
// }

// if statements //

// let age = 18;
// let hasLicense = true;

// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("You have your license");
//     } else {
//         console.log("You do not have your license");
//     } 
// }
//     else {
//         console.log("You must be 16+ to have a license");    
// }


// let age = 0;

// if (age >= 100) {
//     console.log("You are TOO old to enter this site");
// }
// else if(age == 0) {
//     console.log("You can`t enter. You were just born");
// }

// else if(age == 18) {
//     console.log("You are old enough to enter this site");
// }
// else if(age <0) {
//     console.log("Your age can`t be below 0");
// } 
// else {
//     console.log("You must be enter 18+ to enter this site");
// }