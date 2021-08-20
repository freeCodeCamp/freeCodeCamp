---
id: 587d7fb5367417b2b2512c01
title: Gestire le dipendenze npm comprendendo il versioning semantico
challengeType: 2
forumTopicId: 301529
dashedName: manage-npm-dependencies-by-understanding-semantic-versioning
---

# --description--

Il campo `versions` nella sezione delle dipendenze del tuo pacchetto npm segue quello che si chiama Versioning Semantico (SemVer), uno standard di settore per la versione del software al fine di rendere più facile la gestione delle dipendenze. Le librerie, i framework o altri strumenti pubblicati su npm dovrebbero utilizzare SemVer per comunicare chiaramente che tipo di cambiamenti i progetti possono aspettarsi se essi vengono aggiornati.

Conoscere SemVer può essere utile quando si sviluppa un software che utilizza dipendenze esterne (cosa che avviene quasi sempre). Un giorno, la tua comprensione di questi numeri ti salverà dall'introduzione accidentale di cambiamenti che potrebbero bloccare il tuo progetto senza capire perché le cose che hanno funzionato fino a ieri improvvisamente non funzionano più oggi. Questo è come il Semantic Versioning funziona secondo il sito ufficiale:

```json
"package": "MAJOR.MINOR.PATCH"
```

La versione MAJOR dovrebbe essere incrementata quando si effettuano modifiche API incompatibili. La versione MINOR dovrebbe essere incrementata quando si aggiungono funzionalità in modo retrocompatibile. La versione PATCH dovrebbe essere incrementata quando si fanno correzioni di bug retrocompatibili. Ciò significa che le PATCHes sono correzioni di bug e le MINOR aggiungono nuove funzionalità, ma nessuna delle due rischia di rompere quello che funzionava prima. Infine, le MAJORs aggiungono modifiche che non funzioneranno con le versioni precedenti.

# --instructions--

Nella sezione dependencies del tuo file package.json, cambia la `version` di moment per farlo corrispondere alla versione MAJOR 2, alla versione MINOR 10 e alla versione PATCH 2

# --hints--

"dependencies" dovrebbe includere "moment"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'moment',
        '"dependencies" does not include "moment"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

La versione di "moment" dovrebbe essere "2.10.2"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.equal(
        packJson.dependencies.moment,
        '2.10.2',
        'Wrong version of "moment". It should be 2.10.2'
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
