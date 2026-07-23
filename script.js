function computer() {
    const randomNum = Math.random()

    if (randomNum >= 0 && randomNum < 1/3) {
    computerMove = 'Rock';
    } else if (randomNum >= 1/3 && randomNum < 2/3) {
    computerMove = 'Paper';
    } else if (randomNum >= 2/3 && randomNum <= 1) {
    computerMove = 'Scissors';
    }

    return computerMove;
}

let result = ''
let youScore = 0
let compScore = 0

function game(move) {

    // variable asigning

    let computerMove = computer()

    const youEl = document.getElementById('youScore')
    const compEl = document.getElementById('compScore')

    const youMove = document.getElementById('youMove')
    const compMove = document.getElementById('compMove')

    const message = document.getElementById('message')

    // game logic

    if (move === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.'
        } 
        else if (computerMove === 'Paper') {
            result = 'You lose.'
        } 
        else if (computerMove === 'Scissors') {
            result = 'You win.'
        }
    } 

    else if (move === 'Paper') {
        if (computerMove === 'Paper') {
        result = 'Tie.';
        } 
        else if (computerMove === 'Scissors') {
        result = 'You lose.';
        } 
        else if (computerMove === 'Rock') {
        result = 'You win.';
        }
    } 
    
    else if (move === 'Scissors') {
        if (computerMove === 'Scissors') {
        result = 'Tie.';
        } 
        else if (computerMove === 'Rock') {
        result = 'You lose.';
        } 
        else if (computerMove === 'Paper') {
        result = 'You win.';
        }
    }

    // score management

    if (result === 'You win.') {
        youScore++
        youEl.textContent = youScore
    } else if (result === 'You lose.') {
        compScore++
        compEl.textContent = compScore
    }

    // result
    youMove.textContent = move
    compMove.textContent = computerMove
    message.textContent = result
}
