import request from 'supertest'
const chance = require('chance').Chance();
import { expect } from 'chai'
import { clientCreate, clientDelete, clientGetAll } from '../../helpers/clientHelper';

describe('CLIENT CREATE', () => {
    let res
    let clientsList = []

    // CREATING 10 CLIENTS USING LOOP

    describe.skip('CREATE 10 CLIENT USING LOOP', () => {
        it('create 10 clients using loop', async () => {
            for(let i = 0; i < 10; i++){
                 await clientCreate(chance.name(), chance.phone(), chance.email(), chance.sentence())
            }
        });
    });

    //  DELETING ONLY CREATED CLIENTS IN THIS SPEC

    after(async() => {
        for(let i = 0; i < clientsList.length; i++){
            await clientDelete(clientsList[i])
        }
    })

    //  DELETING ALL CLIENTS IN DATABASE

    // after(async () => {
    //     const clientArr = (await clientGetAll()).body.payload.items
    //       for(let i = 0; i < clientArr.length; i++){
    //         await clientDelete(clientArr[i]._id)
    //       }
    // })
    describe('CLIENT CREATE - POSITIVE', () => {
      
        it('create a client with all data', async () => {
           res = await clientCreate(chance.name(), chance.phone(), chance.email(), chance.sentence())
           clientsList.push(res.body.payload)
           expect(res.statusCode).to.eq(200)
           expect(res.body.message).to.eq('Client created')
        })

        it('create a client with only required data', async () => {
            res = await clientCreate(chance.name(), chance.phone())
            clientsList.push(res.body.payload)
            expect(res.statusCode).to.eq(200)
            expect(res.body.message).to.eq('Client created')
         })
    })
    describe('CLIENT CREATE - NEGATIVE', () => {
        it('create a client with out required field name', async () => {
            res = await clientCreate('', chance.phone())
            expect(res.statusCode).to.eq(400)
            expect(res.body.message).to.eq('Client create error')
         })

         it.skip('create a client with out required field phone', async () => {
            res = await clientCreate(chance.name(), '')
            expect(res.statusCode).to.eq(400)
            expect(res.body.message).to.eq('Client create error')
         })
    })
})