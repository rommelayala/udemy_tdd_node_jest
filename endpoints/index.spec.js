/***la funcion describe recibe 2 argumentos, 1 lo que se va a testear y 2 la funcion que vamos a ejecutar, 
 * que puede ser mas describes o los test directamente*/
describe('Prueba', () => {
    describe('suma', () => {
        it('suma 2 numeros',() => {
            const suma = (a,b) => {
                return a + b;
            }
/***esta es la comprobacion en si */
            expect(suma(2,3)).toEqual(5);
        })
    })

})