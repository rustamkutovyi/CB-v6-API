import request from 'supertest';
import { faker } from '@faker-js/faker';

export function login(email, password) {
  return request(process.env.BASE_URL).post('/user/login').send({
    email: email,
    password: password,
  });
}

export function signUp() {
  return request(process.env.BASE_URL)
  .post('/user')
  .send({
    companyName: 'Company',
    email: faker.internet.email().toLowerCase(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: process.env.PASSWORD,
  });
}

export function signUpWithExstEmail() {
  return request(process.env.BASE_URL)
  .post('/user')
  .send({
    companyName: 'Company',
    email: process.env.EMAIL,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: process.env.PASSWORD,
  });
}

export function signUpWithEmptyEmail() {
  return request(process.env.BASE_URL)
  .post('/user')
  .send({
    companyName: 'Company',
    email: '',
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: process.env.PASSWORD,
  });
}

export function signUpwithEmptyPassword() {
  return request(process.env.BASE_URL)
  .post('/user')
  .send({
    companyName: 'Company',
    email: faker.internet.email().toLowerCase(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    password: '',
  });
}