// generare un numero random per 16 volte da compreso da 1 a 100 ==> OK
// funzione per generare un numero random in un intervallo arbitrario
function generaRandom(min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}
// attraverso un ciclo for, genero 16 numeri casuali, sfruttando la funzione generaRandom
for (var i = 0; i < 16; i++) {
    var numeroGenerato = generaRandom(1, 100);
    console.log('numero random: ' + numeroGenerato);
}
// chiedere numero all'utente
var numeroUtente = prompt('Inserisci un numero tra 1 e 100');
console.log('numero utente: ' + numeroUtente);
// verificare se il numero dell'utente corrisponde a quelli random
var campoMinato;
for (var i = 0; i < 16; i++) {
    if (numeroUtente == numeroGenerato) {
        // se è uguale stampa Colpito!
        console.log('Colpito!');
    // se è diverso stampa Sei Salvo!
    } else console.log('Sei Salvo');
}
