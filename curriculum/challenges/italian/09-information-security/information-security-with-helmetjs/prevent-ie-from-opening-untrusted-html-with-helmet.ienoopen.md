---
id: 587d8248367417b2b2512c3b
title: Impedire a IE di aprire HTML non attendibile con helmet.ieNoOpen()
challengeType: 2
forumTopicId: 301584
dashedName: prevent-ie-from-opening-untrusted-html-with-helmet-ienoopen
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Alcune applicazioni web serviranno HTML non attendibile per il download. Alcune versioni di Internet Explorer per impostazione predefinita aprono quei file HTML nel contesto del tuo sito. Ciò significa che una pagina HTML non attendibile potrebbe iniziare a fare cose sbagliate nel contesto delle tue pagine. Questo middleware imposta l'intestazione delle Opzioni di X-D a noopen. This will prevent IE users from executing downloads in the trusted site's context.

# --instructions--

Usa il metodo `helmet.ieNoOpen()` sul tuo server.

# --hints--

Il middleware helmet.ieNoOpen() deve essere montato correttamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'ienoopen');
      assert.equal(data.headers['x-download-options'], 'noopen');
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
