/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defaultUserEmail, setupServer, superRequest } from '../../jest.utils';

describe('dev login', () => {
  setupServer();

  const uuidRe = /^[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/;
  const fccUuidRe = /^fcc-[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/;
  it('should create an account if one does not exist', async () => {
    await fastifyTestInstance.prisma.user.deleteMany({
      where: { email: defaultUserEmail }
    });

    const res = await superRequest('/auth/dev-callback', { method: 'GET' });

    const count = await fastifyTestInstance.prisma.user.count({
      where: { email: defaultUserEmail }
    });
    const user = await fastifyTestInstance.prisma.user.findFirst({
      where: { email: defaultUserEmail }
    });

    expect(count).toBe(1);
    expect(user).toMatchObject({
      externalId: expect.stringMatching(uuidRe),
      username: expect.stringMatching(fccUuidRe),
      usernameDisplay: expect.stringMatching(fccUuidRe)
    });
    expect(user?.username).toBe(user?.usernameDisplay);
    expect(res.body).toStrictEqual({ statusCode: 200 });
    expect(res.status).toBe(200);
  });
});
