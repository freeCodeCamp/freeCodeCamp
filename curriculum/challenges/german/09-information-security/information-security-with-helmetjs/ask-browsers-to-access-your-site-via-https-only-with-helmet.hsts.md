---
id: 587d8248367417b2b2512c3c
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

HTTP Strict Transport Security (HSTS) ist eine Web-Sicherheitsrichtlinie, die dazu beiträgt, Websites vor Protokoll-Downgrad-Attacken und Cookie-Hijacking zu schützen. Wenn du über HTTPS auf deine Website zugreifen kannst, kannst du den Browser des Benutzers bitten, unsichere HTTP zu vermeiden. By setting the header Strict-Transport-Security, you tell the browsers to use HTTPS for the future requests in a specified amount of time. This will work for the requests coming after the initial request.

# --instructions--

Konfiguriere `helmet.hsts()`, um HTTPS für die nächsten 90 Tage zu verwenden. Übergib das Konfigurations-Objekt `{maxAge: timeInSeconds, force: true}`. You can create a variable `ninetyDaysInSeconds = 90*24*60*60;` to use for the `timeInSeconds`. Replit hat bereits Hsts aktiviert. Um seine Einstellungen zu überschreiben, musst du das Feld "force" auf true im Konfigurations-Objekt setzen. We will intercept and restore the Replit header, after inspecting it for testing.

Hinweis: Die Konfiguration von HTTPS auf einer benutzerdefinierten Website erfordert den Erwerb einer Domain und eines SSL/TLS-Zertifikats.

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

maxAge sollte 7776000 s (90 Tagen) entsprechen

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
