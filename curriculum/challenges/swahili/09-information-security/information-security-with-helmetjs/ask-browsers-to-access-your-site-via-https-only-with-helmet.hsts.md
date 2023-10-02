---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

HTTP Strict Transport Security (HSTS) is a web security policy which helps to protect websites against protocol downgrade attacks and cookie hijacking. If your website can be accessed via HTTPS you can ask user’s browsers to avoid using insecure HTTP. By setting the header Strict-Transport-Security, you tell the browsers to use HTTPS for the future requests in a specified amount of time. This will work for the requests coming after the initial request.

# --instructions--

Configure `helmet.hsts()` to use HTTPS for the next 90 days. Pass the config object `{maxAge: timeInSeconds, force: true}`. You can create a variable `ninetyDaysInSeconds = 90*24*60*60;` to use for the `timeInSeconds`. Replit already has hsts enabled. To override its settings you need to set the field "force" to true in the config object. We will intercept and restore the Replit header, after inspecting it for testing.

Note: Configuring HTTPS on a custom website requires the acquisition of a domain, and an SSL/TLS Certificate.

# --hints--

helmet.hsts() middleware should be mounted correctly

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hsts');
      assert.property(data.headers, 'strict-transport-security');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

maxAge should be equal to 7776000 s (90 days)

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.match(
        data.headers['strict-transport-security'],
        /^max-age=7776000;?/
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
