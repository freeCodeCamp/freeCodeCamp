---
id: 58a25bcef9fc0f352b528e7c
title: Understand BCrypt Hashes
challengeType: 2
videoUrl: ''
localeTitle: Comprender Hashes de Egipto
---

## Description
<section id="description"> Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a> , o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a> . Los hashes BCrypt son muy seguros. Un hash es básicamente una huella digital de los datos originales, siempre únicos. Esto se logra introduciendo los datos originales en un algoritmo y devolviendo un resultado de longitud fija. Para complicar aún más este proceso y hacerlo más seguro, también puede <em>agregar</em> su hash. Poner su hash implica agregar datos aleatorios a los datos originales antes del proceso de hash, lo que hace que sea aún más difícil de descifrar el hash. BCrypt hashes siempre se verá como <code>$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code> que tiene una estructura. El primer bit pequeño de datos <code>$2a</code> está definiendo qué tipo de algoritmo hash se usó. La siguiente porción <code>$13</code> define el <em>costo</em> . El costo es la cantidad de energía que se necesita para calcular el hash. Está en una escala logarítmica de 2 ^ de costo y determina cuántas veces se ponen los datos a través del algoritmo de hash. Por ejemplo, a un costo de 10, puede hacer un hash de 10 contraseñas por segundo en una computadora promedio, sin embargo, a un costo de 15 se requieren 3 segundos por hash ... y para llevarlo más lejos, a un costo de 31, Tarda varios días en completar un hash. Un costo de 12 se considera muy seguro en este momento. La última parte de su hash <code>$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code> , se parece a 1 gran cadena de números, puntos y letras, pero en realidad es 2 partes separadas de información. Los primeros 22 caracteres son la sal en texto sin formato, y el resto es la contraseña con hash. <hr> Para comenzar a utilizar BCrypt, agréguelo como una dependencia en su proyecto y solicítelo como &#39;bcrypt&#39; en su servidor. Envía tu página cuando creas que lo has hecho bien. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt es una dependencia
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "bcrypt", "Your project should list "bcrypt" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: BCrypt ha sido correctamente requerido
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => {assert.match(data, /bcrypt.*=.*require.*("|")bcrypt("|")/gi, "You should correctly require and instantiate socket.io as io.");}, xhr => { throw new Error(xhr.statusText); })'

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
