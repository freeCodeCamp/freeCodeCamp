import { setupServer, superRequest } from '../../../jest.utils';
import { DEPLOYMENT_VERSION } from '../../utils/env';

describe('/status', () => {
  setupServer();

  test('GET returns 200 status code with pong', async () => {
    const response = await superRequest('/status/ping', {
      method: 'GET'
    });

    expect(response.body).toStrictEqual({ msg: 'pong' });
    expect(response.status).toBe(200);
  });

  test('GET returns 200 status code with version', async () => {
    const response = await superRequest('/status/version', {
      method: 'GET'
    });

    expect(response.body).toStrictEqual({ version: DEPLOYMENT_VERSION });
    expect(response.status).toBe(200);
  });
});
