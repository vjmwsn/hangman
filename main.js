let wordList = ["word","hunger","food", "needed", "oskarcpkropp", "datormus", "rickardsmagichandfixoskarscpbody", "gratisgaffel"]
let shownLetterList = []
let guessesBadList = []
let guessesGoodList = []
let selectedWord = ""



let index = 4
    
let guessButton = document.querySelector("#guessButton")
    guessButton.addEventListener("click", getInput)

let resetButton = document.querySelector("#resetButton")
    resetButton.addEventListener("click", resetGame)

let creditsButton = document.querySelector("#creditsButton")
    creditsButton.addEventListener("click", guessHowHandsomeThisGuyIs)

let inputElement = document.querySelector("#input")
inputElement.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        getInput()
    }
});

function guessWhichToastToDisplay (apa) {
    let toastElement = document.querySelector("#toast")
    const FIVE_SEC = 5000

    toastElement.innerText = apa
    toastElement.classList.remove("hidden")
    setTimeout(() =>{
        toastElement.classList.add("hidden")
    }, FIVE_SEC)
}

function guessHowHandsomeThisGuyIs() {
   let handsomeElement = document.querySelector("#sexeeey")
   handsomeElement.classList.remove("hidden")
   setTimeout(() =>{
    handsomeElement.classList.add("hidden")
}, 250)
}

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
    guessesBadList = []
    guessesGoodList = []
    displayWord()
    document.querySelector("#guessesGood").innerText = ""
    document.querySelector("#guessesBad").innerText = ""
    document.querySelector("#resetButton").classList.add("hidden")
    document.querySelector("#sexeeey").classList.add("hidden")

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
    let guess = inputElement.value.toLowerCase()

    inputElement.value = ""
    inputElement.select()
    console.log(guess)
    let correctGuess = letterExists(selectedWord, guess)
    if( !guess.match(/[a-zåäö]/)) {
        return
    }


    if (letterExists(guessesGoodList,guess) || letterExists(guessesBadList,guess)) {
        guessWhichToastToDisplay("din jävla fucking idiot jag kommer släppa all min ilska på dig!!")
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
        guessWhichToastToDisplay("you made it smartass")
        document.querySelector("#resetButton").classList.remove("hidden")
    }

    let gameEnded = index == 16
    if(gameEnded) {
        alert("you are really bad at this")
        document.querySelector("#resetButton").classList.remove("hidden")
    }


}

function letterExists (item, key) {
    return item.indexOf(key) >= 0
}

function updateGuesses (key) {}

function parseWord (word, key) {}

resetGame()
