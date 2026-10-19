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

const migrationFilenames = [
  '001_create_activity_events.sql',
  '002_create_activity_events_by_identity.sql',
  '003_copy_activity_events.sql',
  '004_exchange_activity_events.sql'
];

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
        {
          database: getClickHouseTestConfiguration().database,
          migrations: migrationFilenames.length
        }
      ]);
    });

    test('reads acknowledged retries once across dates, months and timezones before merges', async () => {
      const client = fastifyTestInstance.clickhouse;
      assert.ok(client);
      const eventId = crypto.randomUUID();
      const first = {
        event_id: eventId,
        tracking_id: 'retry-test',
        event_type: 'test',
        url: '/old',
        occurred_at: '2026-01-31 23:59:59.000',
        activity_date: '2026-01-31',
        timezone: 'UTC',
        ingested_at: '2026-02-01 00:00:00.000'
      };
      await client.command({ query: 'SYSTEM STOP MERGES activity_events' });
      try {
        for (const value of [
          first,
          {
            ...first,
            url: '/latest',
            occurred_at: '2026-02-01 00:00:01.000',
            activity_date: '2026-02-01',
            timezone: 'Asia/Dhaka',
            ingested_at: '2026-02-01 00:00:02.000'
          },
          { ...first, tracking_id: 'another-camper' }
        ]) {
          await client.insert({
            table: 'activity_events',
            format: 'JSONEachRow',
            values: [value]
          });
        }
        const result = await client.query({
          query: `SELECT tracking_id, url FROM activity_events
            WHERE event_id = {eventId:UUID} ORDER BY tracking_id`,
          query_params: { eventId },
          format: 'JSONEachRow'
        });
        expect(await result.json()).toEqual([
          { tracking_id: 'another-camper', url: '/old' },
          { tracking_id: 'retry-test', url: '/latest' }
        ]);
        const filtered = await client.query({
          query: `SELECT count() AS count FROM activity_events
            WHERE tracking_id = 'retry-test' AND url = '/old'`,
          format: 'JSONEachRow'
        });
        expect(await filtered.json()).toEqual([{ count: 0 }]);
      } finally {
        await client.command({ query: 'SYSTEM START MERGES activity_events' });
      }
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

    test('migrates legacy data without changing applied files or deleting the original table', async () => {
      await client.command({ query: 'DROP TABLE activity_events SYNC' });
      await client.command({
        query: 'DROP TABLE activity_events_before_event_id_migration SYNC'
      });
      await client.command({
        query: await fs.readFile(
          new URL(
            './clickhouse/migrations/001_create_activity_events.sql',
            import.meta.url
          ),
          'utf8'
        )
      });
      const eventId = crypto.randomUUID();
      const first = {
        event_id: eventId,
        tracking_id: 'legacy-camper',
        event_type: 'test',
        occurred_at: '2026-01-31 23:59:59.000',
        activity_date: '2026-01-31',
        timezone: 'UTC',
        ingested_at: '2026-02-01 00:00:00.000'
      };
      await client.insert({
        table: 'activity_events',
        format: 'JSONEachRow',
        values: [
          first,
          {
            ...first,
            activity_date: '2026-02-01',
            timezone: 'Asia/Dhaka',
            ingested_at: '2026-02-01 00:00:02.000'
          }
        ]
      });
      await client.command({ query: 'DROP TABLE schema_migrations SYNC' });
      expect(await applyMigrations(client)).toEqual(migrationFilenames);
      expect(await applyMigrations(client)).toEqual([]);
      const result = await client.query({
        query: 'SELECT filename FROM schema_migrations ORDER BY migration_id',
        format: 'JSONEachRow'
      });
      expect(await result.json()).toEqual(
        migrationFilenames.map(filename => ({ filename }))
      );
      const events = await client.query({
        query: 'SELECT activity_date, timezone FROM activity_events FINAL',
        format: 'JSONEachRow'
      });
      expect(await events.json()).toEqual([
        { activity_date: '2026-02-01', timezone: 'Asia/Dhaka' }
      ]);
      const original = await client.query({
        query:
          'SELECT count() AS count FROM activity_events_before_event_id_migration',
        format: 'JSONEachRow'
      });
      expect(await original.json()).toEqual([{ count: 2 }]);
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
