import assert from 'node:assert';

export type ClickHouseConfiguration = {
  url: string;
  username: string;
  password: string;
  database: string;
};

/**
 * Reads optional ClickHouse configuration without requiring other API secrets.
 * @param env The environment variables to read.
 * @returns Configuration when a URL is supplied, otherwise undefined.
 */
export function readClickHouseConfiguration(
  env: NodeJS.ProcessEnv
): ClickHouseConfiguration | undefined {
  if (!env.CLICKHOUSE_URL) return;
  assert.ok(
    env.CLICKHOUSE_USERNAME,
    'CLICKHOUSE_USERNAME is required when CLICKHOUSE_URL is configured.'
  );
  assert.ok(
    env.CLICKHOUSE_DATABASE,
    'CLICKHOUSE_DATABASE is required when CLICKHOUSE_URL is configured.'
  );
  return {
    url: env.CLICKHOUSE_URL,
    username: env.CLICKHOUSE_USERNAME,
    password: env.CLICKHOUSE_PASSWORD ?? '',
    database: env.CLICKHOUSE_DATABASE
  };
}
