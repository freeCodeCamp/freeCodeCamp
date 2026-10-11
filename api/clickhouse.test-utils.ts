import assert from 'node:assert';

import { createClient } from '@clickhouse/client';

import {
  CLICKHOUSE_DATABASE,
  CLICKHOUSE_PASSWORD,
  CLICKHOUSE_URL,
  CLICKHOUSE_USERNAME,
  FREECODECAMP_NODE_ENV
} from './src/utils/env.js';
import { applyMigrations } from './tools/clickhouse/migrations.js';

function assertTestDatabase(database: string): void {
  assert.equal(process.env.NODE_ENV, 'test');
  assert.notEqual(FREECODECAMP_NODE_ENV, 'production');
  const workerDatabase = `${process.env.CLICKHOUSE_DATABASE}_test_${process.env.VITEST_WORKER_ID}_${process.pid}`;
  assert.ok(
    database === workerDatabase || database.startsWith(`${workerDatabase}_`)
  );
}

/**
 * Creates and migrates an isolated database for an API test worker.
 * @param database The generated test database name.
 */
export async function createClickHouseTestDatabase(
  database: string = CLICKHOUSE_DATABASE
): Promise<void> {
  assertTestDatabase(database);
  const admin = createClient({
    url: CLICKHOUSE_URL,
    username: CLICKHOUSE_USERNAME,
    password: CLICKHOUSE_PASSWORD,
    database: 'system'
  });
  const client = createClient({
    url: CLICKHOUSE_URL,
    username: CLICKHOUSE_USERNAME,
    password: CLICKHOUSE_PASSWORD,
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
  database: string = CLICKHOUSE_DATABASE
): Promise<void> {
  assertTestDatabase(database);
  const admin = createClient({
    url: CLICKHOUSE_URL,
    username: CLICKHOUSE_USERNAME,
    password: CLICKHOUSE_PASSWORD,
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
