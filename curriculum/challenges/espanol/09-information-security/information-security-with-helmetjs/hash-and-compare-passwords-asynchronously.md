---
id: 58a25bcff9fc0f352b528e7d
title: Hash y comparación de contraseñas asíncronicamente
challengeType: 2
forumTopicId: 301578
dashedName: hash-and-compare-passwords-asynchronously
---

# --description--

Como recordatorio, este proyecto se ha construído en base al el siguiente proyecto en <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Como el As hashing esta diseñado para ser computacionalmente intensivo, es recomendado hacerlo de manera asyncrona en tu servidor para evitar conexiones entrantes mientras se efectúa el hash. Todo lo que debes hacer para hash una contraseña asíncrona es llamar

```js
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
});
```

# --instructions--

Agrega esta función hashing a tu servidor (ya hemos definido las variables usadas en la función para tu uso) y registra en la consola para que las veas! En este punto tu normalmente guardarías el hash para tu base de datos.

Ahora cuando tu necesites descubrir si una nueva entrada es la misma información que el hash simplemente usa la función de comparación.

```js
bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
  /*res == true or false*/
});
```

Añade esto dentro de tu función hash existente (ya que necesitas esperar por el hash se complete antes de llamar a la función compación) luego de registrar el hash completado y registrar 'res' a la consola dentro de la comparación. Deberías ver en la consola un hash, y luego se imprime 'true'! Si cambias 'myPlaintextPassword' en la función de comparación a 'someOtherPlaintextPassword', entonces este debería decir false.

```js
bcrypt.hash('passw0rd!', 13, (err, hash) => {
  console.log(hash);
  //$2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare('passw0rd!', hash, (err, res) => {
    console.log(res); //true
  });
});

```

Envía tu página cuando creas que está correcto.

# --hints--

Hash asíncrono debería generarse y compararse correctamente.

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
