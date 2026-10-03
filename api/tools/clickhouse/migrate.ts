import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createClient } from '@clickhouse/client';

import {
  CLICKHOUSE_DATABASE,
  CLICKHOUSE_PASSWORD,
  CLICKHOUSE_URL,
  CLICKHOUSE_USERNAME
} from '../../src/utils/env.js';

const directory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../clickhouse/migrations'
);
const client = createClient({
  url: CLICKHOUSE_URL,
  username: CLICKHOUSE_USERNAME,
  password: CLICKHOUSE_PASSWORD,
  database: CLICKHOUSE_DATABASE
});

try {
  const migrations = (await fs.readdir(directory))
    .filter(file => file.endsWith('.sql'))
    .sort();

  for (const migration of migrations) {
    const query = await fs.readFile(path.join(directory, migration), 'utf8');
    await client.command({
      query,
      clickhouse_settings: { wait_end_of_query: 1 }
    });
    console.info(`Applied ClickHouse migration: ${migration}`);
  }
} finally {
  await client.close();
}
