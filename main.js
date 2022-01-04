let Num1 = 6;
let Num2 = 2;

function calculate(x1, x2) {
    let sum = x1 + x2;
    let subtraction = x1 - x2;
    let multiply = x1 * x2;
    if (sum < 0 || subtraction < 0 || multiply < 0) {
        console.log("Wynik jest nieprawidłowy"); 
    }
    else {
        console.log("Wynik dodawania wynosi", sum);
        console.log("Wynik odejmowania wynosi", subtraction); 
        console.log("Wynik mnożenia wynosi", multiply);  
    }
}

calculate(Num1, Num2);