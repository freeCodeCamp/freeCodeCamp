import request from 'supertest';

import { build } from '../app';
describe('settingRoutes', () => {
  let fastify: undefined | Awaited<ReturnType<typeof build>>;

  beforeAll(async () => {
    fastify = await build();
    await fastify.ready();
  }, 20000);

  afterAll(async () => {
    await fastify?.close();
  });

  test('PUT /update-my-profileui returns 200 status code with "success" message', async () => {
    const response = await request(fastify?.server)
      .put('/update-my-profileui')
      .send({
        profileUI: {
          isLocked: true,
          showAbout: true,
          showCerts: false,
          showDonation: true,
          showHeatMap: false,
          showLocation: true,
          showName: true,
          showPoints: false,
          showPortfolio: true,
          showTimeLine: false
        }
      });

    expect(response?.statusCode).toEqual(200);
  });

  test('PUT /update-my-profileui returns 400 status code with missing keys', async () => {
    const response = await request(fastify?.server)
      .put('/update-my-profileui')
      .send({
        profileUI: {
          isLocked: true,
          showName: true,
          showPoints: false,
          showPortfolio: true,
          showTimeLine: false
        }
      });

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual({
      error: 'Bad Request',
      message: `body/profileUI must have required property 'showAbout'`,
      statusCode: 400
    });
  });
});
