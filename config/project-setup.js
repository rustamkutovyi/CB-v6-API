import 'dotenv/config'
import request from 'supertest'

before(async () => {
    const response = await request(process.env.BASE_URL).post('/user/login').send({
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
      });
      console.log(response.body);

       process.env.TOKEN = response.body.payload.token
       
});