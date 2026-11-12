import { createClient } from '@clickhouse/client';
import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from 'dotenv';

import { applyMigrations } from './migrations.js';

import { readClickHouseConfiguration } from '../../src/utils/clickhouse-config.js';

config({
  path: path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../../../.env'
  )
});
const configuration = readClickHouseConfiguration(process.env);
assert.ok(
  configuration,
  'CLICKHOUSE_URL is required to run ClickHouse migrations.'
);
const client = createClient(configuration);

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
