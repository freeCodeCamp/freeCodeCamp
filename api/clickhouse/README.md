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

## Event identity and reads

An event is identified by `(tracking_id, event_id)`. Retrying an event must reuse
its UUID; another UUID represents a separate action. Calendar dates, timezones,
URLs, and occurrence times are not part of the deduplication key. The row with
the latest `ingested_at` wins. Retried events must also retain the same tracking
ID. If ingestion timestamps tie, which version survives is not guaranteed.

The API client enables `final=1`, so reads deduplicate at query time without
waiting for background merges. Administrative clients that do not use these
defaults must use `FROM activity_events FINAL` or equivalent `argMax` logic.
Apply filters to the deduplicated result, rather than filtering out a newer
version before choosing the latest row.

Migrations 002–004 replace the original date-based partition/sorting keys with
the stable event key. The replacement table has no date partitions; this keeps
retries in the same partition even across month boundaries. Time-based retention
would need a separate design rather than assuming monthly partitions exist.
The original migration remains unchanged, and all existing rows are copied.
The final exchange requires an Atomic database, the default for the development
setup. The old table is retained as `activity_events_before_event_id_migration`;
it is a backup, not a source for new activity reads or writes.

Stop activity writers while migrations 002–004 run. Copying and exchanging the
tables is not one transaction; concurrent inserts could land in the old table
after the copy. Inspect both tables after an interrupted migration before
manually repairing history or resuming. Do not blindly repeat the exchange: a
second exchange would swap the tables back. No backup is deleted automatically.

## Insert acknowledgement and latency

The API still uses asynchronous inserts with `wait_for_async_insert=1`: success
means the batch was flushed to storage, not merely accepted into a memory buffer.
The busy timeout is 100 ms with adaptive busy timeouts disabled, removing the
previous one-second batching delay. This is a latency/batch-size tradeoff, not a
guaranteed end-to-end latency; monitor insert rates and part counts under load.
The API client's request timeout is five seconds instead of the SDK's 30-second
default. This is a socket/request inactivity timeout, not a total query deadline
or cancellation guarantee. Timed-out writes may have succeeded; reuse their event
IDs if retrying. The migration CLI uses its own client and retains SDK defaults.

## Writing migrations

Use a unique numeric filename prefix followed by `_` or `-`, for example
`005_add_activity_column.sql`. Prefixes are compared numerically without a
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
its database may remain. Worker/process names are retained so parallel runs do
not reuse or delete one another's databases.

Inspect leftover test databases with this read-only command:

```sh
pnpm clickhouse:test-db:cleanup
```

The names alone cannot prove that a run has ended, particularly when several
machines share ClickHouse. After confirming the owning run has stopped, remove
one database explicitly:

```sh
pnpm clickhouse:test-db:cleanup --drop freecodecamp_test_1_12345
```

Deletion requires `FREECODECAMP_NODE_ENV=development` and an exact generated name
under the configured database's test prefix. It refuses the application database,
foreign prefixes, and malformed names. There is no automatic age-based deletion
or PID check that could mistake a process on another machine for an abandoned run.

When `CLICKHOUSE_URL` is configured, Playwright setup runs `pnpm clickhouse:migrate` against
its application database before signing in seeded users. Without a URL it skips
migration. Playwright retains its existing shared application database lifecycle.
