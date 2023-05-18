//1
const button=document.querySelector('.button');
button.addEventListener('click', function(){
    console.log('Hello')});
//2
let count = 0;
let button2 = document.querySelector('.button2');
    button2.addEventListener("click", function() {
    console.log(count);
    count++;
});

//3
function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    console.log(inputVal);}
//4
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}
    
function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
//5
let names = ['Sona', 'Milena', 'Samvel', 'Nare', 'Narek'];

  for (let i = 0; i < names.length; i++){
       
let list = document.createElement('li');
   list.innerText=names[i];
    document.querySelector('.box').appendChild(list);
    } 