# ExpressJS Async Errors

[![Build Status](https://travis-ci.org/davidbanham/express-async-errors.svg?branch=master)](https://travis-ci.org/davidbanham/express-async-errors)

A dead simple ES6 async/await support hack for [ExpressJS](http://expressjs.com)

Shamelessly copied from [express-yields](https://github.com/MadRabbit/express-yields)

This has been lightly reworked to handle async rather than generators.

## Usage

```
npm install express-async-errors --save
```

Then require this script somewhere __before__ you start using it:

Async functions already work fine in Express.

```js
const express = require('express');
require('express-async-errors');
const User = require('./models/user');
const app = express();

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});
```

This library is about what happens when you hit an error.

## A Notice About Calling `next`

As we all know express sends a function called `next` into the middleware, which
then needs to be called with or without error to make it move the request handling
to the next middleware. It still works, but in case of an async function, you
don't need to do that. If you want to pass an error, just throw a normal exception:

```js
app.use(async (req, res) => {
  const user = await User.findByToken(req.get('authorization'));

  if (!user) throw Error("access denied");
});

app.use((err, req, res, next) => {
  if (err.message === 'access denied') {
    res.status(403);
    res.json({ error: err.message });
  }

  next(err);
});
```

## How Does This Work?

This is a very minimalistic and unintrusive hack. Instead of patching all methods
on an express `Router`, it wraps the `Layer#handle` property in one place, leaving
all the rest of the express guts intact.

The idea is that you require the patch once and then use the `'express'` lib the
usual way in the rest of your application.

## License

All code in this repository is released under the terms of the ISC license.
