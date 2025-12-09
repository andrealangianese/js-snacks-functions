/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterA(letter) {
    //creo array per stampare succesivamente 
    const result = [];

    //creo il ciclo per verificare 
    for (let i = 0; i < names.length; i++) {
        //prendo le iniziali 
        let check = names[i];
        //verifico se l'iniziali sono uguali ad una determinata lettera
        if (check[0] === letter) {
            //se la prima lettera è uguale a quella che dichiaro sotto allora la pusha nell'array che ho creato
            result.push(check);
        }
    }
    return result
}

// Invoca la funzione qui e stampa il risultato in console
// stampo i nomi 
console.log(names);
// stampo solo le iniziali A
console.log(firstLetterA("A"));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]