let wordList = ["word","wordtwo"]
let shownLetterList = []
let guessesBadList = []
let guessesGoodList = []
let selectedWord = ""
let guess = ""

let index = 4
    
    let guessButton = document.querySelector("#guessButton")
    guessButton.addEventListener("click", getInput)

function showBodyPart (_index) {
    document.querySelector("#del" + _index).classList.remove("hidden")
}

function selectWord() {
    selectedWord = wordList[Math.ceil(Math.random() * wordList.length - 1)]
    return selectedWord
}

function resetGame(){
    selectWord()
    console.log("the word is: " + selectedWord)
    shownLetterList = selectedWord.split("")
    shownLetterList.fill(0)

    displayWord()
}

function displayWord () {
    let displayWordElement = document.querySelector("#word-display")

    displayWordElement.innerHTML = ""
    for(i=0 ; i < shownLetterList.length ; i++) {
        displayWordElement.innerHTML += '<span class="imreallyhungry">_</span>'
    }
}

function getInput() {

    let inputElement = document.querySelector("#input")
    guess = inputElement.value.toLowerCase()

    inputElement.value = ""
    inputElement.select()
    console.log(guess)
    let correctGuess = letterExists(selectedWord, guess)
    if( !guess.match(/[a-z]/)) {
        return
    }


    if (letterExists(guessesGoodList,guess) || letterExists(guessesBadList,guess)) {
        console.log("din jävla fucking idiot jag kommer släppa all min ilska på dig!!")
    }
    else if (correctGuess)  {
        guessesGoodList.push(guess)
        document.querySelector("#guessesGood").innerText = guessesGoodList

        displayWord()

    } else{
        guessesBadList.push(guess)
        document.querySelector("#guessesBad").innerHTML = guessesBadList
        showBodyPart(index)
        index ++

    }

    let gameEnded = index == 16
    if(gameEnded) {
        alert("you are really bad at this")
    }


}

function letterExists (item, key) {
    return item.indexOf(key) >= 0
}

function updateGuesses (key) {}

function parseWord (word, key) {}

resetGame()
