<div align="center">
  <img src="https://github.com/lukeed/polka/raw/master/polka.png" alt="Polka" width="400" height="300" />
</div>

<h1 align="center">Polka</h1>

<div align="center">
  <a href="https://npmjs.org/package/polka">
    <img src="https://badgen.now.sh/npm/v/polka" alt="version" />
  </a>
  <a href="https://travis-ci.org/lukeed/polka">
    <img src="https://badgen.now.sh/travis/lukeed/polka" alt="travis" />
  </a>
  <a href="https://codecov.io/gh/lukeed/polka">
    <img src="https://badgen.now.sh/codecov/c/github/lukeed/polka" alt="codecov" />
  </a>
  <a href="https://npmjs.org/package/polka">
    <img src="https://badgen.now.sh/npm/dm/polka" alt="downloads" />
  </a>
  <a href="https://packagephobia.now.sh/result?p=polka">
    <img src="https://packagephobia.now.sh/badge?p=polka" alt="install size" />
  </a>
</div>

<div align="center">A micro web server so fast, it'll make you dance! :dancers:</div>

<br />

Polka is an extremely minimal, highly performant Express.js alternative. Yes, you're right, Express is _already_ super fast & not _that_ big :thinking: &mdash; but Polka shows that there was (somehow) room for improvement!

Essentially, Polka is just a [native HTTP server](https://nodejs.org/dist/latest-v9.x/docs/api/http.html#http_class_http_server) with added support for routing, middleware, and sub-applications. That's it! :tada:

And, of course, in mandatory bullet-point format:

* 33-50% faster than Express for simple applications
* Middleware support, including Express middleware you already know & love
* Nearly identical application API & route pattern definitions
* ~90 LOC for Polka, 120 including [its router](https://github.com/lukeed/trouter)


## Install

```
$ npm install --save polka
```

## Usage

```js
const polka = require('polka');

function one(req, res, next) {
  req.hello = 'world';
  next();
}

function two(req, res, next) {
  req.foo = '...needs better demo 😔';
  next();
}

polka()
  .use(one, two)
  .get('/users/:id', (req, res) => {
    console.log(`~> Hello, ${req.hello}`);
    res.end(`User: ${req.params.id}`);
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`);
  });
```

## API

Polka extends [Trouter](https://github.com/lukeed/trouter) which means it inherits its API, too!

### polka(options)

Returns an instance of Polka~!

#### options.server
Type: `Server`<br>

A custom, instantiated server that the Polka instance should attach its [`handler`](#handlerreq-res-parsed) to. This is useful if you have initialized a server elsewhere in your application and want Polka to use _it_ instead of creating a new `http.Server`.

Polka _only_ updates the server when [`polka.listen`](#listen) is called. At this time, Polka will create a [`http.Server`](https://nodejs.org/api/http.html#http_class_http_server) if a server was not already provided via `options.server`.

> **Important:** The `server` key will be `undefined` until `polka.listen` is invoked, unless a server was provided.

#### options.onError
Type: `Function`

A catch-all error handler; executed whenever a middleware throws an error. Change this if you don't like default behavior.

Its signature is `(err, req, res, next)`, where `err` is the `String` or `Error` thrown by your middleware.

> **Caution:** Use `next()` to bypass certain errors **at your own risk!** <br>You must be certain that the exception will be handled elsewhere or _can_ be safely ignored. <br>Otherwise your response will never terminate!

#### options.onNoMatch
Type: `Function`

A handler when no route definitions were matched. Change this if you don't like default behavior, which sends a `404` status & `Not found` response.

Its signature is `(req, res)` and requires that you terminate the response.


### use(base, ...fn)

Attach [middleware(s)](#middleware) and/or sub-application(s) to the server. These will execute _before_ your routes' [handlers](#handlers).

**Important:** If a `base` pathname is provided, all functions within the same `use()` block will _only_ execute when the `req.path` matches the `base` path.

#### base
Type: `String`<br>
Default: `undefined`

The base path on which the following middleware(s) or sub-application should be mounted.

#### fn
Type: `Function|Array`

You may pass one or more functions at a time. Each function must have the standardized `(req, res, next)` signature.

You may also pass a sub-application, which _must_ be accompanied by a `base` pathname.

Please see [`Middleware`](#middleware) and [Express' middleware examples](http://expressjs.com/en/4x/api.html#middleware-callback-function-examples) for more info.


### parse(req)

Returns: `Object` or `undefined`

As of `v0.5.0`, this is an alias of the [`@polka/url`](/packages/url) module. For nearly all cases, you'll notice no changes.

But, for whatever reason, you can quickly swap in [`parseurl`](https://github.com/pillarjs/parseurl) again:

```js
const app = polka();
app.parse = require('parseurl');
//=> Done!
```

### listen()

Returns: `Polka`

Boots (or creates) the underlying [`http.Server`](https://nodejs.org/dist/latest-v9.x/docs/api/http.html#http_class_http_server) for the first time. All arguments are passed to [`server.listen`](https://nodejs.org/dist/latest-v9.x/docs/api/net.html#net_server_listen) directly with no changes.

As of `v0.5.0`, this method no longer returns a Promise. Instead, the current Polka instance is returned directly, allowing for chained operations.

```js
// Could not do this before 0.5.0
const { server, handler } = polka().listen();

// Or this!
const app = polka().listen(PORT, onAppStart);

app.use('users', require('./users'))
  .get('/', (req, res) => {
    res.end('Pretty cool!');
  });
```

### handler(req, res, parsed)

The main Polka [`IncomingMessage`](https://nodejs.org/api/http.html#http_class_http_incomingmessage) handler. It receives all requests and tries to match the incoming URL against known routes.

If the `req.url` is not immediately matched, Polka will look for sub-applications or middleware groups matching the `req.url`'s [`base`](#base) path. If any are found, they are appended to the loop, running _after_ any global middleware.

> **Note:** Any middleware defined within a sub-application is run _after_ the main app's (aka, global) middleware and _before_ the sub-application's route handler.

At the end of the loop, if a middleware hasn't yet terminated the response (or thrown an error), the route handler will be executed, if found &mdash; otherwise a `(404) Not found` response is returned, configurable via [`options.onNoMatch`](#optionsonnomatch).

#### req
Type: `IncomingMessage`

#### res
Type: `ServerResponse`

#### parsed
Type: `Object`

Optionally provide a parsed [URL](https://nodejs.org/dist/latest-v9.x/docs/api/url.html#url_class_url) object. Useful if you've already parsed the incoming path. Otherwise, [`app.parse`](#parsereq) (aka [`parseurl`](https://github.com/pillarjs/parseurl)) will run by default.


## Routing

Routes are used to define how an application responds to varying HTTP methods and endpoints.

> If you're coming from Express, there's nothing new here!<br> However, do check out [Comparisons](#comparisons) for some pattern changes.

### Basics

Each route is comprised of a [path pattern](#patterns), a [HTTP method](#methods), and a [handler](#handlers) (aka, what you want to do).

In code, this looks like:

```js
app.METHOD(pattern, handler);
```

wherein:

* `app` is an instance of `polka`
* [`METHOD`](#methods) is any valid HTTP/1.1 method, lowercased
* [`pattern`](#patterns) is a routing pattern (string)
* [`handler`](#handlers) is the function to execute when `pattern` is matched

Also, a single pathname (or `pattern`) may be reused with multiple METHODs.

The following example demonstrates some simple routes.

```js
const app = polka();

app.get('/', (req, res) => {
  res.end('Hello world!');
});

app.get('/users', (req, res) => {
  res.end('Get all users!');
});

app.post('/users', (req, res) => {
  res.end('Create a new User!');
});

app.put('/users/:id', (req, res) => {
  res.end(`Update User with ID of ${req.params.id}`);
});

app.delete('/users/:id', (req, res) => {
  res.end(`CY@ User ${req.params.id}!`);
});
```

### Patterns

Unlike the very popular [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp), Polka uses string comparison to locate route matches. While [faster](https://github.com/lukeed/matchit#benchmarks) & more memory efficient, this does also prevent complex pattern matching.

However, have no fear! :boom: All the basic and most commonly used patterns are supported. You probably only ever used these patterns in the first place. :wink:

> See [Comparisons](#comparisons) for the list of `RegExp`-based patterns that Polka does not support.

The supported pattern types are:

* static (`/users`)
* named parameters (`/users/:id`)
* nested parameters (`/users/:id/books/:title`)
* optional parameters (`/users/:id?/books/:title?`)
* any match / wildcards (`/users/*`)

### Parameters

Any named parameters included within your route [`pattern`](#patterns) will be automatically added to your incoming `req` object. All parameters will be found within `req.params` under the same name they were given.

> **Important:** Your parameter names should be unique, as shared names will overwrite each other!

```js
app.get('/users/:id/books/:title', (req, res) => {
  let { id, title } = req.params;
  res.end(`User: ${id} && Book: ${title}`);
});
```

```sh
$ curl /users/123/books/Narnia
#=> User: 123 && Book: Narnia
```

### Methods

Any valid HTTP/1.1 method is supported! However, only the most common methods are used throughout this documentation for demo purposes.

> **Note:** For a full list of valid METHODs, please see [this list](https://github.com/lukeed/trouter#method).

### Handlers

Request handlers accept the incoming [`IncomingMessage`](https://nodejs.org/api/http.html#http_class_http_incomingmessage) and the formulating [`ServerResponse`](https://nodejs.org/dist/latest-v9.x/docs/api/http.html#http_class_http_serverresponse).

Every route definition must contain a valid `handler` function, or else an error will be thrown at runtime.

> **Important:** You must _always_ terminate a `ServerResponse`!

It's a **very good** practice to _always_ terminate your response ([`res.end`](https://nodejs.org/api/http.html#http_request_end_data_encoding_callback)) inside a handler, even if you expect a [middleware](#middleware) to do it for you. In the event a response is/was not terminated, the server will hang & eventually exit with a `TIMEOUT` error.

> **Note:** This is a native `http` behavior.

#### Async Handlers

If using Node 7.4 or later, you may leverage native `async` and `await` syntax! :heart_eyes_cat:

No special preparation is needed &mdash; simply add the appropriate keywords.

```js
const app = polka();

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function authenticate(req, res, next) {
  let token = req.headers['authorization'];
  if (!token) return (res.statusCode=401,res.end('No token!'));
  req.user = await Users.find(token); // <== fake
  next(); // done, woot!
}

app
  .use(authenticate)
  .get('/', async (req, res) => {
    // log middleware's findings
    console.log('~> current user', req.user);
    // force sleep, because we can~!
    await sleep(500);
    // send greeting
    res.end(`Hello, ${req.user.name}`);
  });
```


## Middleware

Middleware are functions that run in between (hence "middle") receiving the request & executing your route's [`handler`](#handlers) response.

> Coming from Express? Use any middleware you already know & love! :tada:

The middleware signature receives the request (`req`), the response (`res`), and a callback (`next`).

These can apply mutations to the `req` and `res` objects, and unlike Express, have access to `req.params`, `req.path`, `req.search`, and `req.query`!

Most importantly, a middleware ***must*** either call `next()` or terminate the response (`res.end`). Failure to do this will result in a never-ending response, which will eventually crash the `http.Server`.

```js
// Log every request
function logger(req, res, next) {
  console.log(`~> Received ${req.method} on ${req.url}`);
  next(); // move on
}

function authorize(req, res, next) {
  // mutate req; available later
  req.token = req.headers['authorization'];
  req.token ? next() : ((res.statusCode=401) && res.end('No token!'));
}

polka().use(logger, authorize).get('*', (req, res) => {
  console.log(`~> user token: ${req.token}`);
  res.end('Hello, valid user');
});
```

```sh
$ curl /
# ~> Received GET on /
#=> (401) No token!

$ curl -H "authorization: secret" /foobar
# ~> Received GET on /foobar
# ~> user token: secret
#=> (200) Hello, valid user
```

### Middleware Sequence

In Polka, middleware functions are organized into tiers.

Unlike Express, Polka middleware are tiered into "global", "filtered", and "route-specific" groups.

* Global middleware are defined via `.use('/', ...fn)` or `.use(...fn)`, which are synonymous.<br>_Because_ every request's `pathname` begins with a `/`, this tier is always triggered.

* Sub-group or "filtered" middleware are defined with a base `pathname` that's more specific than `'/'`. For example, defining `.use('/users', ...fn)` will run on any `/users/**/*` request.<br>These functions will execute _after_ "global" middleware but before the route-specific handler.

* Route handlers match specific paths and execute last in the chain. They must also match the `method` action.

Once the chain of middleware handler(s) has been composed, Polka will iterate through them sequentially until all functions have run, until a chain member has terminated the response early, or until a chain member has thrown an error.

Contrast this with Express, which does not tier your middleware and instead iterates through your entire application in the sequence that you composed it.

```js
// Express
express()
  .get('/', get)
  .use(foo)
  .get('/users/123', user)
  .use('/users', users)

// Polka
Polka()
  .get('/', get)
  .use(foo)
  .get('/users/123', user)
  .use('/users', users)
```

```sh
$ curl {APP}/
# Express :: [get]
# Polka   :: [foo, get]

$ curl {APP}/users/123
# Express :: [foo, user]
# Polka   :: [foo, users, user]
```


### Middleware Errors

If an error arises within a middleware, the loop will be exited. This means that no other middleware will execute & neither will the route handler.

Similarly, regardless of `statusCode`, an early response termination will also exit the loop & prevent the route handler from running.

There are three ways to "throw" an error from within a middleware function.

> **Hint:** None of them use `throw` :joy_cat:

1. **Pass any string to `next()`**

    This will exit the loop & send a `500` status code, with your error string as the response body.

    ```js
    polka()
      .use((req, res, next) => next('💩'))
      .get('*', (req, res) => res.end('wont run'));
    ```

    ```sh
    $ curl /
    #=> (500) 💩
    ```

2. **Pass an `Error` to `next()`**

    This is similar to the above option, but gives you a window in changing the `statusCode` to something other than the `500` default.

    ```js
    function oopsies(req, res, next) {
      let err = new Error('Try again');
      err.code = 422;
      next(err);
    }
    ```

    ```sh
    $ curl /
    #=> (422) Try again
    ```

3. **Terminate the response early**

    Once the response has been ended, there's no reason to continue the loop!

    This approach is the most versatile as it allows to control every aspect of the outgoing `res`.

    ```js
    function oopsies(req, res, next) {
      if (true) {
        // something bad happened~
        res.writeHead(400, {
          'Content-Type': 'application/json',
          'X-Error-Code': 'Please dont do this IRL'
        });
        let json = JSON.stringify({ error:'Missing CSRF token' });
        res.end(json);
      } else {
        next(); // never called FYI
      }
    }
    ```

    ```sh
    $ curl /
    #=> (400) {"error":"Missing CSRF token"}
    ```


## Benchmarks

Quick comparison between various frameworks using [`wrk`](https://github.com/wg/wrk) on `Node v10.4.0`.<br> Results are taken with the following command, after one warm-up run:

```
$ wrk -t4 -c4 -d10s http://localhost:3000/users/123
```

Additional benchmarks between Polka and Express (using various Node versions) can be [found here](/bench).

> **Important:** Time is mostly spent in _your application code_ rather than Express or Polka code!<br> Switching from Express to Polka will (likely) not show such drastic performance gains.

```
Native
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     1.96ms  119.06us   5.33ms   92.57%
        Req/Sec    12.78k   287.46    13.13k    90.00%
      508694 requests in 10.00s, 50.45MB read
    Requests/sec:  50867.22
    Transfer/sec:      5.05MB

Polka
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     1.98ms  119.26us   4.45ms   92.87%
        Req/Sec    12.68k   287.74    13.05k    94.06%
      509817 requests in 10.10s, 50.56MB read
    Requests/sec:  50475.67
    Transfer/sec:      5.01MB

Rayo
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     2.02ms  116.55us   6.66ms   92.55%
        Req/Sec    12.43k   262.32    12.81k    91.58%
      499795 requests in 10.10s, 49.57MB read
    Requests/sec:  49481.55
    Transfer/sec:      4.91MB

Fastify
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     2.10ms  138.04us   5.46ms   91.50%
        Req/Sec    11.96k   414.14    15.82k    95.04%
      479518 requests in 10.10s, 66.31MB read
    Requests/sec:  47476.75
    Transfer/sec:      6.57MB

Koa
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     2.95ms  247.10us   6.91ms   72.18%
        Req/Sec     8.52k   277.12     9.09k    70.30%
      342518 requests in 10.10s, 47.36MB read
    Requests/sec:  33909.82
    Transfer/sec:      4.69MB

Express
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     4.91ms  484.52us  10.65ms   89.71%
        Req/Sec     5.11k   350.75     9.69k    98.51%
      204520 requests in 10.10s, 40.57MB read
    Requests/sec:  20249.80
    Transfer/sec:      4.02MB
```


## Comparisons

Polka's API aims to be _very_ similar to Express since most Node.js developers are already familiar with it. If you know Express, you already know Polka! :dancer:

There are, however, a few main differences. Polka does not support or offer:

1) **Polka uses a tiered middleware system.**

    Express maintains the sequence of your route & middleware declarations during its runtime, which can pose a problem when composing sub-applications. Typically, this forces you to duplicate groups of logic.

    Please see [Middleware Sequence](#middleware-sequence) for an example and additional details.

2) **Any built-in view/rendering engines.**

    Most templating engines can be incorporated into middleware functions or used directly within a route handler.

3) **The ability to `throw` from within middleware.**

    However, all other forms of middleware-errors are supported. (See [Middleware Errors](#middleware-errors).)

    ```js
    function middleware(res, res, next) {
      // pass an error message to next()
      next('uh oh');

      // pass an Error to next()
      next(new Error('🙀'));

      // send an early, customized error response
      res.statusCode = 401;
      res.end('Who are you?');
    }
    ```

4) **Express-like response helpers... yet! (#14)**

    Express has a nice set of [response helpers](http://expressjs.com/en/4x/api.html#res.append). While Polka relies on the [native Node.js response methods](https://nodejs.org/dist/latest-v9.x/docs/api/http.html#http_class_http_serverresponse), it would be very easy/possible to attach a global middleware that contained a similar set of helpers. (_TODO_)

5) **`RegExp`-based route patterns.**

    Polka's router uses string comparison to match paths against patterns. It's a lot quicker & more efficient.

    The following routing patterns **are not** supported:

    ```js
    app.get('/ab?cd', _ => {});
    app.get('/ab+cd', _ => {});
    app.get('/ab*cd', _ => {});
    app.get('/ab(cd)?e', _ => {});
    app.get(/a/, _ => {});
    app.get(/.*fly$/, _ => {});
    ```

    The following routing patterns **are** supported:

    ```js
    app.get('/users', _ => {});
    app.get('/users/:id', _ => {});
    app.get('/users/:id?', _ => {});
    app.get('/users/:id/books/:title', _ => {});
    app.get('/users/*', _ => {});
    ```

6) **Polka instances are not (directly) the request handler.**

    Most packages in the Express ecosystem expect you to pass your `app` directly into the package. This is because `express()` returns a middleware signature directly.

    In the Polka-sphere, this functionality lives in your application's [`handler`](#handlerreq-res-parsed) instead.

    Here's an example with [`supertest`](https://github.com/visionmedia/supertest), a popular testing utility for Express apps.

    ```js
    const request = require('supertest');
    const send = require('@polka/send-type');

    const express = require('express')();
    const polka = require('polka')();

    express.get('/user', (req, res) => {
      res.status(200).json({ name: 'john' });
    });

    polka.get('/user', (req, res) => {
      send(res, 200, { name: 'john' });
    });

    function isExpected(app) {
      request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(200);
    }

    // Express: Pass in the entire application directly
    isExpected(express);

    // Polka: Pass in the application `handler` instead
    isExpected(polka.handler);
    ```


## License

MIT © [Luke Edwards](https://lukeed.com)
