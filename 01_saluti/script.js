/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluta() {
    let sayHi = "ciao"
    return sayHi;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluta() + " " + userName);

//Risultato atteso se si passa 'Mario': // ciao Mario

//stesso esmpio con un'arrow function

const userName2 = 'luigi';

// Dichiara la funzione qui (arrow function)
const saluta2 = () => {
    let sayHi = "ciao";
    return sayHi;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(saluta2() +" " + userName2);



