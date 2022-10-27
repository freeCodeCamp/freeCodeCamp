---
id: 587d8248367417b2b2512c3c
title: Chiedere ai browser di accedere al tuo sito solo tramite HTTPS con helmet.hsts()
challengeType: 2
forumTopicId: 301573
dashedName: ask-browsers-to-access-your-site-via-https-only-with-helmet-hsts
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

HTTP Strict Transport Security (HSTS) è una politica di sicurezza web che aiuta a proteggere i siti Web dagli attacchi di downgrade del protocollo e dal dirottamento dei cookie. Se è possibile accedere al sito web tramite HTTPS è possibile chiedere ai browser dell’utente di evitare di utilizzare HTTP non protetto. Impostando l'intestazione Strict-Transport-Security, si dice ai browser di utilizzare HTTPS per le future richieste in un determinato lasso di tempo. Questo funzionerà per le richieste pervenute dopo la richiesta iniziale.

# --instructions--

Configurare `helmet.hsts()` in modo che utilizza HTTPS per i prossimi 90 giorni. Passa l'oggetto di configurazione `{maxAge: timeInSeconds, force: true}`. Puoi creare una variabile `ninetyDaysInSeconds = 90*24*60*60;` da usare per il `timeInSeconds`. Replit ha già hsts abilitato. Per sovrascrivere le sue impostazioni è necessario impostare il campo "force" a true nell'oggetto di configurazione. Intercetteremo e ripristineremo l'intestazione di Replit, dopo averla ispezionata per il test.

Nota: la configurazione di HTTPS su un sito web personalizzato richiede l'acquisizione di un dominio e di un certificato SSL/TLS.

# --hints--

Il middleware helmet.hsts() deve essere montato correttamente

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

maxAge deve essere uguale a 7776000 s (90 giorni)

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
