import assert from 'node:assert';

import { createClient } from '@clickhouse/client';

import { CLICKHOUSE_CONFIG, FREECODECAMP_NODE_ENV } from './src/utils/env.js';
import type { ClickHouseConfiguration } from './src/utils/clickhouse-config.js';
import { applyMigrations } from './tools/clickhouse/migrations.js';

/**
 * Gets ClickHouse configuration scoped to this test worker and process.
 * @returns Configuration for an isolated test database.
 */
export function getClickHouseTestConfiguration(): ClickHouseConfiguration {
  assert.equal(process.env.NODE_ENV, 'test');
  assert.notEqual(FREECODECAMP_NODE_ENV, 'production');
  assert.ok(
    CLICKHOUSE_CONFIG,
    'CLICKHOUSE_URL is required for ClickHouse integration tests.'
  );
  const workerId = process.env.VITEST_WORKER_ID;
  assert.ok(
    workerId && /^\d+$/.test(workerId),
    'VITEST_WORKER_ID is required.'
  );
  return {
    ...CLICKHOUSE_CONFIG,
    database: `${CLICKHOUSE_CONFIG.database}_test_${workerId}_${process.pid}`
  };
}

function assertTestDatabase(database: string): void {
  const workerDatabase = getClickHouseTestConfiguration().database;
  assert.ok(
    database === workerDatabase || database.startsWith(`${workerDatabase}_`)
  );
}

/**
 * Creates and migrates an isolated database for an API test worker.
 * @param database The generated test database name.
 */
export async function createClickHouseTestDatabase(
  database: string = getClickHouseTestConfiguration().database
): Promise<void> {
  assertTestDatabase(database);
  const configuration = getClickHouseTestConfiguration();
  const admin = createClient({
    ...configuration,
    database: 'system'
  });
  const client = createClient({
    ...configuration,
    database
  });
  let created = false;
  try {
    await admin.command({
      query: 'CREATE DATABASE {database:Identifier}',
      query_params: { database }
    });
    created = true;
    await applyMigrations(client);
  } catch (error) {
    if (created) await dropClickHouseTestDatabase(database);
    throw error;
  } finally {
    await Promise.all([client.close(), admin.close()]);
  }
}

/**
 * Drops only a generated test database, never the configured app database.
 * @param database The generated test database name.
 */
export async function dropClickHouseTestDatabase(
  database: string = getClickHouseTestConfiguration().database
): Promise<void> {
  assertTestDatabase(database);
  const admin = createClient({
    ...getClickHouseTestConfiguration(),
    database: 'system'
  });
  try {
    await admin.command({
      query: 'DROP DATABASE IF EXISTS {database:Identifier} SYNC',
      query_params: { database }
    });
  } finally {
    await admin.close();
  }
}
