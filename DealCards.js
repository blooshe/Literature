//let cards = ["A spade", "2 spade", "2 clover", "3 spade", "5 diamond", "Q diamond", "10 heart", "4 spade", "5 spade", "9 clover", "6 spade", "K heart", "4 clover", "4 diamond", "Q heart", "K clover", "8 clover", "7 spade", "7 clover", "7 diamond", "9 diamond", "8 spade", "9 spade", "6 diamond", "J clover", "9 heart", "10 spade", "J spade", "8 diamond", "J heart", "10 diamond", "5 clover", "A diamond", "J diamond", "Q spade", "K spade", "A heart", "2 heart", "3 clover", "3 heart", "4 heart", "3 diamond", "Q clover", "A clover", "6 clover", "5 heart", "6 heart", "7 heart", "8 heart", "2 diamond", "10 clover", "K diamond"];

let deal = (cards, noOfPlayers) => {
    let players = getPlayers(noOfPlayers);
    let playerArray = Array(noOfPlayers).fill().map((_, i) => i + 1)
    let j = 0;
    let i = 0;
    let remaining = 4;
    while (true) {
        if (j <= cards.length - 1) {
            playerArray.forEach(f => {
                if (j <= cards.length - 1) {
                    players['P' + f].push(cards[j]);
                    j++;
                }
            })
            if ((j + noOfPlayers) > cards.length) {
                console.log('Remaining..', cards.length - j);
                remaining = cards.length - j;
                i = i + remaining;
            } else {
                i = i + noOfPlayers;
            }
        } else {
            break;
        }
    }
    return players;
}

let getPlayers = (noOfPlayers) => {
    let players = {};
    Array(noOfPlayers).fill().forEach((_, i) => {
        i = i + 1;
        players['P' + i] = [];
    });
    return players;
}


//deal(cards, 6);

module.exports = deal;
