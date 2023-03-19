import request, { Response } from 'supertest';
import { API_LOCATION as api } from './utils/env';

describe('GET /', () => {
  let res: undefined | Response;

  beforeAll(async () => {
    res = await request(api).get('/');
  });

  test('have a 200 response', () => {
    expect(res?.statusCode).toBe(200);
  });

  test('return { "hello": "world"}', () => {
    expect(res?.body).toEqual({ hello: 'world' });
  });
});
