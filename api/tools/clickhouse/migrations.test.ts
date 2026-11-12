import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import type { ClickHouseClient } from '@clickhouse/client';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { applyMigrations } from './migrations.js';

type History = { migration_id: string; filename: string; checksum: string };

describe('ClickHouse migrations', () => {
  let directory: string;
  let history: History[];
  const command = vi.fn<ClickHouseClient['command']>();
  const insert = vi.fn<ClickHouseClient['insert']>();
  const client = {
    command,
    insert,
    query: vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(history) })
    )
  } as unknown as ClickHouseClient;

  beforeEach(async () => {
    directory = await fs.mkdtemp(
      path.join(os.tmpdir(), 'fcc-clickhouse-migrations-')
    );
    history = [];
    command
      .mockReset()
      .mockResolvedValue({ query_id: 'test', response_headers: {} });
    insert.mockReset().mockResolvedValue({
      query_id: 'test',
      executed: true,
      response_headers: {}
    });
  });

  afterEach(async () => {
    await fs.rm(directory, { recursive: true, force: true });
  });

  test('sorts arbitrary-length numeric prefixes and records successful migrations', async () => {
    const filenames = [
      '1000_fourth.sql',
      '9007199254740993-sixth.sql',
      '2_first.sql',
      '999_third.sql',
      '10_second.sql',
      '9007199254740992_fifth.sql'
    ];
    await Promise.all(
      filenames.map(filename =>
        fs.writeFile(path.join(directory, filename), filename)
      )
    );
    const ordered = [
      filenames[2],
      filenames[4],
      filenames[3],
      filenames[0],
      filenames[5],
      filenames[1]
    ];

    expect(await applyMigrations(client, directory)).toEqual(ordered);
    for (const [index, filename] of ordered.entries()) {
      expect(command).toHaveBeenNthCalledWith(
        index + 2,
        expect.objectContaining({ query: filename })
      );
      expect(insert).toHaveBeenNthCalledWith(
        index + 1,
        expect.objectContaining({
          table: 'schema_migrations',
          values: [
            expect.objectContaining({
              filename,
              checksum: createHash('sha256').update(filename!).digest('hex')
            })
          ],
          clickhouse_settings: { async_insert: 0 }
        })
      );
    }
  });

  test('skips applied migrations and applies only pending ones', async () => {
    await fs.writeFile(path.join(directory, '001_first.sql'), 'SELECT 1');
    await fs.writeFile(path.join(directory, '002_second.sql'), 'SELECT 2');
    history.push({
      migration_id: '1',
      filename: '001_first.sql',
      checksum: createHash('sha256').update('SELECT 1').digest('hex')
    });

    expect(await applyMigrations(client, directory)).toEqual([
      '002_second.sql'
    ]);
    expect(command).toHaveBeenCalledTimes(2);
    expect(command).toHaveBeenLastCalledWith(
      expect.objectContaining({ query: 'SELECT 2' })
    );
    expect(insert).toHaveBeenCalledOnce();
  });

  test.each([
    ['invalid filename', ['first.sql'], 'Invalid migration filename'],
    [
      'duplicate ID',
      ['001_first.sql', '1-second.sql'],
      'Duplicate migration ID'
    ]
  ])(
    'rejects %s before changing the database',
    async (_description, filenames, message) => {
      await Promise.all(
        filenames.map(filename =>
          fs.writeFile(path.join(directory, filename), 'SELECT 1')
        )
      );
      await expect(applyMigrations(client, directory)).rejects.toThrow(message);
      expect(command).not.toHaveBeenCalled();
      expect(insert).not.toHaveBeenCalled();
    }
  );

  test.each(['modified', 'renamed', 'removed'])(
    'rejects a %s applied migration before applying new SQL',
    async change => {
      history.push({
        migration_id: '1',
        filename: '001_first.sql',
        checksum: createHash('sha256').update('SELECT 1').digest('hex')
      });
      if (change !== 'removed') {
        await fs.writeFile(
          path.join(
            directory,
            change === 'renamed' ? '001_renamed.sql' : '001_first.sql'
          ),
          'SELECT 99'
        );
      }
      await fs.writeFile(path.join(directory, '002_second.sql'), 'SELECT 2');

      await expect(applyMigrations(client, directory)).rejects.toThrow(
        'Applied migration was changed or removed'
      );
      expect(command).toHaveBeenCalledOnce();
      expect(insert).not.toHaveBeenCalled();
    }
  );

  test.each(['SQL', 'history insert'])(
    'stops on a failed %s and leaves later migrations unapplied',
    async failure => {
      await fs.writeFile(path.join(directory, '001_first.sql'), 'SELECT 1');
      await fs.writeFile(path.join(directory, '002_second.sql'), 'SELECT 2');
      await fs.writeFile(path.join(directory, '003_third.sql'), 'SELECT 3');
      if (failure === 'SQL') {
        command.mockImplementation(({ query }) => {
          if (query === 'SELECT 2')
            return Promise.reject(new Error('SQL failed'));
          return Promise.resolve({ query_id: 'test', response_headers: {} });
        });
      } else {
        insert
          .mockResolvedValueOnce({
            query_id: 'test',
            executed: true,
            response_headers: {}
          })
          .mockRejectedValueOnce(new Error('History failed'));
      }

      await expect(applyMigrations(client, directory)).rejects.toThrow(
        'Migration failed: 002_second.sql'
      );
      expect(command).toHaveBeenCalledTimes(3);
      expect(insert).toHaveBeenCalledTimes(failure === 'SQL' ? 1 : 2);
    }
  );
});
