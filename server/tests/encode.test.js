const request = require('supertest');
const app = require('../app');

it('should return encoded string', async () => {
  const sample = 'XXXYYYZZZ';
  const encoded = 'X3Y3Z3';

  const response = await request(app)
    .post('/encode')
    .set('Authorization', 'xyz0987654321')
    .send({ string: sample }); 

  expect(response.status).toBe(200);
  expect(response.body).toBe(encoded);
});
