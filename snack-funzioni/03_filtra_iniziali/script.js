/* Scrivi una funzione che accetti un'array di stringhe e una lettera 
e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtra_per_iniziale(array, lettera) {
  // Usiamo il metodo filter per creare un nuovo array con gli elementi corretti
  return array.filter(parola => parola.startsWith(lettera));
  
  // function(parola) { questo è c
  // return parola.startsWith(lettera);
  //  } 
    
}
// Invoca la funzione qui e stampa il risultato in console

const risultato = filtra_per_iniziale(names, "A");
console.log(risultato);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]