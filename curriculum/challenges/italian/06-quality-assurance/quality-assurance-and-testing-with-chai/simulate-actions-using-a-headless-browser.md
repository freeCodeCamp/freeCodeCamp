---
id: 587d824f367417b2b2512c5c
title: Simulare azioni usando un headless browser
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), o clonato da [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

Nelle prossime sfide simuleremo l'interazione umana con una pagina utilizzando un dispositivo chiamato 'Headless Browser' (browser senza testa).

Un headless browser è un browser web senza interfaccia utente grafica. Questo tipo di strumento è particolarmente utile per testare le pagine web, poiché è in grado di renderizzare e capire HTML, CSS, e JavaScript proprio come farebbe un browser.

Per queste sfide stiamo usando Zombie.JS. È un browser leggero che è totalmente basato su JS, che non richiede binari aggiuntivi da installare. Questa funzione lo rende utilizzabile in un ambiente come Replit. Ci sono molte altre opzioni (più potenti).

Mocha ti consente di preparare il terreno eseguendo del codice prima dei test effettivi. Questo può essere utile, ad esempio, per creare elementi nel database, che saranno utilizzati nei test successivi.

Con un headless browser, prima del test effettivo, abbiamo bisogno di **visitare** la pagina che stiamo per controllare. L'hook' `suiteSetup` viene eseguito solo una volta all'avvio della suite. Altri tipi di hook possono essere esuiti prima di ogni test, dopo ogni test, o alla fine della suite. Vedi la documentazione di Mocha per maggiori informazioni.

# --instructions--

All'interno di `tests/2_functional-tests.js`, immediatamente dopo la dichiarazione `Browser`, aggiungi l'URL del tuo progetto alla proprietà `site` della variabile:

```js
Browser.site = 'https://sincere-cone.gomix.me'; // Your URL here
```

Se stai testando su un ambiente locale, sostituisci la riga precedente con

```js
Browser.localhost('example.com', process.env.PORT || 3000);
```

All'interno di `tests/2_functional-tests.js`, al livello root della suite `'Functional Tests with Zombie.js'`, crea una nuova istanza dell'oggetto `Browser` con il seguente codice:

```js
const browser = new Browser();
```

Quindi, utilizza l'hook `suiteSetup` per indirizzare il `browser` al percorso `/` con il seguente codice:

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

Tutti i test dovrebbero essere superati.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional').then(
    (data) => {
      data.slice(0, 4).forEach((test) => {
        assert.equal(test.state, 'passed');
      })
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
