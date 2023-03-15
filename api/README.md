# Connecting to local database

The api uses the ORM Prisma and it needs the MongoDB instance to be a replica set.

## Atlas

If you use MongoDB Atlas, the set is managed for you.

## Local

The simplest way to run a replica set locally is to use the docker-compose file
in /tools. First disable any running MongoDB instance on your machin, then run
the docker-compose file.

```bash
cd tools
docker compose up -d
```
