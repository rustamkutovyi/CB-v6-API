import request from 'supertest';
import { expect } from 'chai';
import 'dotenv/config';
import {login} from '../helpers/generalHelper'

describe('AUTHORIZATION AND AUTHENTICATION', () => {
  describe('POSITIVE TESTS', () => {
    let res

    before(async() => {
       res = await login(process.env.EMAIL, process.env.PASSWORD)
    });
    
    it('login with valid credentials, verify status code', () => {
      expect(res.statusCode).to.eq(200);
    });

    it('login with valid credentials, verify body message', () => {
      expect(res.body.message).to.eq('Auth success');
    });
  });
  
  describe('NEGATIVE TESTS', () => {
    
    it('login with invalid email', async () => {
      const res = await request(process.env.BASE_URL).post('/user/login').send({
        email: 'test@exmaple.com',
        password: process.env.PASSWORD,
      });
      expect(res.statusCode).to.eq(400);
      expect(res.body.message).to.eq('Auth failed');
      // console.log(res.body);
    });
    
    it('login with invalid password', async () => {
      const res = await request(process.env.BASE_URL).post('/user/login').send({
        email: process.env.EMAIL,
        password: 1234,
      });
      expect(res.statusCode).to.eq(400);
      expect(res.body.message).to.eq('Auth failed');
      // console.log(res.body);
    });
  });
});
