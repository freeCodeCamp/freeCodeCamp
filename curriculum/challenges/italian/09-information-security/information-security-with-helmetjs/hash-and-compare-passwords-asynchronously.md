---
id: 58a25bcff9fc0f352b528e7d
title: Crittografare e confrontare le password in modo asincrono
challengeType: 2
forumTopicId: 301578
dashedName: hash-and-compare-passwords-asynchronously
---

# --description--

Come promemoria, questo progetto verrà costruito a partire dalla seguente bozza su [Replit](https://replit.com/github/freeCodeCamp/boilerplate-bcrypt), o clonato da [GitHub](https://github.com/freeCodeCamp/boilerplate-bcrypt/).

Poiché la crittografia è progettata per essere ad alta intensità computazionale, si consiglia di farlo in modo asincrono sul server per evitare di bloccare le connessioni in entrata mentre si fa l'hash (letteralmente, lo "sminuzzamento") di una password. Tutto quello che devi fare per crittografare una password in modo asincrono è chiamare

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});
```

# --instructions--

Aggiungi questa funzione di hashing al tuo server (abbiamo già definito le variabili usate nella funzione da usare) e scrivila sulla console per visualizzarla! A questo punto normalmente salveresti l'hash (la password crittografata) nel tuo database.

Adesso, quando hai bisogno di capire se un nuovo ingresso ha gli stessi dati della password crittografata, potrai utilizzare la funzione di confronto.

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

Aggiungilo alla tua funzione di crittografia esistente (dal momento che devi aspettare che l'hash venga completato prima di chiamare la funzione di confronto) dopo aver scritto l'hash e il log 'res' completati sulla console all'interno del confronto. Dovresti vedere nella console una passwrd crittografata, poi viene stampato 'true'! Se cambi 'myPlaintextPassword' nella funzione di confronto con 'someOtherPlaintextPassword' allora dovrebbe restituire false.

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

```

Invia la tua pagina quando pensi di averlo fatto correttamente.

# --hints--

L'hash asincrono dovrebbe essere generato e confrontato correttamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi,
        'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback'
      );
      assert.match(
        data,
        /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi,
        'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
