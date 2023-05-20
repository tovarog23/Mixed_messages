console.log('Hello World');

const verb = ['Great ', 'Super ', 'lovely ', 'Wonderful ']
const initial = ['Today will be a ', 'Going outside is a ', 'Life is a ', 'You are a ' ]
const final = ['experience', 'joy', 'fun thing']

// generate a random 3 word phrase using the word array

const randomWord = (wordArray) =>{
    let arraylength = wordArray.length;
    let randomInt = Math.floor(Math.random()*arraylength);
    return wordArray[randomInt];
}

const generatePhrase = (init, verb, final) =>{
    finalPhrase = randomWord(init) + randomWord(verb) + randomWord(final)
    return finalPhrase
}


// let random = randomWord(verb)
// console.log(random)
let inspiringQuote = generatePhrase(initial, verb, final);
// console.log(inspiringQuote);

document.addEventListener('DOMContentLoaded', function(){
    let inspireButton = document.getElementById('mainButton');
    let quoteText = document.getElementById('quoteLine');
    quoteText.textContent = generatePhrase(initial, verb, final);    
    
    inspireButton.addEventListener('click', function(){
        let inspiringQuote = generatePhrase(initial, verb, final);
        quoteText.textContent = inspiringQuote;


    })

})























 





