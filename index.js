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

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age);


//     if (age >= 100) {
//         resultElement.textContent = `You are TOO old to enter this site`;
//     }
//     else if(age == 0) {
//         resultElement.textContent = `You can't enter. You were just born`;
//     }
    
//     else if(age >= 18) {
//         resultElement.textContent = `You are old enough to enter this site`
//     }
//     else if(age <0) {
//         resultElement.textContent = `Your age can't be below 0`;
//     }
//     else {
//         resultElement.textContent =`You must be enter 18+ to enter this site`
//     }
// }

// .checked = property that determines the checked state of an 
//             HTML checkbox or radio button element 

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
    
//     if(myCheckBox.checked){ 
//         subResult.textContent = `You are subscribed`;
//     }
//     else {
//         subResult.textContent = `You are not subscribed`;
//     }
    
//     if(visaBtn.checked) {
//         paymentResult.textContent = `You are paying with Visa`;
//     }
//     else if (masterCardBtn.checked) {
//         paymentResult.textContent = `You are paying with Mastercard`;
//     } 
//     else if(payPalBtn.checked){
//         paymentResult.textContent = `You are paying with PayPal`;
//     } 
//     else {
//         paymentResult.textContent = `You must select a payment type`;
//     }

// }

// ternary operator = a shortcut to if{} and else{} statements 
                    //    helps to assign a variable based on a condition
                    //    condition ? codeIfTrue : codeIfFalse;
// shortcut to if statements
// let age = 17;
// let message = age >= 18 ? "You are an adult" : "You're a minor";
// console.log(message)

// let time = 9
// let greeting = time < 12 ? "Good morning!" : "Good afternoon";
// console.log(greeting)

// let isStudent = false;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message)

// let purchaseAmount = 130;
// let discount = purchaseAmount >= 100 ? 10 : 0 
// console.log(`Your total is ${purchaseAmount - purchaseAmount *(discount/100)}`);

// SWITCH instead of if else - makes it less rep

// let day = 2;

// switch(day){
//     case 1: 
//         console.log("It is Monday");
//         break;
//     case 2: 
//         console.log("It is Tuesday");
//         break;
//     case 3: 
//         console.log("It is Wednesday");
//         break;
//     case 4: 
//         console.log("It is Thursday");
//         break;
//     case 5: 
//         console.log("It is Friday");
//         break;
//     case 6: 
//         console.log("It is Saturday");
//         break;
//     case 7: 
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }

// let testScore = 32;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     case testScore >= 50:
//         letterGrade = "Your grade is: E";
//         break;
//     default: 
//         letterGrade = "F";
// }

// console.log(letterGrade)

// string methods = allow you to manipulate and work with text (strings)

// let userName = "Mako";

// userName.indexOf("o");
// console.log(userName.indexOf("o"));

// console.log(userName.length);

// userName.toLowerCase
// userName.toUpperCase

// string slicing = creating a substring   
//                  from a portion of another String

//                  string.slice(start, end)

// const fullName = "Broseph Code";

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4);

// let firstChar = fullName.slice(0, 1)
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice (fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// const email = "Hejsan@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@"));

// console.log(username);
// console.log(extension);

// Method chaining = Calling onemethod after another
//                   is one continous line of code.

// ------ NO METHOD CHAINING ------

let username = window.prompt("Enter your username");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);


// -----  METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
