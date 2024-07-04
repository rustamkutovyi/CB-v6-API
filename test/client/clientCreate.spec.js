import request from 'supertest'
const chance = require('chance').Chance();
import { expect } from 'chai'
import { clientCreate } from '../../helpers/clientHelper';

describe('CLIENT CREATE', () => {
    let res
    describe('CLIENT CREATE - POSITIVE', () => {
        it('create a client with all data', async () => {
           res = await clientCreate(chance.name(), chance.phone(), chance.email(), chance.sentence())
           expect(res.statusCode).to.eq(200)
           expect(res.body.message).to.eq('Client created')
        })

        it('create a client with only required data', async () => {
            res = await clientCreate(chance.name(), chance.phone())
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