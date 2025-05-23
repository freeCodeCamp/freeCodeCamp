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
cd api
pnpm run dev
```

Otherwise, the next section will explain how to set up a local MongoDB instance.

## Connecting to local database

The api uses the ORM Prisma and it needs the MongoDB instance to be a replica set.

### Atlas

If you use MongoDB Atlas, the set is managed for you.

### Local

The simplest way to run a replica set locally is to use the docker-compose file
in /tools. First, make sure to stop any existing MongoDB instances or that they use different ports. (the api connects to port 27017 by default, per the .env file).

```bash
cd tools
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
cd tools
docker compose down -v
docker compose up -d
```

## Login in development/testing

During development and testing, the api exposes the endpoint GET auth/dev-callback. Calling this will log you in as the user with the email `foo@bar.com` by setting the session cookie for that user.

## Generating Exams

```bash
pnpm run generate-exams <ENV_EXAM_ID> <NUMBER_OF_EXAMS_TO_GENERATE>
```
