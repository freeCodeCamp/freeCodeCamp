import {
  defaultUserId,
  devLogin,
  setupServer,
  superRequest
} from '../../jest.utils';

describe('certificationRoutes', () => {
  setupServer();

  beforeEach(async () => {
    await devLogin();
  });
  test('should return user not found if we cannot find the user', async () => {
    const response = await superRequest(
      'certificate/not-a-valid-user-name/javascript-algorithms-and-data-structures',
      {
        method: 'GET'
      }
    );
    expect(response.body).toEqual({
      type: 'info',
      message: 'flash.username-not-found',
      variables: { username: 'not-a-valid-user-name' }
    });
    expect(response.status).toBe(400);
  });

  test('should ask user to add name if there is no name', async () => {
    await fastifyTestInstance.prisma.user.update({
      where: { id: defaultUserId },
      data: { username: 'foobar', name: null }
    });

    const response = await superRequest(
      'certificate/foobar/javascript-algorithms-and-data-structures',
      {
        method: 'GET'
      }
    );
    expect(response.body).toEqual({
      type: 'info',
      message: 'flash.add-name',
      variables: { username: 'foobar' }
    });
    expect(response.status).toBe(400);
  });

  test('should return not eligible if user is banned', async () => {
    await fastifyTestInstance.prisma.user.update({
      where: { id: defaultUserId },
      data: { username: 'foobar', name: 'foobar', isBanned: true }
    });

    const response = await superRequest(
      'certificate/foobar/javascript-algorithms-and-data-structures',
      {
        method: 'GET'
      }
    );

    expect(response.body).toEqual({
      type: 'info',
      message: 'flash.not-eligible',
      variables: { username: 'foobar' }
    });
    expect(response.status).toBe(400);
  });

  test('should return not eligible if user is cheater', async () => {
    await fastifyTestInstance.prisma.user.update({
      where: { id: defaultUserId },
      data: { username: 'foobar', name: 'foobar', isCheater: true }
    });

    const response = await superRequest(
      'certificate/foobar/javascript-algorithms-and-data-structures',
      {
        method: 'GET'
      }
    );

    expect(response.body).toEqual({
      type: 'info',
      message: 'flash.not-eligible',
      variables: { username: 'foobar' }
    });
    expect(response.status).toBe(400);
  });

  test('should return not honest if user is not honest', async () => {
    await fastifyTestInstance.prisma.user.update({
      where: { id: defaultUserId },
      data: { username: 'foobar', name: 'foobar', isHonest: false }
    });
    const response = await superRequest(
      'certificate/foobar/javascript-algorithms-and-data-structures',
      {
        method: 'GET'
      }
    );

    expect(response.body).toEqual({
      type: 'info',
      message: 'flash.not-honest',
      variables: { username: 'foobar' }
    });
    expect(response.status).toBe(400);
  });

  test('should return profile private if profile is private', async () => {
    await fastifyTestInstance.prisma.user.update({
      where: { id: defaultUserId },
      data: {
        username: 'foobar',
        name: 'foobar',
        profileUI: { isLocked: true }
      }
    });
    const response = await superRequest(
      'certificate/foobar/javascript-algorithms-and-data-structures',
      {
        method: 'GET'
      }
    );

    expect(response.body).toEqual({
      type: 'info',
      message: 'flash.profile-private',
      variables: { username: 'foobar' }
    });
    expect(response.status).toBe(400);
  });

  test('should return certs private if certs are private', async () => {
    await fastifyTestInstance.prisma.user.update({
      where: { id: defaultUserId },
      data: {
        username: 'foobar',
        name: 'foobar',
        profileUI: { showCerts: false }
      }
    });
    const response = await superRequest(
      'certificate/foobar/javascript-algorithms-and-data-structures',
      {
        method: 'GET'
      }
    );

    expect(response.body).toEqual({
      type: 'info',
      message: 'flash.certs-private',
      variables: { username: 'foobar' }
    });
    expect(response.status).toBe(400);
  });

  test('should return timeline private if timeline is private', async () => {
    await fastifyTestInstance.prisma.user.update({
      where: { id: defaultUserId },
      data: {
        username: 'foobar',
        name: 'foobar',
        profileUI: { showTimeLine: false }
      }
    });
    const response = await superRequest(
      'certificate/foobar/javascript-algorithms-and-data-structures',
      {
        method: 'GET'
      }
    );

    expect(response.body).toEqual({
      type: 'info',
      message: 'flash.timeline-private',
      variables: { username: 'foobar' }
    });
    expect(response.status).toBe(400);
  });
});
