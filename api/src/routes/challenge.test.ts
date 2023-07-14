/* eslint-disable @typescript-eslint/naming-convention */
import { setupServer, superRequest } from '../../jest.utils';

describe('POST /challenge/coderoad-challenge-completed', () => {
  let setCookies: string[];

  setupServer();

  beforeEach(async () => {
    const res = await superRequest('/auth/dev-callback', { method: 'GET' });
    expect(res.status).toBe(200);
    setCookies = res.get('Set-Cookie');
  });

  test('should return 500 if no tutorialId', async () => {
    const response = await superRequest(
      '/challenge/coderoad-challenge-completed',
      { method: 'POST', setCookies }
    );
    expect(response.status).toBe(500);
  });

  test('should return 400 if no user token', async () => {
    const response = await superRequest(
      '/challenge/coderoad-challenge-completed',
      { method: 'POST', setCookies }
    )
      .set('Accept', 'application/json')
      .send({
        tutorialId: 'freeCodeCamp/learn-bash-by-building-a-boilerplate:v1.0.0'
      });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      msg: `'coderoad-user-token' not found in request headers`
    });
  });

  test('should return 400 if invalid user token', async () => {
    const response = await superRequest(
      '/challenge/coderoad-challenge-completed',
      { method: 'POST', setCookies }
    )
      .set('Accept', 'application/json')
      .set('coderoad-user-token', 'invalid')
      .send({
        tutorialId: 'freeCodeCamp/learn-bash-by-building-a-boilerplate:v1.0.0'
      });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ msg: `invalid user token` });
  });

  test('should return 400 if invalid tutorialId', async () => {
    jest.mock('../utils/env', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return {
        ...jest.requireActual('../utils/env'),
        DEPLOYMENT_ENV: 'production',
        FREECODECAMP_NODE_ENV: 'production'
      };
    });

    const tokenResponse = await superRequest('/user/user-token', {
      method: 'POST',
      setCookies
    });
    expect(tokenResponse.status).toBe(200);
    expect(tokenResponse.body).toHaveProperty('userToken');

    const token = (tokenResponse.body as { userToken: string }).userToken;

    const response = await superRequest(
      '/challenge/coderoad-challenge-completed',
      { method: 'POST', setCookies }
    )
      .set('Accept', 'application/json')
      .set('coderoad-user-token', token)
      .send({ tutorialId: 'invalid' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      msg: `Tutorial not hosted on freeCodeCamp GitHub account`
    });
  });

  test('should return 400 if invalid tutorialId but is hosted on freeCodeCamp', async () => {
    const tokenResponse = await superRequest('/user/user-token', {
      method: 'POST',
      setCookies
    });
    expect(tokenResponse.status).toBe(200);
    expect(tokenResponse.body).toHaveProperty('userToken');

    const token = (tokenResponse.body as { userToken: string }).userToken;

    const response = await superRequest(
      '/challenge/coderoad-challenge-completed',
      { method: 'POST', setCookies }
    )
      .set('Accept', 'application/json')
      .set('coderoad-user-token', token)
      .send({ tutorialId: 'freeCodeCamp/invalid:V1.0.0' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ msg: `Tutorial name is not valid` });
  });

  test('should return 200 if valid tutorialId', async () => {
    const tokenResponse = await superRequest('/user/user-token', {
      method: 'POST',
      setCookies
    });
    expect(tokenResponse.status).toBe(200);
    expect(tokenResponse.body).toHaveProperty('userToken');

    const token = (tokenResponse.body as { userToken: string }).userToken;

    const response = await superRequest(
      '/challenge/coderoad-challenge-completed',
      { method: 'POST', setCookies }
    )
      .set('coderoad-user-token', token)
      .send({
        tutorialId: 'freeCodeCamp/learn-bash-by-building-a-boilerplate:v1.0.0'
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: 'Successfully submitted challenge' });
  });
});
