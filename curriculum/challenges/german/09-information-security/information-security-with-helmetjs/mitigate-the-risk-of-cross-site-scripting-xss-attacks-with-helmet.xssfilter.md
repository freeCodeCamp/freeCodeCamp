---
id: 587d8247367417b2b2512c39
title: >-
  Minderung des Risikos von Cross Site Scripting (XSS)-Angriffen mit helmet.xssFilter()
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Cross-site scripting (XSS) is a frequent type of attack where malicious scripts are injected into vulnerable pages, with the purpose of stealing sensitive data like session cookies, or passwords.

The basic rule to lower the risk of an XSS attack is simple: "Never trust user's input". As a developer you should always sanitize all the input coming from the outside. This includes data coming from forms, GET query urls, and even from POST bodies. Sanitizing means that you should find and encode the characters that may be dangerous e.g. &lt;, >.

Moderne Browser können helfen, das Risiko zu verringern, indem sie bessere Software-Strategien anwenden. Oft sind diese über HTTP-Header konfigurierbar.

Der X-XSS-Protection HTTP-Header ist ein grundlegender Schutz. Der Browser erkennt ein potenziell eingeschleustes Skript mithilfe eines heuristischen Filters. Wenn die Kopfzeile aktiviert ist, ändert der Browser den Skriptcode und neutralisiert ihn. It still has limited support.

# --instructions--

Verwende `helmet.xssFilter()`, um die an deinen Server gesendeten Eingaben zu bereinigen.

# --hints--

helmet.xssFilter() middleware should be mounted correctly

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'xXssProtection');
      assert.property(data.headers, 'x-xss-protection');
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
