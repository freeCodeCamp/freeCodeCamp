import assert from 'node:assert';
import { once } from 'node:events';
import { createServer } from 'node:http';

import Fastify from 'fastify';
import { expect, test } from 'vitest';

import clickhousePlugin from './clickhouse.js';

test('a stalled ClickHouse ping does not exhaust Fastify plugin initialization', async () => {
  // Accept requests but never respond, exercising the real client's abort path.
  const stalledServer = createServer();
  stalledServer.listen(0, '127.0.0.1');
  await once(stalledServer, 'listening');
  const address = stalledServer.address();
  assert.ok(address && typeof address !== 'string');
  const fastify = Fastify();
  const start = performance.now();
  try {
    await expect(
      fastify.register(clickhousePlugin, {
        configuration: {
          url: `http://127.0.0.1:${address.port}`,
          username: 'default',
          password: '',
          database: 'test'
        }
      })
    ).resolves.toBe(fastify);
    expect(performance.now() - start).toBeLessThan(9000);
    expect(fastify.hasDecorator('clickhouse')).toBe(true);
  } finally {
    await fastify.close();
    stalledServer.closeAllConnections();
    await new Promise<void>((resolve, reject) =>
      stalledServer.close(error => (error ? reject(error) : resolve()))
    );
  }
}, 10000);
