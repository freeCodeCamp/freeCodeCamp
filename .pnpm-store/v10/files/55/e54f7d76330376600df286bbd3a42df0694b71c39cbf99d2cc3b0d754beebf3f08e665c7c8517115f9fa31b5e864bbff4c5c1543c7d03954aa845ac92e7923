# trouter [![Build Status](https://travis-ci.org/lukeed/trouter.svg?branch=master)](https://travis-ci.org/lukeed/trouter)

> 🐟 A fast, small-but-mighty, familiar ~fish~ router


## Install

```
$ npm install --save trouter
```


## Usage

```js
const Trouter = require('trouter');
const router = new Trouter();

// Define all routes
router
  .get('/users', _ => {
    console.log('> Getting all users');
  })
  .add('POST', '/users', _ => {
    console.log('~> Adding a user');
  })
  .get('/users/:id', val => {
    console.log('~> Getting user with ID:', val);
  });

// Find a route definition
let obj = router.find('GET', '/users/123');
//=> obj.params ~> { id:123 }
//=> obj.handlers ~> Array<Function>

// Execute the handlers, passing value
obj.handlers.forEach(fn => {
  fn(obj.params.id);
});
//=> ~> Getting user with ID: 123

// Returns `false` if no match
router.find('DELETE', '/foo');
//=> false
```

## API

### Trouter()

Initializes a new `Trouter` instance. Currently accepts no options.

### trouter.add(method, pattern, ...handlers)
Returns: `self`

Stores a `method` + `pattern` pairing internally, along with its handler(s).

#### method
Type: `String`

Any lowercased, [valid HTTP/1.1 verb](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods#Specifications) &mdash; choose from one of the following:

```
GET  HEAD  PATCH  OPTIONS  CONNECT  DELETE  TRACE  POST  PUT
```

#### pattern
Type: `String`

Unlike most router libraries, Trouter does not use `RegExp` to determine pathname matches. Instead, it uses string comparison which is much faster, but also limits the pattern complexity.

The supported pattern types are:

* static (`/users`)
* named parameters (`/users/:id`)
* nested parameters (`/users/:id/books/:title`)
* optional parameters (`/users/:id?/books/:title?`)
* any match / wildcards (`/users/*`)

#### handlers
Type: `Array|Function`

The function(s) that should be tied to this `pattern`.

Because this is a [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), whatever you pass will _always_ be cast to an Array.

> **Important:** Trouter does not care what your function signature looks like!<br> You are not bound to the `(req, res)` standard, or even passing a `Function` at all!

### trouter.all(pattern, ...handlers)
Returns: `self`

This is an alias for [`trouter.add('*', pattern, ...handlers)`](#trouteraddmethod-pattern-handlers), matching **all** HTTP methods.

> **Important:** If the `pattern` used within `all()` exists for a specific `method` as well, then **only** the method-specific entry will be returned!

```js
router.post('/hello', () => 'FROM POST');
router.add('GET', '/hello', () => 'FROM GET');
router.all('/hello', () => 'FROM ALL');

let { handlers } = router.find('GET', '/hello');
handlers[0]();
//=> 'FROM GET'

router.find('POST', '/hello').handlers[0]();
//=> 'FROM POST'

router.find('DELETE', '/hello').handlers[0]();
//=> 'FROM ALL'

router.find('PUT', '/hello').handlers[0]();
//=> 'FROM ALL'
```

### trouter.METHOD(pattern, ...handlers)

This is an alias for [`trouter.add(METHOD, pattern, ...handlers)`](#trouteraddmethod-pattern-handlers), where `METHOD` is any lowercased HTTP verb.

```js
const noop = _ => {}:
const app = new Trouter();

app.get('/users/:id', noop);
app.post('/users', noop);
app.patch('/users/:id', noop);

// less common methods too
app.trace('/foo', noop);
app.connect('/bar', noop);
```

### trouter.find(method, url)
Returns: `Object|Boolean`<br>
Searches within current instance for a `method` + `pattern` pairing that matches the current `method` + `url`.

This method will return `false` if no match is found. Otherwise it returns an Object with `params` and `handlers` keys.

* `params` &mdash; Object whose keys are the named parameters of your route pattern.
* `handlers` &mdash; Array containing the `...handlers` provided to [`.add()`](#trouteraddmethod-pattern-handlers) or [`.METHOD()`](#troutermethodpattern-handlers)


#### method
Type: `String`

Any valid HTTP method name.

#### url
Type: `String`

The URL used to match against pattern definitions. This is typically `req.url`.


## Benchmarks

> Run on Node v8.9.0

```
GET / ON /
  --> 9,548,621 ops/sec ±0.65% (96 runs sampled)

POST /users ON /users
  --> 2,324,166 ops/sec ±0.52% (93 runs sampled)

GET /users/123 ON /users/:id
  --> 1,704,811 ops/sec ±0.50% (95 runs sampled)

PUT /users/123/books ON /users/:id/books/:title?
  --> 1,396,875 ops/sec ±0.14% (94 runs sampled)

DELETE /users/123/books/foo ON /users/:id/books/:title
  --> 1,266,708 ops/sec ±0.59% (95 runs sampled)

HEAD /hello on /hello -- via all()
  --> 1,641,558 ops/sec ±0.14% (96 runs sampled)
```

## License

MIT © [Luke Edwards](https://lukeed.com)
