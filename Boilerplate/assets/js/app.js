// Rock, Paper, Scissor

function rockPaperScissor(p1, p2){
    if(p1 === p2){
        return `draw`;
    }

    switch(p1) {
        case 'rock': 
            return p2 === 'scissors' ? `p1 wins` : `p2 wins`;
        case 'scissors':
            return p2 === 'rock' ? `p2 wins` : `p1 wins`;
        case 'paper':
            return p2 === 'scissors' ? `p2 wins` : `p1 wins`;
    }
}

console.log(rockPaperScissor('paper', 'rock'))
console.log(rockPaperScissor('scissors', 'paper'))
console.log(rockPaperScissor('paper', 'paper'))
console.log(rockPaperScissor('scissors', 'rock'))

