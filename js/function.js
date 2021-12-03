/* call dom */
const userTicket = document.getElementById("yourTicket");
const userData = document.getElementById("userData");

/* variable */
const tripKm = prompt('Inserire il numero di Km');
const userName = prompt('Il tuo nome');
const userAge = prompt('Inserire la propria età');
const verifyAge = parseInt(userAge);
let currency = "€";
console.log(verifyAge + "anni");

/* km price */
let triPrice = tripKm * 0.21;
console.log("Prezzo intero" + " " + triPrice + currency);

/* user output */
if (verifyAge <= 18) {
    let undergradeSale = (triPrice * 20) / 100;
    let priceUndergrade = triPrice - undergradeSale;
    userData.innerHTML = "Salve " + userName + " ecco il tuo biglietto:";
    userTicket.innerHTML = "+ 20% di sconto" + " " + priceUndergrade.toFixed(2) + currency;
}

else if (verifyAge >= 65) {
    let overSale = (triPrice * 40) / 100;
    let priceOver = triPrice - overSale;
    userData.innerHTML = "Salve " + userName + " ecco il tuo biglietto:";
    userTicket.innerHTML = "+ 40% di sconto" + " " + priceOver.toFixed(2) + currency;    
}

else {
    userData.innerHTML = "Salve " + userName + " ecco il tuo biglietto:";
    userTicket.innerHTML = triPrice.toFixed(2) + currency;
}