import request from 'supertest'
import {expect} from 'chai'
import { clientCreate, clientDelete } from '../../helpers/clientHelper';
const chance = require('chance').Chance();

describe('CLIENT DELETE', () => {
    let res, clientId
    before(async () => {
        clientId = (await clientCreate(chance.name(), chance.phone())).body.payload
    })

    it('client delete', async () => {
        res = await clientDelete(clientId)
        expect(res.statusCode).to.eq(200)
        expect(res.body.message).to.eq('Client deleted')
       
    });
});