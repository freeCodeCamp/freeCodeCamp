---
id: 58a25bcff9fc0f352b528e7e
title: Picar y comparar contraseñas sincrónicamente
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

Como recordatorio, este proyecto se basa en el siguiente proyecto inicial en <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonado de <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Picar sincrónicamente es igual de fácil de hacer, pero puede causar retrasos si se usa en el lado del servidor con un alto costo o si se pica con mucha frecuencia. Picar con este método es tan fácil como llamar

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

Agrega este método de hash a tu código y luego registre el resultado en la consola. Nuevamente, las variables usadas ya están definidas en el servidor asique no necesitará ajustarlas. Tal vez notes que aunque estás hasheando la misma contraseña que en la función asincrónica, el resultado en la consola es diferente -esto es porque el salto está siendo generado al azar cada vez como se ve en los primeros 22 carácteres en la tercera string del hash. Ahora para comparar un input de contraseña con el hash sincronizado nuevo, deberás usar el método compareSync:

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

con el resultado siendo un booleano verdadero o falso.

# --instructions--

Añade la función y registra el resultado en la consola para ver cómo funciona.

Envía tu página cuando creas que está correcto.

# --hints--

Sync hash debe generarse y compararse correctamente.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi,
        'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'
      );
      assert.match(
        data,
        /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi,
        'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'
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
