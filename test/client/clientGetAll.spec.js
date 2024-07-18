import { expect } from 'chai'
import { clientGetAll } from '../../helpers/clientHelper'

describe('GET ALL CLIENTS', () => {
    let res
    it('get all clients', async () => {
        res = await clientGetAll()
        expect(res.statusCode).to.eq(200)
        expect(res.body.payload.pager.itemsCount).to.eq(res.body.payload.items.length)
        
    })
    
})