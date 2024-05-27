let textInput = document.getElementById("text-input");
let btn = document.getElementById("count-button");
let displayCount = document.getElementById("word-count");

function  wordCounter() {

    //capture inout text
    let words = textInput.value;


    //replacing all extra space with single space
    //& trim from both side
    let trimWords = words.replace(/\s+/g, " ").trim();

    //split words (Arrays)
    let splitWords = trimWords.split("");

    //total words length
    let totalWords = splitWords.length;
    

    //Displaying output
    displayCount. innerHTML = `${totalWords}`;

}

btn.addEventListener("click", wordCounter);