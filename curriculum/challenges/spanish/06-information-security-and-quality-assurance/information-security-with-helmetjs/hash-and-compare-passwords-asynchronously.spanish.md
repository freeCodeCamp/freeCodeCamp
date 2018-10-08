---
id: 58a25bcff9fc0f352b528e7d
title: Hash and Compare Passwords Asynchronously
localeTitle: Hash y comparar contraseñas de forma asíncrona
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-bcrypt/'>GitHub</a> . 
Como el hash está diseñado para ser computacionalmente intensivo, se recomienda hacerlo de forma asíncrona en su servidor para evitar el bloqueo de las conexiones entrantes mientras se realiza el hash. Todo lo que tiene que hacer para <code>bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) =&gt; { /*Store hash in your db*/ });</code> una contraseña asincrónica es llamar a <code>bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) =&gt; { /*Store hash in your db*/ });</code> 
<hr> Agregue esta función de hash a su servidor (ya definimos las variables utilizadas en la función que debe utilizar) y regístrela en la consola para que la pueda ver. En este punto, normalmente guardaría el hash en su base de datos. 
Ahora, cuando necesite averiguar si una nueva entrada es la misma que la del hash, simplemente usaría la función de comparación <code>bcrypt.compare(myPlaintextPassword, hash, (err, res) =&gt; { /*res == true or false*/ });</code> . Agregue esto a su función hash existente (ya que debe esperar a que el hash se complete antes de llamar a la función de comparación) después de registrar el hash completado y el registro &#39;res&#39; en la consola dentro de la comparación. ¡Debería ver en la consola un hash y luego se imprime &#39;verdadero&#39;! Si cambia &#39;myPlaintextPassword&#39; en la función de comparación por &#39;someOtherPlaintextPassword&#39; entonces debería decir falso. 
<pre> bcrypt.hash ( &#39;passw0rd!&#39;, 13, (err, hash) =&gt; { 
console.log (hash); //$2a
2$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS 
bcrypt.compare (, hachís, (err &#39;passw0rd!&#39; , res) =&gt; { 
console.log (res); // true 
}); 
}); </pre> 
Envía tu página cuando creas que lo has hecho bien. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Async hash generado y correctamente comparado.
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js") .then(data => { assert.match(data, /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi, "You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback"); assert.match(data, /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi, "Nested within the hash function should be the compare function comparing myPlaintextPassword to hash"); }, xhr => { throw new Error(xhr.statusText); })'

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
