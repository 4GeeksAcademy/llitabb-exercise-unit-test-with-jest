const sum = (a,b) =>{
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };

const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}

const fromDollarToYen = (usDollar) => {
    return (usDollar * oneEuroIs.JPY) / oneEuroIs.USD
}

const fromYenToPound = (jpYen) => {
    return (jpYen * oneEuroIs.GBP) / oneEuroIs.JPY
}

module.exports = {sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
 }

