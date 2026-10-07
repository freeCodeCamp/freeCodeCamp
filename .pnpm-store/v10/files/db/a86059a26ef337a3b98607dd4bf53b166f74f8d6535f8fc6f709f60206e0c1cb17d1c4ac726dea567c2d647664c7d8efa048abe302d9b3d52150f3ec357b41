<h1 align="center">Fastify</h1>

## Database

Fastify's ecosystem provides a handful of
plugins for connecting to various database engines.
This guide covers engines that have Fastify
plugins maintained within the Fastify organization.

> If a plugin for your database of choice does not exist
> you can still use the database as Fastify is database agnostic.
> By following the examples of the database plugins listed in this guide,
> a plugin can be written for the missing database engine.

> If you would like to write your own Fastify plugin
> please take a look at the [plugins guide](./Plugins-Guide.md)

### [MySQL](https://github.com/fastify/fastify-mysql)

Install the plugin by running `npm i @fastify/mysql`.

*Usage:*

```javascript
const fastify = require('fastify')()

fastify.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root@localhost/mysql'
})

fastify.get('/user/:id', function(req, reply) {
  fastify.mysql.query(
    'SELECT id, username, hash, salt FROM users WHERE id=?', [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
```

### [Postgres](https://github.com/fastify/fastify-postgres)
Install the plugin by running `npm i pg @fastify/postgres`.

*Example*:

```javascript
const fastify = require('fastify')()

fastify.register(require('@fastify/postgres'), {
  connectionString: 'postgres://postgres@localhost/postgres'
})

fastify.get('/user/:id', function (req, reply) {
  fastify.pg.query(
    'SELECT id, username, hash, salt FROM users WHERE id=$1', [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
```

### [Redis](https://github.com/fastify/fastify-redis)
Install the plugin by running `npm i @fastify/redis`

*Usage:*

```javascript
'use strict'

const fastify = require('fastify')()

fastify.register(require('@fastify/redis'), { host: '127.0.0.1' })
// or
fastify.register(require('@fastify/redis'), { url: 'redis://127.0.0.1', /* other redis options */ })

fastify.get('/foo', function (req, reply) {
  const { redis } = fastify
  redis.get(req.query.key, (err, val) => {
    reply.send(err || val)
  })
})

fastify.post('/foo', function (req, reply) {
  const { redis } = fastify
  redis.set(req.body.key, req.body.value, (err) => {
    reply.send(err || { status: 'ok' })
  })
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
```

By default `@fastify/redis` doesn't close
the client connection when Fastify server shuts down.
To opt-in to this behavior, register the client like so:

```javascript
fastify.register(require('@fastify/redis'), {
  client: redis,
  closeClient: true
})
```

### [Mongo](https://github.com/fastify/fastify-mongodb)
Install the plugin by running `npm i @fastify/mongodb`

*Usage:*
```javascript
const fastify = require('fastify')()

fastify.register(require('@fastify/mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,

  url: 'mongodb://mongo/mydb'
})

fastify.get('/user/:id', async function (req, reply) {
  // Or this.mongo.client.db('mydb').collection('users')
  const users = this.mongo.db.collection('users')

  // if the id is an ObjectId format, you need to create a new ObjectId
  const id = this.mongo.ObjectId(req.params.id)
  try {
    const user = await users.findOne({ id })
    return user
  } catch (err) {
    return err
  }
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})
```

### [LevelDB](https://github.com/fastify/fastify-leveldb)
Install the plugin by running `npm i @fastify/leveldb`

*Usage:*
```javascript
const fastify = require('fastify')()

fastify.register(
  require('@fastify/leveldb'),
  { name: 'db' }
)

fastify.get('/foo', async function (req, reply) {
  const val = await this.level.db.get(req.query.key)
  return val
})

fastify.post('/foo', async function (req, reply) {
  await this.level.db.put(req.body.key, req.body.value)
  return { status: 'ok' }
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
```

### Writing plugin for a database library
We could write a plugin for a database
library too (e.g. Knex, Prisma, or TypeORM).
We will use [Knex](https://knexjs.org/) in our example.

```javascript
'use strict'

const fp = require('fastify-plugin')
const knex = require('knex')

function knexPlugin(fastify, options, done) {
  if(!fastify.knex) {
    const knex = knex(options)
    fastify.decorate('knex', knex)

    fastify.addHook('onClose', (fastify, done) => {
      if (fastify.knex === knex) {
        fastify.knex.destroy(done)
      }
    })
  }

  done()
}

export default fp(knexPlugin, { name: 'fastify-knex-example' })
```

### Writing a plugin for a database engine

In this example, we will create a basic Fastify MySQL plugin from scratch (it is
a stripped-down example, please use the official plugin in production).

```javascript
const fp = require('fastify-plugin')
const mysql = require('mysql2/promise')

function fastifyMysql(fastify, options, done) {
  const connection = mysql.createConnection(options)

  if (!fastify.mysql) {
    fastify.decorate('mysql', connection)
  }

  fastify.addHook('onClose', (fastify, done) => connection.end().then(done).catch(done))

  done()
}

export default fp(fastifyMysql, { name: 'fastify-mysql-example' })
```

### Migrations

Database schema migrations are an integral part of database management and
development. Migrations provide a repeatable and testable way to modify a
database's schema and prevent data loss.

As stated at the beginning of the guide, Fastify is database agnostic and any
Node.js database migration tool can be used with it. We will give an example of
using [Postgrator](https://www.npmjs.com/package/postgrator) which has support
for Postgres, MySQL, SQL Server and SQLite. For MongoDB migrations, please check
[migrate-mongo](https://www.npmjs.com/package/migrate-mongo).

#### [Postgrator](https://www.npmjs.com/package/postgrator)

Postgrator is Node.js SQL migration tool that uses a directory of SQL scripts to
alter the database schema. Each file in a migrations folder needs to follow the
pattern: ` [version].[action].[optional-description].sql`.

**version:** must be an incrementing number (e.g. `001` or a timestamp).

**action:** should be `do` or `undo`. `do` implements the version, `undo`
reverts it. Think about it like `up` and `down` in other migration tools.

**optional-description** describes which changes migration makes. Although
optional, it should be used for all migrations as it makes it easier for
everyone to know which changes are made in a migration.

In our example, we are going to have a single migration that creates a `users`
table and we are going to use `Postgrator` to run the migration.

> Run `npm i pg postgrator` to install dependencies needed for the
> example.

```sql
// 001.do.create-users-table.sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY NOT NULL,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL
);
```
```javascript
const pg = require('pg')
const Postgrator = require('postgrator')
const path = require('node:path')

async function migrate() {
  const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'example',
    user: 'example',
    password: 'example',
  });

  try {
    await client.connect();

    const postgrator = new Postgrator({
      migrationPattern: path.join(__dirname, '/migrations/*'),
      driver: 'pg',
      database: 'example',
      schemaTable: 'migrations',
      currentSchema: 'public', // Postgres and MS SQL Server only
      execQuery: (query) => client.query(query),
    });

    const result = await postgrator.migrate()

    if (result.length === 0) {
      console.log(
        'No migrations run for schema "public". Already at the latest one.'
      )
    }

    console.log('Migration done.')

    process.exitCode = 0
  } catch(err) {
    console.error(err)
    process.exitCode = 1
  }

  await client.end()
}

migrate()
```
