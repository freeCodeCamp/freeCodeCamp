// Import the 'build' function from the './app' module
import { build } from './app';

// Import environment variables from './utils/env'
import { FREECODECAMP_NODE_ENV, PORT } from './utils/env';

// Define a mapping of environment names to logger options
const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname'
      }
    },
    level: 'debug'
  },
  production: { level: 'fatal' },
  test: undefined // No logger options for 'test' environment
};

// Define an asynchronous function 'start' to start the server
const start = async () => {
  // Call the 'build' function to create a new Fastify instance
  const fastify = await build({ logger: envToLogger[FREECODECAMP_NODE_ENV] });
  try {
    const port = Number(PORT);
    // Log a message indicating the server is starting
    fastify.log.info(`Starting server on port ${port}`);
    // Call the 'listen' method to start the server listening on the specified port
    await fastify.listen({ port });
  } catch (err) {
    // Log any errors that occur and exit the process with an error code
    fastify.log.error(err);
    process.exit(1);
  }
};

// Call the 'start' function and ignore its return value
void start();
