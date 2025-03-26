let hangmanBodyParts = ["#del4","#del5","#del6","#del7","#del8","#del9","#del11","#del12","#del13","#del14","#del15" ]
let wordList = ["Word","word2"]
let selectedWord = ""
let guess = ""

let index = 0

function showBodyPart (id) {
    document.querySelector("#del4").classList.remove("hidden")
}

function selectWord() {
    selectedWord = wordList[Math.ceil(Math.random() * wordList.length - 1)]
    return selectedWord
}

selectWord()
guessButton()

function guessButton() {
    let guessButton = document.querySelector("#guessButton")
    guessButton.addEventListener("click", getInput)
}



function getInput() {
    let inputElement = document.querySelector("#input")
    guess = inputElement.value
    console.log(guess)
}


