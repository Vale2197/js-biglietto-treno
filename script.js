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

if (etaPasseggero < 18) {
    document.getElementById("prezzo_finale").innerHTML = 
        `
            sei minorenne, hai uno sconto del 20%, quindi dovrai pagare ${(bigliettoIntero - scontoDaApplicareMinorenni).toPrecision(4)} Euro
        
        `
} else if (etaPasseggero > 65) {
    document.getElementById("prezzo_finale").innerHTML = 
    `
        per lei, è stato applicato uno sconto del 40%, dovrà pagare ${(bigliettoIntero - scontoDaApplicareOver65).toPrecision(4)} Euro
    
    `
} else {
    document.getElementById("prezzo_finale").innerHTML = 
    `
        ... devi pagare ${bigliettoIntero.toPrecision(4)} Euro
    
    `
}
/* /CONDIZIONI */