import { setupServer, superRequest } from '../../jest.utils';

describe('/status', () => {
  setupServer();

  test('GET returns 200 status code with empty object', async () => {
    const response = await superRequest('/status/ping', {
      method: 'GET'
    });

    expect(response.body).toStrictEqual({ msg: 'pong' });
    expect(response.status).toBe(200);
  });
});
