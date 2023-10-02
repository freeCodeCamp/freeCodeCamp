---
id: 587d8248367417b2b2512c3a
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
challengeType: 2
forumTopicId: 301574
dashedName: avoid-inferring-the-response-mime-type-with-helmet-nosniff
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>. Browser können Content- oder MIME-Sniffing verwenden, um den `Content-Type`-Header einer Antwort zu überschreiben, um die Daten zu erraten und unter Verwendung eines impliziten Inhaltstyps zu verarbeiten. While this can be convenient in some scenarios, it can also lead to some dangerous attacks. Diese Middleware setzt den `X-Content-Type-Options`-Header auf `nosniff` und weist den Browser somit an, den angegebenen `Content-Type` nicht zu umgehen.

# --instructions--

Verwende die `helmet.noSniff()`-Methode auf deinem Server.

# --hints--

helmet.noSniff() middleware should be mounted correctly

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'nosniff');
      assert.equal(data.headers['x-content-type-options'], 'nosniff');
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
