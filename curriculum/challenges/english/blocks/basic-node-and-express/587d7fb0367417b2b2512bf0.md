---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
challengeType: 2
forumTopicId: 301518
dashedName: serve-static-assets
---

# --description--

An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images).

In Express, you can put in place this functionality using the middleware `express.static(path)`, where the `path` parameter is the absolute path of the folder containing the assets.

If you don’t know what middleware is... don’t worry, we will discuss in detail later. Basically, middleware are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method `app.use(path, middlewareFunction)`. The first `path` argument is optional. If you don’t pass it, the middleware will be executed for all requests.

# --instructions--

Mount the `express.static()` middleware to the path `/public` with `app.use()`. The absolute path to the assets folder is `__dirname + /public`.

Now your app should be able to serve a CSS stylesheet. Note that the `/public/style.css` file is referenced in the `/views/index.html` in the project boilerplate. Your front-page should look a little better now!

# --hints--

Your app should serve asset files from the `/public` directory to the `/public` path

```js
  const response = await fetch(code + '/public/style.css');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.text();
  assert.match(
    data,
    /body\s*\{[^\}]*\}/,
    'Your app does not serve static assets'
  );
```

Your app should not serve files from any other folders except from `/public` directory 

```js
  const response = await fetch(code + '/server.js');
  if (response.ok) {
    const data = await response.text();
    assert.equal(
      response.status + '',
      404 + '',
      'Your app must serve files only from "public" directory'
    );
  } else {
    assert.equal(
      response.status + '',
      404 + '',
      'Your app must serve files only from "public" directory'
    );
  }
```

