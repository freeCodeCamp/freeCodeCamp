# Working on the new api

## Initial setup

To run the api in isolation (without setting up the client), first go to the root of the repo and run the following commands:

```bash
cp sample.env .env # if you haven't already created .env
pnpm install
pnpm predevelop
```

If you have a MongoDB replica set running on port 27017, you can start the api with:

```bash
pnpm run develop:api
```

otherwise, the next section will explain how to set up a local MongoDB instance.

## Connecting to local database

The api uses the ORM Prisma and it needs the MongoDB instance to be a replica set. There are two easy ways to set up a MongoDB replica set, either using MongoDB Atlas or running it locally with Docker. Both are described below.

### Atlas

If you use MongoDB Atlas, the set is managed for you.

### Local

To start a local MongoDB replica set first make sure to stop any existing MongoDB instances or that they use different ports (the api connects to port 27017 by default, per the .env file). Then you can use the provided Docker Compose file to everything up.

```bash
cd api/tools
docker compose up -d
```

The new db will be empty, so you can run the seed script to populate it.

```bash
cd ../.. # back to the root of the repo
pnpm seed
```

### Troubleshooting

If you have any issues connecting to the database (e.g. MongoServerError: not primary), try removing the volume and recreating the containers.

```bash
cd api/tools
docker compose down -v
docker compose up -d
```

## Login in development/testing

During development and testing, the api exposes the endpoint GET auth/dev-callback. Calling this will log you in as the user with the email `foo@bar.com` by setting the session cookie for that user.

## Generating Exams

```bash
pnpm run exam-env:generate <ENV_EXAM_ID> <NUMBER_OF_EXAMS_TO_GENERATE>
```
