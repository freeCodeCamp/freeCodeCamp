---
id: 587d7fb5367417b2b2512c02
title: Usare il carattere tilde per utilizzare sempre l'ultima versione patch di una dipendenza
challengeType: 2
forumTopicId: 301532
dashedName: use-the-tilde-character-to-always-use-the-latest-patch-version-of-a-dependency
---

# --description--

Nell'ultima sfida, hai detto a npm di includere solo una versione specifica di un pacchetto. Questo è un modo utile per congelare le tue dipendenze, se hai bisogno di assicurarti che diverse parti del tuo progetto rimangano compatibili tra loro. Ma nella maggior parte dei casi d'uso, non vuoi perdere le correzioni di bug dal momento che spesso includono importanti patch di sicurezza e (si spera) non rompono le cose nel farlo.

Per consentire a una dipendenza npm di aggiornare all'ultima versione PATCH, è possibile prefissare la versione della dipendenza con il carattere tilde (`~`). Ecco un esempio di come consentire gli aggiornamenti di qualsiasi versione `1.3.x`.

```json
"package": "~1.3.8"
```

# --instructions--

Nel file package.json, la regola con cui npm aggiorna `@freecodecamp/example` si basa su una specifica versione (`1.2.13`). Ma ora desideriamo consentire l'ultima versione `1.2.x`.

Usa il carattere tilde (`~`) come prefisso di versione per `@freecodecamp/example` nelle tue dipendenze e permetti ad npm di aggiornare ad ogni nuova versione di _patch_.

**Nota:** I numeri di versione non devono essere modificati.

# --hints--

`"dependencies"` dovrebbe includere `"@freecodecamp/example"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        '@freecodecamp/example',
        '"dependencies" does not include "@freecodecamp/example"'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

La versione di `"@freecodecamp/example"` deve corrispondere a `"~1.2.13"`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.match(
        packJson.dependencies["@freecodecamp/example"],
        /^\~1\.2\.13/,
        'Wrong version of "@freecodecamp/example". It should be ~1.2.13'
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
