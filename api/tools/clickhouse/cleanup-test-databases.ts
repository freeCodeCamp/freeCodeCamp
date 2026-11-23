import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

import { createClient } from '@clickhouse/client';
import { config } from 'dotenv';

import { readClickHouseConfiguration } from '../../src/utils/clickhouse-config.js';
import { listTestDatabases, removeTestDatabase } from './test-databases.js';

config({
  path: path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../../../.env'
  )
});
const { values } = parseArgs({ options: { drop: { type: 'string' } } });
const configuration = readClickHouseConfiguration(process.env);
assert.ok(
  configuration,
  'CLICKHOUSE_URL is required to inspect test databases.'
);
if (values.drop !== undefined) {
  assert.equal(
    process.env.FREECODECAMP_NODE_ENV,
    'development',
    'Test database removal is restricted to development environments.'
  );
}
const client = createClient({ ...configuration, database: 'system' });

try {
  if (values.drop !== undefined) {
    await removeTestDatabase(client, configuration.database, values.drop);
    console.info(`Removed test database if present: ${values.drop}`);
  } else {
    const names = await listTestDatabases(client, configuration.database);
    for (const name of names) console.info(name);
    if (names.length === 0) console.info('No generated test databases found.');
    console.info(
      'Nothing was removed. Confirm a test run has ended before using --drop with an exact database name.'
    );
  }
} finally {
  await client.close();
}
