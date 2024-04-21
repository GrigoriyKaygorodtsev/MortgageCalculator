"Payment1"
let percent = 0.10;
let contribution = 0;
let amount = 50000;
let countMonths = 12;

let payment = 0;
let monthRate = percent / 12; // месячная ставка
payment = (amount - contribution) * (monthRate + (monthRate / (((1 + monthRate)** countMonths) - 1)));
let total = +(payment * countMonths).toFixed(2);
console.log(total);

"Payment2"
let percent2 = 0.10;
let contribution2 = 1000;
let amount2 = 50000;
let countMonths2 = 12;

let payment2 = 0;
let monthRate2 = percent2 / 12; // месячная ставка
payment2 = (amount2 - contribution2) * (monthRate2 + (monthRate2 / (((1 + monthRate2)** countMonths2) - 1)));
let total2 = +(payment2 * countMonths2).toFixed(2);
console.log(total2);

"Payment3"
let percent3 = 0.10;
let contribution3 = 0;
let amount3 = 20000;
let countMonths3 = 24;

let payment3 = 0;
let monthRate3 = percent3 / 12; // месячная ставка
payment3 = (amount3 - contribution3) * (monthRate3 + (monthRate3 / (((1 + monthRate3)** countMonths3) - 1)));
let total3 = +(payment3 * countMonths3).toFixed(2);
console.log(total3);

"Payment4"
let percent4 = 0.10;
let contribution4 = 1000;
let amount4 = 20000;
let countMonths4 = 24;

let payment4 = 0;
let monthRate4 = percent2 / 12; // месячная ставка
payment4 = (amount4 - contribution4) * (monthRate4 + (monthRate4 / (((1 + monthRate4)** countMonths4) - 1)));
let total4 = +(payment4 * countMonths4).toFixed(2);
console.log(total4);

"Payment5"
let percent5 = 0.10;
let contribution5 = 20000;
let amount5 = 20000;
let countMonths5 = 24;

let payment5 = 0;
let monthRate5 = percent5 / 12; // месячная ставка
payment5 = (amount5 - contribution5) * (monthRate5 + (monthRate5 / (((1 + monthRate5)** countMonths5) - 1)));
let total5 = +(payment5 * countMonths5).toFixed(2);
console.log(total5);

"Payment6"
let percent6 = 0.10;
let contribution6 = 0;
let amount6 = 10000;
let countMonths6 = 36;

let payment6 = 0;
let monthRate6 = percent6 / 12; // месячная ставка
payment6 = (amount6 - contribution6) * (monthRate6 + (monthRate6 / (((1 + monthRate6)** countMonths6) - 1)));
let total6 = +(payment6 * countMonths6).toFixed(2);
console.log(total6);

"Payment7"
let percent7 = 0.15;
let contribution7 = 0;
let amount7 = 10000;
let countMonths7 = 36;

let payment7 = 0;
let monthRate7 = percent7 / 12; // месячная ставка
payment7 = (amount7 - contribution7) * (monthRate7 + (monthRate7 / (((1 + monthRate7)** countMonths7) - 1)));
let total7 = +(payment7 * countMonths7).toFixed(2);
console.log(total7);
