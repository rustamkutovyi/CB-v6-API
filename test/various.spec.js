import * as generalHelper from '../helpers/generalHelper';
import request from 'supertest';
import { faker } from '@faker-js/faker';
import { expect } from 'chai';

describe('VERIFY EMAIL IN SIGN UP', () => {
    let  res
    const newEmail = '  user' + Date.now() + '@gmail.com'
    const trimmedEmail = newEmail.trim()

    it('verify email is trimmed', async () => {
       await  generalHelper.signUpParam(newEmail, faker.person.firstName(), faker.person.lastName(), process.env.PASSWORD)

       res = await generalHelper.login(newEmail, process.env.PASSWORD)

    });
});

describe('VERIFY EMAIL', () => {
    let res, str, endPoint
    const newEmail = 'user' + Date.now() + '@gmail.com'
    it('verify email', async () => {
         await generalHelper.signUpParam(newEmail, faker.person.firstName(), faker.person.lastName(), process.env.PASSWORD)

         const resp = await generalHelper.login(newEmail, process.env.PASSWORD)

         str = await generalHelper.emailSearch(newEmail)
        
         endPoint = str.body.payload.items[0].message.split('\n')[4].split('https://clientbase.pasv.us')[1]

         await request('https://clientbase-server-edu-dae6cac55393.herokuapp.com')
         .get(endPoint)
         .send()

         res = await generalHelper.login(newEmail, process.env.PASSWORD)

         expect(res.body.payload.user.roles).to.include('verified')

    })
});