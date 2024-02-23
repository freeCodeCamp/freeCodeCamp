---
id: 587d8247367417b2b2512c39
title: >-
  Mitigare il rischio di attacchi Cross-Site Scripting (XSS) con helmet.xssFilter()
challengeType: 2
forumTopicId: 301583
dashedName: mitigate-the-risk-of-cross-site-scripting-xss-attacks-with-helmet-xssfilter
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Il cross-site scripting (XSS) è un tipo di attacco frequente in cui script dannosi vengono iniettati in pagine vulnerabili, con lo scopo di rubare dati sensibili come cookie di sessione, o password.

The basic rule to lower the risk of an XSS attack is simple: "Never trust user's input". Come sviluppatore dovresti sempre sanificare tutti gli input provenienti dall'esterno. Questo include i dati provenienti da moduli, URL di query GET e persino dal corpo delle richieste POST. Sanificare significa che si dovrebbe trovare e codificare i caratteri che possono essere pericolosi, ad esempio &lt;, >.

I browser moderni possono aiutare a mitigare il rischio adottando strategie software migliori. Spesso sono configurabili tramite intestazioni http.

L'intestazione X-XSS-Protection HTTP è una protezione di base. Il browser rileva un potenziale script iniettato utilizzando un filtro euristico. Se l'intestazione è abilitata, il browser cambia il codice di script, neutralizzandolo. Ha ancora un supporto limitato.

# --instructions--

Usa `helmet.xssFilter()` per sanificare l'input inviato al tuo server.

# --hints--

Il middleware helmet.xssFilter() deve essere montato correttamente

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
