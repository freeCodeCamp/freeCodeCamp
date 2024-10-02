# Working on the new api

## Connecting to local database

The api uses the ORM Prisma and it needs the MongoDB instance to be a replica set.

### Atlas

If you use MongoDB Atlas, the set is managed for you.

### Local

The simplest way to run a replica set locally is to use the docker-compose file
in /tools.

```bash
cd tools
docker compose up -d
```

The new db will be empty, so you can run the seed script to populate it.

```bash
cd ../.. # back to the root of the repo
pnpm seed
```

## Login in development/testing

During development and testing, the api exposes the endpoint GET auth/dev-callback. Calling this will log you in as the user with the email `foo@bar.com` by setting the session cookie for that user.

## Generating Exams

```bash
pnpm run generate-exams <ENV_EXAM_ID> <NUMBER_OF_EXAMS_TO_GENERATE>
```
