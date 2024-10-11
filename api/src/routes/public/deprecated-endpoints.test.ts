import request from 'supertest';

import { setupServer } from '../../../jest.utils';
import { endpoints } from './deprecated-endpoints';

describe('Deprecated endpoints', () => {
  setupServer();

  endpoints.forEach(([endpoint, method]) => {
    test(`${method} ${endpoint} returns 410 status code with "info" message`, async () => {
      const response = await request(fastifyTestInstance.server)[
        method.toLowerCase() as 'get' | 'post'
      ](endpoint);

      expect(response.body).toStrictEqual({
        message: {
          type: 'info',
          message: 'Please reload the app, this feature is no longer available.'
        }
      });
      expect(response.status).toBe(410);
    });
  });
});
