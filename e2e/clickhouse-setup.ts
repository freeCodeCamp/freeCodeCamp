import { execFileSync } from 'node:child_process';
import path from 'node:path';

/** Applies migrations once without sharing authentication state between tests. */
export default function setupClickHouse(): void {
  if (!process.env.CLICKHOUSE_URL) return;

  execFileSync(
    'pnpm',
    ['--dir', path.resolve(__dirname, '..'), 'clickhouse:migrate'],
    { stdio: 'inherit' }
  );
}
