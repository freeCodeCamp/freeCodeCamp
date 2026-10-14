# ClickHouse setup and migrations

Start the local databases with Podman from the repository root:

```sh
podman compose -f docker/docker-compose.yml -f docker/docker-compose.ports.yml up -d
pnpm clickhouse:migrate
```

ClickHouse is optional for this infrastructure PR. With `CLICKHOUSE_URL` unset
or empty, the API creates no ClickHouse client and makes no startup connection.
When a URL is supplied, `CLICKHOUSE_USERNAME` and `CLICKHOUSE_DATABASE` are required;
`CLICKHOUSE_PASSWORD` may be empty. See `sample.env` for local configuration.

Containers create the database but do not apply migration SQL. Run `pnpm clickhouse:migrate`
before using ClickHouse and whenever a new migration is added. The migration CLI
reads the repository `.env` and requires only ClickHouse settings, not API secrets.
HTTP port 8123 is exposed by the host ports overlay; the devcontainer instead
shares MongoDB's network namespace so the same localhost URL works there.

## Writing migrations

Use a unique numeric filename prefix followed by `_` or `-`, for example
`002_add_activity_column.sql`. Prefixes are compared numerically without a
fixed width or integer-size limit. Use increasing IDs and do not edit, rename,
or remove an applied migration. Add a new migration to change an existing schema.
Each file must contain a single ClickHouse statement. The runner does not split
SQL files into statements; ClickHouse rejects files containing multiple statements.

The runner records each successful migration's ID, filename, SHA-256 checksum,
and application time in `schema_migrations`. Subsequent runs skip recorded
migrations and reject changes to their files. The initial table migration retains
`IF NOT EXISTS` to support databases initialized before migration tracking existed.

## Failure and recovery

Run only one migration process per database at a time. Migrations execute
sequentially; the first failure stops the run. Earlier successful migrations stay
applied. ClickHouse table creation is not transactional, and the runner does not
provide automatic rollback.

A migration's schema changes may succeed before recording its history fails,
including if the process is interrupted between those operations. Do not blindly
rerun after a failure. Inspect the named migration, the resulting schema, and its
history entry. Restore the pre-migration state where safe, or verify the migration
fully completed and repair its history with the correct ID, filename, and checksum
before continuing. Earlier migrations in a failed batch remain applied.

## Tests

Ordinary API tests do not connect to ClickHouse. Tests using `setupServer()` may
explicitly request it with `setupServer({ clickhouse: true })`.

Run the real-database integration suite locally with:

```sh
pnpm test-api:clickhouse
```

The integration suite also runs automatically when `CI=true`, or when
`FCC_ENABLE_CLICKHOUSE_TESTS=true` is supplied. Otherwise it is skipped without
creating clients or databases. Unit tests for configuration, the plugin, the
startup timeout, and migration ordering run without a ClickHouse service.

Tests that use ClickHouse create and migrate dedicated databases named
`<configured-database>_test_<vitest-worker-id>_<process-id>`. Each test file drops
its database afterward. Database cleanup is restricted to those generated names;
it never targets the development database. If a worker is forcibly terminated,
its database may remain and require manual cleanup.

When `CLICKHOUSE_URL` is configured, Playwright setup runs `pnpm clickhouse:migrate` against
its application database before signing in seeded users. Without a URL it skips
migration. Playwright retains its existing shared application database lifecycle.
