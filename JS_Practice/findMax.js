var listOfNums = [1, 2, 3, 5, 8, 13, 20, 40, 100];

function findMax(Array) {
    for (var i = 0; i < Array.length; i++); {
        return Math.max[i]
    }
} 

function findMax() {
    var i;
    var max = null;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
///////////////////////////

function addTwoNumbers(firstNumber, secondNumber){ 
    var sum = (firstNumber + secondNumber); 
return sum;
}


function rollDice(min, max) {
    return Math.ceil(Math.random() * (1 + max - min));
    }

    for (i = 0; i < 10; i++) {
        console.log(rollDice(1, 80))}

