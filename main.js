let wordList = ["word","hunger","food", "needed", "oskarcpkropp"]
let shownLetterList = []
let guessesBadList = []
let guessesGoodList = []
let selectedWord = ""

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
    shownLetterList.fill(false)

    displayWord()
}

function displayWord (guess) {
    let displayWordElement = document.querySelector("#word-display")

    displayWordElement.innerHTML = ""
    for(i=0 ; i < selectedWord.length ; i++) {
        let isFoundLetter = selectedWord[i] == guess  // true/false
        let letter = ""
        if(isFoundLetter) {
            letter = guess // == selectedWord[i]
            shownLetterList[i] = true
        } else if(shownLetterList[i]) {
            letter = selectedWord[i]
        }


        console.log(isFoundLetter, guess)
        displayWordElement.innerHTML += '<span class="imreallyhungry">' + letter + '</span>'

    }
}

function getInput() {
    let inputElement = document.querySelector("#input")
    let guess = inputElement.value.toLowerCase()

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



        displayWord(guess)

    } else{
        guessesBadList.push(guess)
        document.querySelector("#guessesBad").innerHTML = guessesBadList
        showBodyPart(index)
        index ++

    }
    
    let finalGuess = true

    for(i=0 ; i < shownLetterList.length ; i++) {
        if(!shownLetterList[i]) {
            finalGuess = false
        }
    }

    if(finalGuess) {
        alert("you made it smartass")
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
