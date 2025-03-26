let wordList = ["word","word2"]
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

}



function getInput() {

    let inputElement = document.querySelector("#input")
    guess = inputElement.value.toLowerCase()
    inputElement.value = ""
    inputElement.select()
    console.log(guess)


    if (letterExists(guessesGoodList,guess) || letterExists(guessesBadList,guess)) {
        console.log("din jävla fucking idiot jag kommer släppa all min ilska på dig!!")
    }
    else if ( letterExists(selectedWord, guess))  {
        guessesGoodList.push(guess)
        document.querySelector("#guessesGood").innerText = guessesGoodList
    } else{
        guessesBadList.push(guess)
        document.querySelector("#guessesBad").innerText = guessesBadList
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
