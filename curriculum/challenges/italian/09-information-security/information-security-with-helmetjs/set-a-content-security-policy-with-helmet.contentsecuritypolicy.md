---
id: 587d8249367417b2b2512c3f
title: Impostare una politica di sicurezza dei contenuti con helmet.contentSecurityPolicy()
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Questa sfida mette in evidenza una promettente nuova difesa che può ridurre significativamente il rischio e l'impatto di molti tipi di attacchi nei browser moderni. Impostando e configurando una Content Security Policy (CSP - Politica di Sicurezza dei Contenuti) puoi impedire l'iniezione di cose indesiderate nella tua pagina. Questo proteggerà la tua app da vulnerabilità XSS, tracciamento indesiderato, frame dannosi e molto altro ancora. La CSP funziona definendo un elenco di sorgenti di contenuto attendibili. Puoi configurarlo per ogni tipo di risorsa di cui una pagina web potrebbe aver bisogno (script, fogli di stile, stili di caratteri, frame, media così via…). Ci sono più direttive disponibili, quindi il proprietario di un sito web può avere un controllo granulare. Vedi HTML 5 Rocks, KeyCDN per maggiori dettagli. Purtroppo CSP non è supportata dai vecchi browser.

Per impostazione predefinita, le direttive sono largamente aperte, quindi è importante impostare la direttiva defaultSrc come ripiego. Helmet supporta sia lo stile di denominazione defaultSrc che default-src. La direttiva di riserva si applica alla maggior parte delle direttive non specificate.

# --instructions--

In questo esercizio, utilizza `helmet.contentSecurityPolicy()`. Configuralo aggiungendo un oggetto `directives`. Nell'oggetto, imposta `defaultSrc` a `["'self'"]` (la lista delle sorgenti consentite deve essere in un array), in modo da fidarsi solo dell'indirizzo del tuo sito web per impostazione predefinita. Imposta anche la direttiva `scriptSrc` in modo da consentire che gli script siano scaricati solo dal tuo sito web (`'self'`), e dal dominio `'trusted-cdn.com'`.

Suggerimento: nella parola chiave `'self'`, le virgolette singole fanno parte della parola chiave stessa, quindi deve essere racchiuso in doppie virgolette per funzionare.

# --hints--

Il middleware helmet.contentSecurityPolicy() deve essere montato correttamente

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'csp');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

La configurazione csp non è corretta. defaultSrc dovrebbe essere ["'self'"] e scriptSrc dovrebbe essere ["'self'", 'trusted-cdn.com']

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      var cspHeader = Object.keys(data.headers).filter(function (k) {
        return (
          k === 'content-security-policy' ||
          k === 'x-webkit-csp' ||
          k === 'x-content-security-policy'
        );
      })[0];
      assert.equal(
        data.headers[cspHeader],
        "default-src 'self'; script-src 'self' trusted-cdn.com"
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
