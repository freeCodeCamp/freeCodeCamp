import request from 'supertest';

describe('GET /', () => {
  test('have a 200 response', async () => {
    const res = await request(fastifyTestInstance?.server).get('/');
    expect(res?.statusCode).toBe(200);
  });

  test('return { "hello": "world"}', async () => {
    const res = await request(fastifyTestInstance?.server).get('/');
    expect(res?.body).toEqual({ hello: 'world' });
  });
});
