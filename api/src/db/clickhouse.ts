import { createClient, type ClickHouseClient } from '@clickhouse/client';
import { type FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import * as Sentry from '@sentry/node';

import { CLICKHOUSE_CONFIG } from '../utils/env.js';
import type { ClickHouseConfiguration } from '../utils/clickhouse-config.js';

declare module 'fastify' {
  interface FastifyInstance {
    clickhouse?: ClickHouseClient;
  }
}

type Options = { configuration?: ClickHouseConfiguration | false };

const clickhousePlugin: FastifyPluginAsync<Options> = fp(
  async (server, options: Options) => {
    const configuration = options.configuration ?? CLICKHOUSE_CONFIG;
    if (!configuration) return;
    const clickhouse = createClient({
      ...configuration,
      request_timeout: 5000,
      clickhouse_settings: {
        async_insert: 1,
        wait_for_async_insert: 1,
        async_insert_use_adaptive_busy_timeout: 0,
        async_insert_busy_timeout_ms: 100,
        date_time_input_format: 'best_effort'
      }
    });

    server.decorate('clickhouse', clickhouse);

    server.addHook('onClose', async () => {
      await clickhouse.close();
    });

    try {
      const ping = await clickhouse.ping({
        select: true,
        abort_signal: AbortSignal.timeout(2000)
      });
      if (!ping.success) throw ping.error;
    } catch (error) {
      Sentry.metrics.count('clickhouse.connect_failed', 1);
      server.log.error(error, 'ClickHouse connection failed');
    }
  }
);

export default clickhousePlugin;
