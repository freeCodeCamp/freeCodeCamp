import { setupServer, superRequest } from '../../jest.utils';

describe('dev login', () => {
  setupServer();
  it('should create an account if one does not exist', async () => {
    await fastifyTestInstance.prisma.user.deleteMany({
      where: { email: 'foo@bar.com' }
    });

    const res = await superRequest('/auth/dev-callback', { method: 'GET' });

    expect(res.body).toStrictEqual({ statusCode: 200 });
    expect(res.status).toBe(200);
  });
});
