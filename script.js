firstNumber = +prompt("Enter first number:");
secondNumber = +prompt("Enter second number:");
sumFactorials = 0;
if(firstNumber > secondNumber){
    alert("The first number must be greater than the second number!");
} else{
    interval = +prompt("Enter interval:");
}
for(i = firstNumber; i <= secondNumber; i += interval){
    factorial = 1;
    for(f = 1; f <= i; f ++){
        factorial = factorial * f;  
    }
    sumFactorials += factorial;
}
    alert("The sum of factorials = " + sumFactorials);