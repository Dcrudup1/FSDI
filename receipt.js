//basic operations
// addittion
//subtract
//multiply
//divide


let number3 = 0;
let number4 = 0;

/*at the moment that i want to calculate i want to get an option that ask me which is the operation i want to perform
if the option is 1, then you want to add
if the option is 2 you want to subtract
if the option is 3 you want o multiply
if the option is 4 you want to divide*/

// please try to create the logic for the operations to perfor this algorithm 
document.getElementById("btncalculator").addEventListener("click", function calculate(){
 // number 1 and 2 should be reed from the document .get Elementid ("number1"). value;
let number1 = Number(document.getElementById("number1"). value);
let number2 = Number(document.getElementById("number2"). value);
let option = parseInt(prompt("choose the option an operaation to perform: 1) add, 2) sub 3) multiply 4) divide"))
let result;
if (option === 1){
    result = number1 + number2;
} else if (option === 2){
    result = number1 - number2
}else if (option === 3){
    result = number1 * number2
}else if (option === 4)
    //here we need to analize something
    if (number2 !== 0)
{
    result = number1 / number2
}else
{
    alert("you cannot divide by zero");
}

    else {

    alert ("we dont have that option");
    return;
}
alert ("the result is " + result);

console.log(number1);

})
