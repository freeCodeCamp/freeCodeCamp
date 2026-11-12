import type { ClickHouseClient } from '@clickhouse/client';
import { expect, test, vi } from 'vitest';

import {
  isTestDatabase,
  listTestDatabases,
  removeTestDatabase
} from './test-databases.js';

test('recognizes generated names without matching application or foreign databases', () => {
  const base = 'free_codecamp';
  for (const name of [`${base}_test_1_123`, `${base}_test_2_456_migrations`]) {
    expect(isTestDatabase(name, base)).toBe(true);
  }
  for (const name of [
    base,
    `${base}_test_1`,
    `${base}_test_backup`,
    `${base}_test_1_0`,
    `${base}_test_1_123;DROP DATABASE system`,
    'another_test_1_123'
  ]) {
    expect(isTestDatabase(name, base)).toBe(false);
  }
});

test('lists only generated test names and never issues a drop', async () => {
  const command = vi.fn();
  const query = vi.fn().mockResolvedValue({
    json: () =>
      Promise.resolve([
        { name: 'freecodecamp' },
        { name: 'freecodecamp_test_backup' },
        { name: 'freecodecamp_test_1_123' },
        { name: 'freecodecamp_test_2_456_migrations' }
      ])
  });
  const client = { query, command } as unknown as ClickHouseClient;

  expect(await listTestDatabases(client, 'freecodecamp')).toEqual([
    'freecodecamp_test_1_123',
    'freecodecamp_test_2_456_migrations'
  ]);
  expect(command).not.toHaveBeenCalled();
});

test('drops only the explicitly selected test database using an identifier parameter', async () => {
  const command = vi.fn().mockResolvedValue({});
  const client = { command } as unknown as ClickHouseClient;

  await removeTestDatabase(client, 'freecodecamp', 'freecodecamp_test_1_123');

  expect(command).toHaveBeenCalledExactlyOnceWith({
    query: 'DROP DATABASE IF EXISTS {database:Identifier} SYNC',
    query_params: { database: 'freecodecamp_test_1_123' }
  });
  command.mockClear();
  await expect(
    removeTestDatabase(client, 'freecodecamp', 'freecodecamp')
  ).rejects.toThrow('Not a generated test database');
  await expect(
    removeTestDatabase(client, 'freecodecamp', 'another_test_1_123')
  ).rejects.toThrow('Not a generated test database');
  expect(command).not.toHaveBeenCalled();
});
