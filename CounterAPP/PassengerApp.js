document.body.style.backgroundImage="url('img1.jpg')";
let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");

let count=0;
function increment() {
  count+=1 ;
  countEl.innerText=count;
  
}
function save(){
  let countStr= count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
  console.log(count)

}
console.log("Lets count the number of people on the road")
