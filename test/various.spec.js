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

       console.log(res.body);
    });
});

describe('VERIFY EMAIL', () => {
    let res, str, endPoint
    const newEmail = 'user' + Date.now() + '@gmail.com'
    it('verify email', async () => {
         await generalHelper.signUpParam(newEmail, faker.person.firstName(), faker.person.lastName(), process.env.PASSWORD)

         const resp = await generalHelper.login(newEmail, process.env.PASSWORD)
         console.log(resp.body.payload.user.roles);

         str = await generalHelper.emailSearch(newEmail)

         endPoint = str.body.payload.items[0].message.split('\n')[4].split('https://clientbase.us/v6')[1]

         await request(process.env.BASE_URL)
         .get(endPoint)
         .send()

         res = await generalHelper.login(newEmail, process.env.PASSWORD)

         console.log(res.body.payload.user.roles);
         expect(res.body.payload.user.roles).to.include('verified')

    })
});