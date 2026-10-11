import { createClient } from '@clickhouse/client';

import { applyMigrations } from './migrations.js';

import {
  CLICKHOUSE_DATABASE,
  CLICKHOUSE_PASSWORD,
  CLICKHOUSE_URL,
  CLICKHOUSE_USERNAME
} from '../../src/utils/env.js';

const client = createClient({
  url: CLICKHOUSE_URL,
  username: CLICKHOUSE_USERNAME,
  password: CLICKHOUSE_PASSWORD,
  database: CLICKHOUSE_DATABASE
});

try {
  const migrations = await applyMigrations(client);
  for (const migration of migrations) {
    console.info(`Applied ClickHouse migration: ${migration}`);
  }
  if (migrations.length === 0)
    console.info('No pending ClickHouse migrations.');
} finally {
  await client.close();
}
