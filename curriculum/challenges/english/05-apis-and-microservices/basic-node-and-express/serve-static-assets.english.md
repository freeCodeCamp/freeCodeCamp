---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
challengeType: 2
isHidden: false
forumTopicId: 301518
---

## Description
<section id='description'>
An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images). In Express, you can put in place this functionality using the middleware <code>express.static(path)</code>, where the <code>path</code> parameter is the absolute path of the folder containing the assets. If you don’t know what middleware is... don’t worry, we will discuss in detail later. Basically, middleware are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method <code>app.use(path, middlewareFunction)</code>. The first <code>path</code> argument is optional. If you don’t pass it, the middleware will be executed for all requests.
</section>

## Instructions
<section id='instructions'>
Mount the <code>express.static()</code> middleware for all requests with <code>app.use()</code>. The absolute path to the assets folder is <code>__dirname + /public</code>.
Now your app should be able to serve a CSS stylesheet. From outside, the public folder will appear mounted to the root directory. Your front-page should look a little better now!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your app should serve asset files from the <code>/public</code> directory
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/style.css'').then(data => { assert.match(data, /body\s*\{[^\}]*\}/, ''Your app does not serve static assets''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
