import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import mongoose, { Model, model, Mongoose, Schema } from 'mongoose';

declare module 'fastify' {
  interface FastifyInstance {
    mongoose: { mongoose: Mongoose; user: Model<User> };
  }
}

// For illustration purposes, this is a simplified version of the schema
interface User {
  email: string;
  about: string;
}

export const userSchema = new Schema<User>(
  {
    email: { type: String, required: true },
    about: { type: String, required: true }
  },
  { collection: 'user' }
);

const mongoosePlugin: FastifyPluginAsync = fp(async (server, _options) => {
  const connectionString = process.env.MONGOHQ_URL;
  if (typeof connectionString !== 'undefined') {
    await mongoose.connect(connectionString);
  } else {
    throw new Error('MONGOHQ_URL is not defined');
  }
  const user = model<User>('User', userSchema);

  server.decorate('mongoose', { mongoose, user });

  server.addHook('onClose', async server => {
    await server.mongoose.mongoose.disconnect();
  });
});

export default mongoosePlugin;
