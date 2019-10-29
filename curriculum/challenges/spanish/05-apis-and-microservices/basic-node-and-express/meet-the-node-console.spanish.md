---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
localeTitle: Conozca la consola Node
challengeType: 2
---

## Description
<section id='description'> 
Durante el proceso de desarrollo, es importante poder verificar lo que está pasando en tu código. Node es solo un entorno de JavaScript. Al igual que JavaScript del lado del cliente, puede usar la consola para mostrar información útil de depuración. En su máquina local, vería la salida de la consola en un terminal. En Glitch puede abrir los registros en la parte inferior de la pantalla. Puede alternar el panel de registro con el botón 'Registros' (arriba a la izquierda, debajo del nombre de la aplicación). 
Para comenzar, simplemente imprima el clásico "Hello World" en la consola. Recomendamos mantener abierto el panel de registro mientras se trabaja en estos desafíos. Al leer los registros, puede estar al tanto de la naturaleza de los errores que pueden ocurrir. 
</section>

## Instructions
<section id='instructions'> 
Modifique el archivo <code>myApp.js</code> para registrar "Hello World" en la consola. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>"Hello World"</code> debería estar en la consola
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/hello-console'').then(data => { assert.isTrue(data.passed, ''"Hello World" is not in the server console''); }, xhr => { throw new Error(xhr.responseText); })'

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
