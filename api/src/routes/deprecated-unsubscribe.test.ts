import request from 'supertest';
import { setupServer } from '../../jest.utils';

import { unsubscribeEndpoints } from './deprecated-unsubscribe';

describe('Deprecated unsubscribeEndpoints', () => {
  setupServer();

  unsubscribeEndpoints.forEach(([endpoint, method]) => {
    test(`${method} ${endpoint} returns 410 status code with "info" message`, async () => {
      const response = await request(fastifyTestInstance.server)[
        method.toLowerCase() as 'get' | 'post'
      ](endpoint);

      expect(response.status).toBe(410);
      expect(response.body).toStrictEqual({
        message: {
          type: 'info',
          message:
            'We are no longer able to process this unsubscription request. Please go to your settings to update your email preferences'
        }
      });
    });
  });
});
