import { createClient, type ClickHouseClient } from '@clickhouse/client';
import { type FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import * as Sentry from '@sentry/node';

import {
  CLICKHOUSE_DATABASE,
  CLICKHOUSE_PASSWORD,
  CLICKHOUSE_URL,
  CLICKHOUSE_USERNAME
} from '../utils/env.js';

declare module 'fastify' {
  interface FastifyInstance {
    clickhouse: ClickHouseClient;
  }
}

const clickhousePlugin: FastifyPluginAsync = fp(async server => {
  const clickhouse = createClient({
    url: CLICKHOUSE_URL,
    username: CLICKHOUSE_USERNAME,
    password: CLICKHOUSE_PASSWORD,
    database: CLICKHOUSE_DATABASE,
    clickhouse_settings: {
      async_insert: 1,
      wait_for_async_insert: 1,
      async_insert_busy_timeout_ms: 1000,
      date_time_input_format: 'best_effort'
    }
  });

  server.decorate('clickhouse', clickhouse);

  try {
    const ping = await clickhouse.ping({ select: true });
    if (!ping.success) {
      throw ping.error;
    }
  } catch (error) {
    Sentry.metrics.count('clickhouse.connect_failed', 1);
    server.log.error(error, 'ClickHouse connection failed');
  }

  server.addHook('onClose', async () => {
    await clickhouse.close();
  });
});

export default clickhousePlugin;
