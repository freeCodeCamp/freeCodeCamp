---
id: 587d7fb1367417b2b2512bf4
title: Chain Middleware to Create a Time Server
challengeType: 2
forumTopicId: 301510
dashedName: chain-middleware-to-create-a-time-server
---

# --description--

Middleware can be mounted at a specific route using `app.METHOD(path, middlewareFunction)`. Middleware can also be chained within a route definition.

Look at the following example:

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```

This approach is useful to split the server operations into smaller units. That leads to a better app structure, and the possibility to reuse code in different places. This approach can also be used to perform some validation on the data. At each point of the middleware stack you can block the execution of the current chain and pass control to functions specifically designed to handle errors. Or you can pass control to the next matching route, to handle special cases. We will see how in the advanced Express section.

# --instructions--

In the route `app.get('/now', ...)` chain a middleware function and the final handler. In the middleware function you should add the current time to the request object in the `req.time` key. You can use `new Date().toString()`. In the handler, respond with a JSON object, taking the structure `{time: req.time}`.

**Note:** The test will not pass if you don’t chain the middleware. If you mount the function somewhere else, the test will fail, even if the output result is correct.

# --hints--

The /now endpoint should have mounted middleware

```js
  const response = await fetch(code + '/_api/chain-middleware-time');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(
    data.stackLength,
    2,
    '"/now" route has no mounted middleware'
  );
```

The `/now` endpoint should return the current time.

```js
  const response = await fetch(code + '/_api/chain-middleware-time');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  var now = new Date();
  assert.isAtMost(
    Math.abs(new Date(data.time) - now),
    20000,
    'the returned time is not between +- 20 secs from now'
  );
```

