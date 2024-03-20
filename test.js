test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dollar should be approximately 146.26 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(8);

    const expectedYens = 8 * 146.261682;

    // Hago mi test usando .toBeCloseTo(expected, precision en decimales) ya que con .toBe da error porque tiene en cuenta todos los decimales
    expect(yens).toBeCloseTo(expectedYens,2); // 1 dollar son 146.26 yens, entonces 8 dollars deberían ser = (8 * 146.26)
})

test("1 yen should be approximately 0.005559 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(8000);

    const expectedPounds = 8000 * 0.005559;

    // Hago mi test usando .toBeCloseTo(expected, precision en decimales) ya que con .toBe da error porque tiene en cuenta todos los decimales
    expect(pounds).toBeCloseTo(expectedPounds, 2); // 1 yen son 0.005559 pounds, entonces 8000 yens deberían ser = (8000 * 0.005559)
})

