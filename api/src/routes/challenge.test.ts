/* eslint-disable @typescript-eslint/naming-convention */
import { setupServer, superRequest } from '../../jest.utils';

describe('POST /coderoad-challenge-completed', () => {
  let setCookies: string[];

  setupServer();

  beforeEach(async () => {
    const res = await superRequest('/auth/dev-callback', { method: 'GET' });
    expect(res.status).toBe(200);
    setCookies = res.get('Set-Cookie');
  });

  test('should return 500 if no tutorialId', async () => {
    const response = await superRequest('/coderoad-challenge-completed', {
      method: 'POST',
      setCookies
    });
    expect(response.status).toBe(500);
  });

  test('should return 400 if no user token', async () => {
    const response = await superRequest('/coderoad-challenge-completed', {
      method: 'POST',
      setCookies
    }).send({
      tutorialId: 'freeCodeCamp/learn-bash-by-building-a-boilerplate:v1.0.0'
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      msg: `'coderoad-user-token' not found in request headers`
    });
  });

  test('should return 400 if invalid user token', async () => {
    const response = await superRequest('/coderoad-challenge-completed', {
      method: 'POST',
      setCookies
    })
      .set('coderoad-user-token', 'invalid')
      .send({
        tutorialId: 'freeCodeCamp/learn-bash-by-building-a-boilerplate:v1.0.0'
      });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ msg: 'invalid user token' });
  });

  test('should return 400 if invalid tutorialId', async () => {
    const tokenResponse = await superRequest('/user/user-token', {
      method: 'POST',
      setCookies
    });
    expect(tokenResponse.status).toBe(200);
    expect(tokenResponse.body).toHaveProperty('userToken');

    const token = (tokenResponse.body as { userToken: string }).userToken;

    const response = await superRequest('/coderoad-challenge-completed', {
      method: 'POST',
      setCookies
    })
      .set('coderoad-user-token', token)
      .send({ tutorialId: 'invalid' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      msg: 'Tutorial not hosted on freeCodeCamp GitHub account'
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

    const response = await superRequest('/coderoad-challenge-completed', {
      method: 'POST',
      setCookies
    })
      .set('coderoad-user-token', token)
      .send({ tutorialId: 'freeCodeCamp/invalid:V1.0.0' });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ msg: 'Tutorial name is not valid' });
  });

  test('should return 200 if tutorialId, userToken are present', async () => {
    const tokenResponse = await superRequest('/user/user-token', {
      method: 'POST',
      setCookies
    });
    expect(tokenResponse.status).toBe(200);
    expect(tokenResponse.body).toHaveProperty('userToken');

    const token = (tokenResponse.body as { userToken: string }).userToken;

    const response = await superRequest('/coderoad-challenge-completed', {
      method: 'POST',
      setCookies
    })
      .set('coderoad-user-token', token)
      .send({
        tutorialId: 'freeCodeCamp/learn-bash-by-building-a-boilerplate:v1.0.0'
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: 'Successfully submitted challenge' });

    const user = await fastifyTestInstance.prisma.user.findFirst({
      where: { email: 'foo@bar.com' }
    });

    const challengeCompleted = user?.completedChallenges.some(challenge => {
      return challenge.id === '5ea8adfab628f68d805bfc5e';
    });

    expect(challengeCompleted).toBe(true);
  });
});
