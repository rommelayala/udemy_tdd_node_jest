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
        describe('post',()=>{
            it('create to user json', async () => {
                const axios = {
                    post: jest.fn().mockResolvedValue({ data: 1 })
                }

                const res =  {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                const req = {
                    body: 'requeste body'
                }

                await handlers({ axios }).post(req, res)

                //console.log(res.status.mock)
                expect(res.status.mock.calls).toEqual([
                    [201]
                ])
                
                expect(res.send.mock.calls).toEqual([
                    [1]
                ])
                
                expect(req.body).toEqual('requeste body')
                
                //console.log(axios.post.mock.calls)              
                expect(axios.post.mock.calls).toEqual(
                    [ [ 'https://jsonplaceholder.typicode.com/users', 'requeste body' ] ]
                )
                
                //console.log(req.body)
                expect(req.body).toEqual('requeste body')

            })
        })
        describe('put',()=>{
            it('update to user json', async () => {

                const axios = {
                    put: jest.fn().mockResolvedValue({ data: 1 })
                }

                const req = {
                    body: 'requeste body',
                    params: {
                        id: 12
                    }
                }
                const res =  {
                    sendStatus: jest.fn()
                }
                
                await handlers({ axios }).put(req, res)

                //console.log(axios.put.mock.calls)
                //console.log(req.params.id)              
                expect(axios.put.mock.calls).toEqual(
                    [ [ 'https://jsonplaceholder.typicode.com/users/12', 'requeste body' ] ]
                )
                //console.log(res.sendStatus.mock)
                expect(res.sendStatus.mock.calls).toEqual([
                    [204]
                ])
                
            })
        })
        describe('delete',()=>{
            it('delete one user',async ()=>{
                const axios = {
                    delete: jest.fn().mockResolvedValue({ data: 1 })
                }
                const req = {
                    params: {
                        id: 12
                    }
                }
                const res =  {
                    sendStatus: jest.fn()
                }
                await handlers({ axios }).delete(req, res)
                //console.log(res.sendStatus.mock.calls)
                expect(res.sendStatus.mock.calls).toEqual([
                    [204]
                ])
                //console.log(axios.delete.mock.calls)
                expect(axios.delete.mock.calls).toEqual([
                    [ 'https://jsonplaceholder.typicode.com/users/12' ]
                ])
            })
        })
    })
})