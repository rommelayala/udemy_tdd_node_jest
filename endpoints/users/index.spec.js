const handlers = require('./index')

describe('Endpoints', () => {
    describe('users', () => {
        describe('get', () => {
            it('return to user json', async () => {

                /**Retorname una promesa{} del metoodo get: en forma de objeto, 
                 * ademas estoy mockeando el metodo get usando un objeto que tiene la propiedad de data
                 * el valor de la data me la suda lo importante que que la propiedad exista*/
                const axios = {
                    get: jest.fn().mockResolvedValue({ data: 1 })
                }
                /** me muestra todos los metodos disponibles para mockear*/
                //console.log(axios.get)
               /**Mockeo el objeto de response con sus propiedades status y send*/
                const res =  {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }

                /**este handlrs es el manejador de mi funcion con esta funcion estoy construyendo 
                 * la llamada a ami funcion get que implemente en index, get: async (req, res) => 
                 * yo le voy a pasar un objeto vacio{} en lugar de un null y el mock res
                */
                await handlers({ axios }).get({}, res)
                
                /**Me muestra con que valores este se llamo */
                //console.log(res.status.mock.calls)
                //console.log(res.send.mock.calls)
                expect(res.status.mock.calls).toEqual([
                    [200]
                ])
                expect(res.send.mock.calls).toEqual([
                    [1]
                ])

            })
        })
    })
})