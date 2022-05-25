// let sumCards = document.getElementById("sum-cards-el")
let sumCards = document.querySelector(".sum-cards-el")
let cardsEl = document.querySelector(".cards-el")
let messageEl = document.getElementById("message-el")
let hasBlackJack = false
let isAlive = true
message = ""

function randomCard() {
    return Math.floor(Math.random() * (12 - 2) + 2);
}

function startGame() {
    let firstCard = randomCard()
    let secondCard = randomCard()
    let total = firstCard + secondCard
    sumCards.textContent = "Total: " + total
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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