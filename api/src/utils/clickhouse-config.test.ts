import { describe, expect, test } from 'vitest';

import { readClickHouseConfiguration } from './clickhouse-config.js';

describe('ClickHouse configuration', () => {
  const env = {
    CLICKHOUSE_URL: 'http://localhost:8123',
    CLICKHOUSE_USERNAME: 'default',
    CLICKHOUSE_DATABASE: 'freecodecamp'
  };

  test('is disabled without a URL, even when other ClickHouse settings exist', () => {
    expect(readClickHouseConfiguration({})).toBeUndefined();
    expect(
      readClickHouseConfiguration({ ...env, CLICKHOUSE_URL: '' })
    ).toBeUndefined();
  });

  test('requires no unrelated API settings and permits an empty password', () => {
    expect(readClickHouseConfiguration(env)).toEqual({
      url: env.CLICKHOUSE_URL,
      username: env.CLICKHOUSE_USERNAME,
      database: env.CLICKHOUSE_DATABASE,
      password: ''
    });
    expect(
      readClickHouseConfiguration({
        ...env,
        CLICKHOUSE_PASSWORD: 'test-secret'
      })?.password
    ).toBe('test-secret');
  });

  test.each(['CLICKHOUSE_USERNAME', 'CLICKHOUSE_DATABASE'])(
    'identifies missing %s when enabled',
    key => {
      expect(() => readClickHouseConfiguration({ ...env, [key]: '' })).toThrow(
        `${key} is required`
      );
    }
  );
});
