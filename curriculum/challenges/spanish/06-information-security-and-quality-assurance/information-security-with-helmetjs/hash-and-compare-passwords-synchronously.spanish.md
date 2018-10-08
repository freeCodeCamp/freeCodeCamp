---
id: 58a25bcff9fc0f352b528e7e
title: Hash and Compare Passwords Synchronously
localeTitle: Hash y comparar contraseñas sincrónicamente
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-bcrypt/'>GitHub</a> . 
Hashing de forma síncrona es igual de fácil, pero puede causar un retraso si se usa en el lado del servidor con un alto costo o con hashing muy a menudo. Hashing con este método es tan fácil como llamar a <code>var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);</code> 
<hr> Agregue este método de hash a su código y luego registre el resultado en la consola. Nuevamente, las variables utilizadas ya están definidas en el servidor, por lo que no tendrá que ajustarlas. Puede notar que aunque tenga la misma contraseña que en la función asíncrona, el resultado en la consola es diferente, esto se debe a que la sal se genera aleatoriamente cada vez que se ve por los primeros 22 caracteres en la tercera cadena del hash . 
Ahora, para comparar una entrada de contraseña con el nuevo hash de sincronización, usaría el método compareSync: <code>var result = bcrypt.compareSync(myPlaintextPassword, hash);</code> siendo el resultado un verdadero o falso booleano. Agregue esta función y registre en la consola el resultado para verlo funcionar. 
Envía tu página cuando creas que lo has hecho bien. Si se encontró con errores durante estos desafíos, puede consultar el código de ejemplo completado <a href='https://gist.github.com/JosephLivengood/9a2698fb63e42d9d8b4b84235c08b4c4'>aquí</a> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sync hash generado y correctamente comparado
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi, "You should call bcrypt.hashSync on myPlaintextPassword with saltRounds"); assert.match(data, /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi, "You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line"); }, xhr => { throw new Error(xhr.statusText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
