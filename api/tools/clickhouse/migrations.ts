import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { ClickHouseClient } from '@clickhouse/client';

const migrationDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../clickhouse/migrations'
);

type Migration = {
  migration_id: string;
  filename: string;
  checksum: string;
  query: string;
};

type AppliedMigration = Omit<Migration, 'query'>;

/**
 * Applies pending migrations in numeric order and records each successful one.
 * Only one runner may operate on a database at a time. Schema changes and
 * history inserts are not transactional; interrupted runs need manual review.
 * @param client The client connected to the target database.
 * @param directory The directory containing migration SQL files.
 * @returns The filenames applied during this run.
 */
export async function applyMigrations(
  client: ClickHouseClient,
  directory: string = migrationDirectory
): Promise<string[]> {
  const filenames = (await fs.readdir(directory)).filter(filename =>
    filename.endsWith('.sql')
  );
  const migrations: Migration[] = [];
  const ids = new Set<string>();

  for (const filename of filenames) {
    const match = /^(\d+)[_-].+\.sql$/.exec(filename);
    if (!match?.[1]) throw new Error(`Invalid migration filename: ${filename}`);
    const migrationId = BigInt(match[1]).toString();
    if (ids.has(migrationId)) {
      throw new Error(`Duplicate migration ID: ${migrationId}`);
    }
    ids.add(migrationId);
    const query = await fs.readFile(path.join(directory, filename), 'utf8');
    migrations.push({
      migration_id: migrationId,
      filename,
      checksum: createHash('sha256').update(query).digest('hex'),
      query
    });
  }

  migrations.sort((first, second) => {
    const firstId = BigInt(first.migration_id);
    const secondId = BigInt(second.migration_id);
    return firstId < secondId ? -1 : firstId > secondId ? 1 : 0;
  });

  await client.command({
    query: `CREATE TABLE IF NOT EXISTS schema_migrations (
      migration_id String,
      filename String,
      checksum String,
      applied_at DateTime64(3, 'UTC') DEFAULT now64(3)
    ) ENGINE = MergeTree ORDER BY migration_id`,
    clickhouse_settings: { wait_end_of_query: 1 }
  });

  const result = await client.query({
    query: 'SELECT migration_id, filename, checksum FROM schema_migrations',
    format: 'JSONEachRow'
  });
  const history = await result.json<AppliedMigration>();
  const appliedIds = new Set<string>();

  // Validate all history before applying any pending schema changes.
  for (const applied of history) {
    const migration = migrations.find(
      candidate => candidate.migration_id === applied.migration_id
    );
    if (
      !migration ||
      migration.filename !== applied.filename ||
      migration.checksum !== applied.checksum
    ) {
      throw new Error(
        `Applied migration was changed or removed: ${applied.filename}`
      );
    }
    if (appliedIds.has(applied.migration_id)) {
      throw new Error(
        `Duplicate migration history ID: ${applied.migration_id}`
      );
    }
    appliedIds.add(applied.migration_id);
  }

  const appliedFilenames: string[] = [];
  for (const migration of migrations) {
    if (appliedIds.has(migration.migration_id)) continue;

    try {
      await client.command({
        query: migration.query,
        clickhouse_settings: { wait_end_of_query: 1 }
      });
      await client.insert({
        table: 'schema_migrations',
        format: 'JSONEachRow',
        values: [
          {
            migration_id: migration.migration_id,
            filename: migration.filename,
            checksum: migration.checksum
          }
        ],
        clickhouse_settings: { async_insert: 0 }
      });
    } catch (error) {
      throw new Error(
        `Migration failed: ${migration.filename}. Inspect the database before rerunning; schema changes are not rolled back.`,
        { cause: error }
      );
    }
    appliedFilenames.push(migration.filename);
  }
  return appliedFilenames;
}
