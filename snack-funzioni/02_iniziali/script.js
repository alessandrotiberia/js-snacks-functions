/* Scrivi una funzione che accetti un array di nomi e restituisca 
nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function iniziali(names) {
    const risultato = []; // dove mettere le iniziali

for ( let i = 0; i === names.length; i++ ) {
    const nome_inserito = names[i]; // scorre ciclo e inserisce dentro variabile
    risultato.push(nome_inserito[0]); // inserisce dentro risultato
}
        return risultato; //restitusce risultato con le iniziali
}
// Invoca la funzione qui e stampa il risultato in console
    const array_risultato = iniziali(names);
    console.log(array_risultato);
     


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]