/*function validateItems() {
        var bet = document.forms["startingBetForm"]["startingBet"].value;
        if (bet == "" || isNaN(bet)) {
            alert("Starting bet must be a number and greater than zero.");
            document.forms["startingBetForm"]["startingBet"]
               .parentElement.className = "form-group has-error";
            document.forms["startingBetForm"]["startingBet"].focus();
            return false;
        }
}*/



function validateItems() {
    var bet = document.forms["startingBetForm"]["startingBet"].value;
    if (isNaN(bet) || bet <= 0) {
        alert("Starting bet must be a number and greater than zero");
        return false
        }
}

function rollDice() {
    return Math.ceil(Math.random()  * (1 + 6 -1));
}
for (i = 0; i < 1; i++) {
    console.log(rollDice());
}
