require('./index.js');
const express = require('express');
const supertest = require('supertest');
const assert = require('assert');

describe('express-async-errors', () => {
  it('propagates routes errors to error handler', () => {
    const app = express();

    app.get('/test', async () => {
      throw new Error('error');
    });

    app.use((err, req, res, next) => {
      res.status(495);
      res.end();
    });

    return supertest(app)
      .get('/test')
      .expect(495);
  });

  it('propagates regular middleware errors too', () => {
    const app = express();

    app.use(async () => {
      throw new Error('error');
    });

    app.get('/test', async () => {
      throw new Error('error');
    });

    app.use((err, req, res, next) => {
      res.status(495);
      res.end();
    });

    return supertest(app)
      .get('/test')
      .expect(495);
  });

  it('and propagates error middleware errors too', () => {
    const app = express();

    app.get('/test', async () => {
      throw new Error('error');
    });

    app.use(async (err, req, res, next) => {
      throw new Error('error');
    });

    app.use((err, req, res, next) => {
      res.status(495);
      res.end();
    });

    return supertest(app)
      .get('/test')
      .expect(495);
  });

  it('and propagates param middleware errors too', () => {
    const app = express();

    app.param('id', async () => {
      throw new Error('error');
    });

    app.get('/test/:id', async (err, req, next, id) => {
      throw new Error(`error ${id}`);
    });

    app.use((err, req, res, next) => {
      res.status(495);
      res.end();
    });

    return supertest(app)
      .get('/test/12')
      .expect(495);
  });

  it('should preserve the router stack for external routes', () => {
    const app = express();

    function swaggerize(item) {
      function describeRouterRoute(router, metaData) {
        const lastRoute = router.stack[router.stack.length - 1];
        const verb = Object.keys(lastRoute.route.methods)[0];
        metaData.path = lastRoute.route.path;
        metaData.verb = verb;
        lastRoute.route.swaggerData = metaData;
        metaData.described = true;
      }

      function describe(metaData) {
        if (item.stack) {
          describeRouterRoute(item, metaData);
          return item;
        }
        describeRouterRoute(item._router, metaData);
        return item;
      }

      item.describe = describe;
    }

    const router = express.Router();
    swaggerize(router);

    router
      .get('/test', (req, res) => {
        res.status(200).send('Ok');
      })
      .describe({ hasDescription: true });
    app.use('/', router);

    const appRouteStack = app._router.stack;
    const someMiddlewareFunctionStack = appRouteStack[appRouteStack.length - 1];
    const innerStack = someMiddlewareFunctionStack.handle.stack;
    const routeData = innerStack[0].route.swaggerData;
    assert.ok(routeData);
    assert.equal(routeData.verb, 'get');
    assert.equal(routeData.hasDescription, true);
  });
});
