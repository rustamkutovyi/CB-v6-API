import request from 'supertest';
import { faker } from '@faker-js/faker';
import { expect } from 'chai';

describe('SIGN UP', () => {
  describe('POSITIVE TESTS', () => {
    it('sign up with valid credentials', async () => {
      const res = await request('https://clientbase-server.herokuapp.com/v6')
        .post('/user')
        .send({
          companyName: 'Company',
          email: faker.internet.email().toLowerCase(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          password: 'Password1',
        });
        console.log(res.body);
    });
  });

  describe('NEGATIVE TESTS', () => {});
});

//email: faker.internet.email().toLowerCase(),
// firstName: faker.name.firstName(),
// lastName: faker.name.lastName(),
// company: faker.company.companyName(),
// addressLine1: faker.address.streetAddress(),
// addressLine2: faker.address.secondaryAddress(),
// zipCode: faker.address.zipCode(),
// street: faker.address.streetAddress(),
// city: faker.address.city()