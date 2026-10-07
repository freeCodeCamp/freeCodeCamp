# Bundlers test stack

In some cases, developers bundle their apps for several targets such as serverless applications.
Even if it's not recommended by Fastify team; we need to ensure we do not break the build process.
Please note this might result in features behaving differently, like the version handling check for plugins.

## Test bundlers

The bundler test stack has been defined separately from the rest of the Unit testing stack because it's not a
part of the fastify lib itself. Note that the tests run in CI only on NodeJs LTS version.
Developers do not need to install every bundler to run unit tests.

To run the bundler tests you will need to install the repository dependencies followed by the bundler
stack dependencies. See:

```bash
  # path: root of repository /fastify
  npm i
  cd test/bundler/webpack
  npm i
  npm run test # test command runs bundle before of starting the test
```

## Bundler test development

To not break the fastify unit testing stack please name test files like this `*-test.js` and not `*.test.js`,
otherwise it will be targeted by the regular expression used for unit tests for fastify.
Tests need to ensure the build process works and the fastify application can be run,
no need to go in deep testing unless an issue is raised.
