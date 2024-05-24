import request from 'supertest';
import { expect } from 'chai';

describe('AUTHORIZATION AND AUTHENTICATION', () => {
  it('login with valid credentials', async () => {
    const res = await request('https://clientbase-server.herokuapp.com/v6')
      .post('/user/login')
      .send({
        email: 'jeff1@martin.com',
        password: 'Password1',
      });
      expect(res.statusCode).to.eq(200)
      expect(res.body.message).to.eq('Auth success')
      console.log(res.body);
});

});
