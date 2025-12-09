/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function buondi(nome) {
    //ottengo ora dalla macchina dell'utente
    const ora = new Date().getHours();
    //imposto variabile per riutilizzarla sotto
    let sayHi;

    //uso condizionali per salutare utente in base all'ora in cui si trova
    if (ora <= 13) {
        sayHi =" buongiorno bellezza";
    } else if (ora <= 17) {
        sayHi = "buon pomeriggio cara"
    } else {
        sayHi = "buonaserata"
    }
    //ritorno il risultato
    return sayHi +" "+ nome;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(buondi(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.