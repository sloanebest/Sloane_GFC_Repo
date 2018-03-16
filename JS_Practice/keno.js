function rollDice(min, max) {
    return Math.ceil(Math.random() * (1 + max - min));
    }

    for (i = 0; i < 10; i++) {
        console.log(rollDice(1, 80))}