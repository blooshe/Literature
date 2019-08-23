let a = ['spade', 'heart', 'clover', 'diamond'];
let cards = [];
a.forEach(f => {
    cards.push('A' + ' ' + f);
    for(let i = 2; i <= 10; i++) {
        cards.push(i + ' ' + f);
    }
    cards.push('J' + ' ' + f);
    cards.push('Q' + ' ' + f);
    cards.push('K' + ' ' + f);
})