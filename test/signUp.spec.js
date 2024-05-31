import request from 'supertest';
import {
  signUp,
  signUpWithExstEmail,
  signUpWithEmptyEmail,
  signUpwithEmptyPassword,
} from '../helpers/generalHelper';
import { expect } from 'chai';

describe('SIGN UP', () => {
  describe('POSITIVE TESTS', () => {
    it('sign up with valid credentials', async () => {
      const res = await signUp();

      expect(res.statusCode).to.eq(201);
      expect(res.body.message).to.eq(
        'User created successfully. Please check your email and verify it'
      );
    });
  });

  describe('NEGATIVE TESTS', () => {
    it('sign up with existing email', () => {
      signUpWithExstEmail().then(res => {
        expect(res.statusCode).to.eq(409);
        expect(res.body.message).to.eq('User with this e-mail exists');
      });
    });

    it('sign up with empty email fields', async () => {
      const res = await signUpWithEmptyEmail();

      expect(res.statusCode).to.eq(404);
      expect(res.body.message).to.eq('User was not created');
    });

    it('sign up with empty password field', async () => {
      const res = await signUpwithEmptyPassword();
      expect(res.statusCode).to.eq(400);
      expect(res.body.message).to.eq('Wrong password format');
    });
  });
});
