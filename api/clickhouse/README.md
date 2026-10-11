# ClickHouse setup and migrations

Start the local databases with Podman from the repository root:

```sh
podman compose -f docker/docker-compose.yml -f docker/docker-compose.ports.yml up -d
pnpm migrate
```

The database credentials are configured in `.env`; see `sample.env`. Containers
create the database but do not apply the migration SQL. Run `pnpm migrate` before
starting the application and whenever a new migration is added.

## Writing migrations

Use a unique numeric filename prefix followed by `_` or `-`, for example
`002_add_activity_column.sql`. Prefixes are compared numerically without a
fixed width or integer-size limit. Use increasing IDs and do not edit, rename,
or remove an applied migration. Add a new migration to change an existing schema.

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
before continuing. Multi-statement migrations may also leave partial changes.

## Tests

API tests create and migrate dedicated databases named
`<configured-database>_test_<vitest-worker-id>_<process-id>`. Each test file drops
its database afterward. Database cleanup is restricted to those generated names;
it never targets the development database. If a worker is forcibly terminated,
its database may remain and require manual cleanup.

The Playwright setup runs `pnpm migrate` against its configured application
database before signing in its seeded users. Playwright retains its existing
shared application database lifecycle.
