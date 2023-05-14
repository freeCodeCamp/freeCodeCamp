# Installation

based on https://contribute.freecodecamp.org/#/how-to-add-cypress-tests?id=how-to-add-cypress-tests
(need to install nodejs first)

## install pnpm

```sh
npm i -g pnpm
```

## install mongodb

follow the guide https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#import-the-public-key-used-by-the-package-management-system

## run mongodb

```sh
mongod &
```

## run pnpm install

```sh
cp sample.env .env
pnpm install && pnpm run create:config
```

## run pnpm seed and start the server

```sh
pnpm run seed
pnpm run develop
```

## run all tests

```sh
pnpm run e2e:dev:run
```

## or you can run the development server and run tests in another terminal

```sh
pnpm run develop
pnpm run cypress:dev:run
```
