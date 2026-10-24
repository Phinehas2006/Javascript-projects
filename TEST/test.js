/*
lap1=23
lap2=34
lap3= 45

function total(){
  let tt= lap1 + lap2 + lap3
  console.log(tt)

}
total()

let notification = "YOU HAVE THREE NEW NOTIFICATIONS"
console.log(notification + "  " + "BOY");
welcomeEl=document.getElementById("welcome-el")
console.log(welcomeEl)
let myName="POWOH PHINEHAS"
let greeting="HELLO AND WLCOME TO OUR AREA" 
welcomeEl.innerText= greeting + myName
*/
document.body.style.backgroundImage="url('img1.jpg')";
let num1=4
let num2=8
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2

let sumEL=document.getElementById("sum-el")
sumEL.textContent="THE RESULT IS :"


function add(){
  let sum = num1 + num2
  sumEL.textContent = "THE SUM IS : " + sum
}


function subtract(){
  sumEL.textContent = "THE DIFFERENCE IS : " + (num1 - num2)
}
function multiply(){
  sumEL.textContent = "THE PRODUCT IS : " + (num1 * num2)
}
function divide(){
  sumEL.textContent = "THE QUOTIENT IS : " + (num1 / num2)
}