let sumCards = document.querySelector(".sum-cards-el")
let cardsEl = document.querySelector(".cards-el")
let messageEl = document.getElementById("message-el")
let hasBlackJack = false
let isAlive = false
let cards = []



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


function startGame() {
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
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    console.log("Drawing a new cad from the deck!")
    let newCard = randomCard()
    cards.push(newCard)
    renderGame()
}
