//let fs = require('fs');
//let cards = ["A spade", "2 spade", "2 clover", "3 spade", "5 diamond", "Q diamond", "10 heart", "4 spade", "5 spade", "9 clover", "6 spade", "K heart", "4 clover", "4 diamond", "Q heart", "K clover", "8 clover", "7 spade", "7 clover", "7 diamond", "9 diamond", "8 spade", "9 spade", "6 diamond", "J clover", "9 heart", "10 spade", "J spade", "8 diamond", "J heart", "10 diamond", "5 clover", "A diamond", "J diamond", "Q spade", "K spade", "A heart", "2 heart", "3 clover", "3 heart", "4 heart", "3 diamond", "Q clover", "A clover", "6 clover", "5 heart", "6 heart", "7 heart", "8 heart", "2 diamond", "10 clover", "K diamond"];
let cards = ["A spade", "3 spade", "5 diamond", "Q diamond", "10 heart", "4 spade", "5 spade", "9 clover", "6 spade", "K heart", "4 clover", "4 diamond", "Q heart", "K clover", "8 clover", "7 spade", "7 clover", "7 diamond", "9 diamond", "8 spade", "9 spade", "6 diamond", "J clover", "9 heart", "10 spade", "J spade", "8 diamond", "J heart", "10 diamond", "5 clover", "A diamond", "J diamond", "Q spade", "K spade", "A heart", "3 clover", "3 heart", "4 heart", "3 diamond", "Q clover", "A clover", "6 clover", "5 heart", "6 heart", "7 heart", "8 heart", "10 clover", "K diamond"];

let shuffler = (noOfCardsToDraw) => {
    let length = cards.length - 1;
    let drawnCards = cards.splice(length - noOfCardsToDraw, noOfCardsToDraw);
    let insertAtIndex = getRandomInt(0, 51);
    cards.splice(insertAtIndex, 0, ...drawnCards);
}

let shuffle = (noOfTimesToShuffle) => {
    for (let i = 0; i < noOfTimesToShuffle; i++) {
        let noOfCardsToDraw = getRandomInt(1, 2);
        shuffler(noOfCardsToDraw);
    }
    return cards;
}

//fs.writeFileSync('D:/Cards.txt', JSON.stringify(cards));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

module.exports = shuffle;
