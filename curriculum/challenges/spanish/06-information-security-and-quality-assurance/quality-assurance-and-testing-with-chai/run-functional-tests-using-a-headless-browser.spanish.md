---
id: 587d824f367417b2b2512c5c
title: Run Functional Tests using a Headless Browser
localeTitle: Ejecutar pruebas funcionales utilizando un navegador sin cabeza
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a> . 
En los próximos desafíos vamos a simular la interacción humana con una página utilizando un dispositivo llamado &quot;Navegador sin cabeza&quot;. 
Un navegador sin cabeza es un navegador web sin una interfaz gráfica de usuario. Este tipo de herramientas son particularmente útiles para probar páginas web, ya que pueden representar y entender HTML, CSS y JavaScript de la misma manera que lo haría un navegador. 
Para estos desafíos estamos usando Zombie.JS. Es un navegador ligero que se basa totalmente en JS, sin depender de binarios adicionales para instalar. Esta característica lo hace utilizable en un entorno como Glitch. Hay muchas otras opciones (más potentes). <br> 
Mire los ejemplos en el código para las instrucciones del ejercicio Siga el orden de las aserciones, Confiamos en ello. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Afirmar que la solicitud del navegador sin cabeza tuvo éxito
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.assertions[0].method, "browser.success"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'afirmar que el texto dentro del elemento "span # name" es "Cristoforo"
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.assertions[1].method, "browser.text"); assert.equal(data.assertions[1].args[0], "\"span#name\""); assert.equal(data.assertions[1].args[1], "\"Cristoforo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'afirmar que el texto dentro del elemento "span # surname" es "Colombo"'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.assertions[2].method, "browser.text"); assert.equal(data.assertions[2].args[0], "\"span#surname\""); assert.equal(data.assertions[2].args[1], "\"Colombo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'afirmar que el elemento "span # dates" existe y su conteo es 1'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=4").then(data => { assert.equal(data.assertions[3].method, "browser.element"); assert.equal(data.assertions[3].args[0], "\"span#dates\""); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })'

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
