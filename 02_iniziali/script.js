/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initialLetters(array) {
    //array dove metto le inziali
    const result = [];

    // ciclo per verificare tutti i nomi 
    for(let i = 0; i < names.length; i++) {
        // prendo solo l'iniziale di tutti i nomi 
        let verify = names[i][0];
        result.push(verify);
    }
    return result
}

// Invoca la funzione qui e stampa il risultato in console
//stampo i nomi completi
console.log(names);
//stampo le iniziali dei nomi
console.log(initialLetters());


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
