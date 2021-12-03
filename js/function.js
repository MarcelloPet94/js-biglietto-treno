/* call dom */
const userTicket = document.getElementById("yourTicket");
const userData = document.getElementById("userData");
const sale = document.getElementById("sale");

/* variable */
const tripKm = prompt('Inserire il numero di Km');
const userName = prompt('Il tuo nome');
const userAge = prompt('Inserire la propria età');
const verifyAge = parseInt(userAge);
/* variable + infoText*/
let userNameOutput =
`
Salve  ${userName}, ecco il prezzo del tuo biglietto per un totale di ${tripKm} Km:
`
;
let user18 = "<span> 20% di sconto</span>";
let user65 = "<span> 40% di sconto</span>"
let currency = "€";

console.log(verifyAge + "anni");

/* km price */
let triPrice = tripKm * 0.21;
console.log("Prezzo intero" + " " + triPrice + currency);

/* user name output */
userData.innerHTML = userNameOutput;

/* user age output */
if (verifyAge <= 18) {
    let undergradeSale = (triPrice * 20) / 100;
    let priceUndergrade = triPrice - undergradeSale;
    userTicket.innerHTML = priceUndergrade.toFixed(2) + currency + user18;
}

else if (verifyAge >= 65) {
    let overSale = (triPrice * 40) / 100;
    let priceOver = triPrice - overSale;
    userTicket.innerHTML = priceOver.toFixed(2) + currency + user65; 
}

else {
    userTicket.innerHTML = triPrice.toFixed(2) + currency;
}