import 'dotenv/config';
import Fastify from 'fastify';
import { loadEnv } from './env.js';
import { registerHintRoute } from './route.js';
import { createAnthropicGenerator } from './model.js';

const start = async (): Promise<void> => {
  const env = loadEnv();
  const app = Fastify({
    logger: { level: 'info' },
    bodyLimit: env.BODY_LIMIT_BYTES
  });

  app.get('/health', async () => ({ status: 'ok' }));

  registerHintRoute(app, {
    apiKey: env.SOCRATES_API_KEY,
    generate: createAnthropicGenerator({
      apiKey: env.ANTHROPIC_API_KEY,
      modelId: env.MODEL_ID,
      timeoutMs: env.MODEL_TIMEOUT_MS
    })
  });

  const shutdown = async (signal: string): Promise<void> => {
    app.log.info({ signal }, 'shutdown requested');
    await app.close();
    process.exit(0);
  };
  process.on('SIGTERM', () => void shutdown('SIGTERM'));
  process.on('SIGINT', () => void shutdown('SIGINT'));

  await app.listen({ port: env.PORT, host: env.HOST });
  app.log.info(
    `socrates-ai-service listening on http://${env.HOST}:${env.PORT} (model=${env.MODEL_ID})`
  );
};

start().catch(err => {
  console.error(err);
  process.exit(1);
});
