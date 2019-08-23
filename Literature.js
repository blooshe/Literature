let shuffle = require('./ShuffleCards');
let deal = require('./DealCards');

let cards = shuffle(20);
let players = deal(cards, 8);

console.log(players);