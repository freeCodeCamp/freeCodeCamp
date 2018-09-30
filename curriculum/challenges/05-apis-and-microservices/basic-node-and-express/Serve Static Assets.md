---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
challengeType: 2
---

## Description
<section id='description'>
An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images). In Express you can put in place this functionality using the middleware <code>express.static(path)</code>, where the parameter is the absolute path of the folder containing the assets. If you don’t know what a middleware is, don’t worry. We’ll discuss about it later in details. Basically middlewares are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method <code>app.use(path, middlewareFunction)</code>. The first path argument is optional. If you don’t pass it, the middleware will be executed for all the requests.
Mount the <code>express.static()</code> middleware for all the requests with <code>app.use()</code>. The absolute path to the assets folder is <code>__dirname + /public</code>.
Now your app should be able to serve a CSS stylesheet. From outside the public folder will appear mounted to the root directory. Your front-page should look a little better now!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: Your app should serve asset files from the <code>/public</code> directory
  testString: 'getUserInput => $.get(getUserInput("url") + "/style.css").then(data => { assert.match(data, /body\s*\{[^\}]*\}/, "Your app does not serve static assets"); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
