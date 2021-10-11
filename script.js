const etaPasseggero = parseInt(prompt("quanti anni hai?"));
const kmPasseggero = parseInt(prompt("quanti km devi fare?"));
const bigliettoIntero = kmPasseggero * 0.21;
const scontoDaApplicareMinorenni = bigliettoIntero * 0.2;
const scontoDaApplicareOver65 = bigliettoIntero * 0.4;
    /*  / VARIABILI */


console.log("l'utente ha " + etaPasseggero + " anni");
console.log("deve percorrere " + kmPasseggero + " km");
console.log("quindi il prezzo intero del biglietto è di " + bigliettoIntero + " Euro");
/* / dati utente */
