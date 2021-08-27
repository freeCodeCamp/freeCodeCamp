---
id: 587d7fb5367417b2b2512c02
title: Usare il carattere tilde per utilizzare sempre l'ultima versione patch di una dipendenza
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

Nell'ultima sfida, hai detto a npm di includere solo una versione specifica di un pacchetto. Questo è un modo utile per congelare le tue dipendenze, se hai bisogno di assicurarti che diverse parti del tuo progetto rimangano compatibili tra loro. Ma nella maggior parte dei casi d'uso, non vuoi perdere le correzioni di bug dal momento che spesso includono importanti patch di sicurezza e (si spera) non rompono le cose nel farlo.

Per consentire a una dipendenza npm di aggiornare all'ultima versione PATCH, è possibile prefissare la versione della dipendenza con il carattere tilde (`~`). Ecco un esempio di come consentire gli aggiornamenti di qualsiasi versione 1.3.x.

```json
"package": "~1.3.8"
```

# --instructions--

Nel file package.json, la tua regola corrente per come npm potrebbe aggiornare moment è usare una versione specifica (2.10.2). Ma ora desideriamo consentire l'ultima versione 2.10.x.

Usa il carattere tilde (`~`) per prefissare la versione di moment nelle tue dipendenze, e consentire a npm di aggiornarlo a qualsiasi nuova release PATCH.

**Nota:** I numeri di versione non devono essere modificati.

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

La versione di "moment" dovrebbe corrispondere a "~2.10.2"

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies.moment,
        /^\~2\.10\.2/,
        'Wrong version of "moment". It should be ~2.10.2'
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
