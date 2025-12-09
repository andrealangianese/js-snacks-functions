/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
//dichiarazione vocali
const vocals = ['a','e','i','o','u'];


// Dichiara la funzione qui.
function searchVocals() {
    //creo array per stampare le vocali
    const wordVocals = [];
    //creo il ciclo per verificare ogni singola lettera
    for(let i = 0; i < word.length; i++) {
        //assegno la variabile per le iniziali
        let checkLetter = word[i];
        //controllo se checkletter è una vocale, se si la pusho nell'array che ho creato
        if (vocals.includes(checkLetter)) {
            wordVocals.push(checkLetter);
        }
    }
    return wordVocals
}


// Invoca la funzione qui e stampa il risultato in console
// stampo la parola

console.log(word);

//stampo le vocali presenti nella parola

console.log(searchVocals());
console.log(searchVocals().length);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)

