import { FastifyInstance } from 'fastify';

// eslint-disable-next-line @typescript-eslint/require-await
export async function mongooseRoute(fastify: FastifyInstance) {
  fastify.get('/test-mongoose', async (_request, _reply) => {
    const userModel = fastify.mongoose.user;
    // findOne's type parameter needs to be specified if you want the user type
    // to account for the projection. However, it can be any type:
    const user = await userModel.findOne<{
      email: string;
      about: string;
      flout: string;
      // The projection type is too loose. This should be an error, but it's
      // not:
    }>({ email: 'bar@bar.com' }, { about: 1, notInTheSchema: 1 });
    console.log('user: ', user);
    if (!user) {
      throw new Error('User not found');
    }
    const { about, email, flout } = user;
    return { user, about, email, flout };
  });
}
