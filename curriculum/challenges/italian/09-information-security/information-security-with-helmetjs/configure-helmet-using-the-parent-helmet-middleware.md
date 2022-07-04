---
id: 587d8249367417b2b2512c40
title: Configurare Helmet usando il middleware 'genitore' helmet()
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonato da <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`app.use(helmet())` includerà automaticamente tutto il middleware introdotto sopra, tranne `noCache()`, e `contentSecurityPolicy()`, ma questi possono essere abilitati se necessario. È inoltre possibile disabilitare o configurare qualsiasi altro middleware singolarmente, utilizzando un oggetto di configurazione.

**Esempio:**

```js
app.use(helmet({
  frameguard: {         // configure
    action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // disable
}))
```

Abbiamo introdotto ogni middleware separatamente per scopi didattici e per facilità di test. L'utilizzo del middleware 'genitore' `helmet()` è facile da implementare in un progetto reale.

# --hints--

nessun test - è una sfida descrittiva

```js
assert(true);
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
