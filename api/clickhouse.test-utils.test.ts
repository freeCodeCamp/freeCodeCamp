import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { createClient, type ClickHouseClient } from '@clickhouse/client';
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test
} from 'vitest';

import {
  createClickHouseTestDatabase,
  dropClickHouseTestDatabase,
  getClickHouseTestConfiguration
} from './clickhouse.test-utils.js';
import { applyMigrations } from './tools/clickhouse/migrations.js';
import { setupServer } from './vitest.utils.js';

const integrationTestsEnabled =
  process.env.CI === 'true' ||
  process.env.FCC_ENABLE_CLICKHOUSE_TESTS === 'true';

describe.skipIf(!integrationTestsEnabled)(
  'API with explicit ClickHouse enablement',
  () => {
    setupServer({ clickhouse: true });

    test('connects the application client to its migrated worker database', async () => {
      assert.ok(fastifyTestInstance.clickhouse);
      const result = await fastifyTestInstance.clickhouse.query({
        query:
          'SELECT currentDatabase() AS database, count() AS migrations FROM schema_migrations',
        format: 'JSONEachRow'
      });
      expect(await result.json()).toEqual([
        { database: getClickHouseTestConfiguration().database, migrations: 1 }
      ]);
    });
  }
);

describe.skipIf(!integrationTestsEnabled)('ClickHouse test databases', () => {
  let firstDatabase: string;
  let secondDatabase: string;
  let first: ClickHouseClient;
  let second: ClickHouseClient;
  let admin: ClickHouseClient;
  let databasesBefore: string[];

  beforeAll(async () => {
    const configuration = getClickHouseTestConfiguration();
    firstDatabase = `${configuration.database}_first`;
    secondDatabase = `${configuration.database}_second`;
    first = createClient({ ...configuration, database: firstDatabase });
    second = createClient({ ...configuration, database: secondDatabase });
    admin = createClient({ ...configuration, database: 'system' });
    const result = await admin.query({
      query: 'SHOW DATABASES',
      format: 'JSONEachRow'
    });
    databasesBefore = (await result.json<{ name: string }>()).map(
      ({ name }) => name
    );
    await createClickHouseTestDatabase(firstDatabase);
    await createClickHouseTestDatabase(secondDatabase);
  });

  afterAll(async () => {
    if (!admin) return;
    try {
      await Promise.all([
        dropClickHouseTestDatabase(firstDatabase),
        dropClickHouseTestDatabase(secondDatabase)
      ]);
      const result = await admin.query({
        query:
          'SELECT name FROM system.databases WHERE name IN ({names:Array(String)})',
        format: 'JSONEachRow',
        query_params: { names: [firstDatabase, secondDatabase] }
      });
      assert.deepEqual(await result.json(), []);
    } finally {
      await Promise.all([first.close(), second.close(), admin.close()]);
    }
  });

  test('migrates isolated databases without touching existing database schemas', async () => {
    await first.insert({
      table: 'activity_events',
      format: 'JSONEachRow',
      values: [
        {
          event_id: crypto.randomUUID(),
          tracking_id: 'isolation-test',
          event_type: 'test',
          occurred_at: '2026-01-01 00:00:00.000',
          activity_date: '2026-01-01',
          timezone: 'UTC'
        }
      ]
    });
    const firstResult = await first.query({
      query: 'SELECT count() AS count FROM activity_events',
      format: 'JSONEachRow'
    });
    const secondResult = await second.query({
      query: 'SELECT count() AS count FROM activity_events',
      format: 'JSONEachRow'
    });
    expect(await firstResult.json()).toEqual([{ count: 1 }]);
    expect(await secondResult.json()).toEqual([{ count: 0 }]);
    expect(await applyMigrations(first)).toEqual([]);
    expect(await applyMigrations(second)).toEqual([]);
    const result = await admin.query({
      query: 'SHOW DATABASES',
      format: 'JSONEachRow'
    });
    const names = (await result.json<{ name: string }>()).map(
      ({ name }) => name
    );
    expect(names).toEqual(expect.arrayContaining(databasesBefore));
  });

  test('refuses to create or drop the configured application database', async () => {
    await expect(
      createClickHouseTestDatabase(process.env.CLICKHOUSE_DATABASE)
    ).rejects.toThrow();
    await expect(
      dropClickHouseTestDatabase(process.env.CLICKHOUSE_DATABASE)
    ).rejects.toThrow();
  });
});

describe.skipIf(!integrationTestsEnabled)(
  'ClickHouse migration integration',
  () => {
    let database: string;
    let client: ClickHouseClient;
    let directory: string;

    beforeAll(() => {
      const configuration = getClickHouseTestConfiguration();
      database = `${configuration.database}_migrations`;
      client = createClient({ ...configuration, database });
    });

    beforeEach(async () => {
      directory = await fs.mkdtemp(
        path.join(os.tmpdir(), 'fcc-clickhouse-integration-')
      );
      await createClickHouseTestDatabase(database);
    });

    afterEach(async () => {
      try {
        await dropClickHouseTestDatabase(database);
      } finally {
        await fs.rm(directory, { recursive: true, force: true });
      }
    });

    afterAll(async () => {
      if (client) await client.close();
    });

    test('adopts an existing activity table and records the initial migration once', async () => {
      await client.command({ query: 'DROP TABLE schema_migrations SYNC' });
      expect(await applyMigrations(client)).toEqual([
        '001_create_activity_events.sql'
      ]);
      expect(await applyMigrations(client)).toEqual([]);
      const result = await client.query({
        query: 'SELECT migration_id, filename FROM schema_migrations',
        format: 'JSONEachRow'
      });
      expect(await result.json()).toEqual([
        { migration_id: '1', filename: '001_create_activity_events.sql' }
      ]);
    });

    test('does not replay a non-idempotent migration on its second run', async () => {
      await client.command({ query: 'DROP TABLE schema_migrations SYNC' });
      await fs.writeFile(
        path.join(directory, '1000-create-probe.sql'),
        'CREATE TABLE migration_probe (n UInt8) ENGINE = Memory'
      );
      expect(await applyMigrations(client, directory)).toEqual([
        '1000-create-probe.sql'
      ]);
      expect(await applyMigrations(client, directory)).toEqual([]);
      const result = await client.query({
        query: 'SELECT count() AS count FROM schema_migrations',
        format: 'JSONEachRow'
      });
      expect(await result.json()).toEqual([{ count: 1 }]);
    });
  }
);
