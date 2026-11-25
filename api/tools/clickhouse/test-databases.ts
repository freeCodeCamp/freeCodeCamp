import assert from 'node:assert/strict';

import type { ClickHouseClient } from '@clickhouse/client';

/**
 * Recognizes worker/process database names, including test-specific suffixes.
 * @param name The database name to check.
 * @param database The configured application database.
 * @returns Whether the name belongs to the generated test namespace.
 */
export function isTestDatabase(name: string, database: string): boolean {
  const prefix = `${database}_test_`;
  return (
    name.startsWith(prefix) &&
    /^\d+_[1-9]\d*(?:_[a-z][a-z0-9_]*)?$/.test(name.slice(prefix.length))
  );
}

/**
 * Lists generated test databases without assuming they are abandoned.
 * @param client An administrative client connected to system.
 * @param database The configured application database.
 * @returns Matching database names.
 */
export async function listTestDatabases(
  client: ClickHouseClient,
  database: string
): Promise<string[]> {
  const result = await client.query({
    query:
      'SELECT name FROM system.databases WHERE startsWith(name, {prefix:String}) ORDER BY name',
    query_params: { prefix: `${database}_test_` },
    format: 'JSONEachRow'
  });
  return (await result.json<{ name: string }>())
    .map(({ name }) => name)
    .filter(name => isTestDatabase(name, database));
}

/**
 * Removes one explicitly selected test database, never the application database.
 * The caller must first ensure the selected test run is no longer active.
 * @param client An administrative client connected to system.
 * @param database The configured application database.
 * @param name The exact generated test database to remove.
 */
export async function removeTestDatabase(
  client: ClickHouseClient,
  database: string,
  name: string
): Promise<void> {
  assert.ok(isTestDatabase(name, database), 'Not a generated test database.');
  await client.command({
    query: 'DROP DATABASE IF EXISTS {database:Identifier} SYNC',
    query_params: { database: name }
  });
}
