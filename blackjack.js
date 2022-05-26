let sumCards = document.querySelector(".sum-cards-el")
let cardsEl = document.querySelector(".cards-el")
let messageEl = document.getElementById("message-el")
let hasBlackJack = false
let isAlive = false
let cards = []
let player = {
    name: "Jez",
    chips: 150
}
let playerEl = document.querySelector(".player-el")
playerEl.textContent = player.name + ": $" + player.chips

function drawFirstTwoCards(){
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards.push(firstCard)
    cards.push(secondCard)
}


function randomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
        return 10
    }
    return randomNumber
}

function resetGame() {
    if (cards.length === 0) {
        messageEl.textContent = "Start the game first!"
        return
    }
    messageEl.textContent = "Want to play a round?"
    sumCards.textContent = "Total: "
    cardsEl.textContent = "Cards: "
    hasBlackJack = false
    isAlive = false
    cards = []

}

function startGame() {
    if (isAlive === true) {
        messageEl.textContent = "Game already sarted! Pick a card?"
        return
    }
    cards.length = 0;
    isAlive = true
    drawFirstTwoCards()
    renderGame()
}


function renderGame() {
    let total = cards.reduce((a, b) => a + b, 0)
    sumCards.textContent = "Total: " + total
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (total <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (total === 21) {
        message = "You've got a Blackjack!"
        isAlive = false
        hasBlackJack = true
    }
    else {
        message = "You're out of the game! Start a new game?"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (cards.length === 0) {
        messageEl.textContent = "Start the game first!"
        return
    }
    if (isAlive === false || hasBlackJack === true) {
        messageEl.textContent = "You can not draw any more cards!"
        return
    }
    let newCard = randomCard()
    cards.push(newCard)
    renderGame()
}
