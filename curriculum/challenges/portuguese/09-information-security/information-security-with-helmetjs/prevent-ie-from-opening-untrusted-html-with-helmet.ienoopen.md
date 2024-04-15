---
id: 587d8248367417b2b2512c3b
title: Impedir que o IE abra HTML não confiável com helmet.ieNoOpen()
challengeType: 2
forumTopicId: 301584
dashedName: prevent-ie-from-opening-untrusted-html-with-helmet-ienoopen
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Alguns aplicativos da web servirão HTML não confiável para download. Algumas versões do Internet Explorer abrem esses arquivos HTML no contexto do seu site. Isto significa que uma página HTML não confiável pode começar a fazer coisas ruins no contexto de suas páginas. Este middleware define o cabeçalho X-Download-Options como noopen. This will prevent IE users from executing downloads in the trusted site's context.

# --instructions--

Use o método `helmet.ieNoOpen()` no seu servidor.

# --hints--

O middleware helmet.ieNoOpen() deve ser montado corretamente

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
