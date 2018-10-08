---
id: 587d824f367417b2b2512c5a
title: Run Functional Tests on an API Response using Chai-HTTP III - PUT method
localeTitle: Ejecute pruebas funcionales en una respuesta de API usando el método Chai-HTTP III - PUT
challengeType: 2
---

## Description
<section id='description'> 
Como recordatorio, este proyecto se está construyendo sobre el siguiente proyecto de inicio en <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/'>Glitch</a> , o clonado desde <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a> . 
En el siguiente ejemplo veremos cómo enviar datos en una carga útil de solicitud (cuerpo). 
Vamos a probar una solicitud PUT. El punto final &#39;/ travellers&#39; acepta 
un objeto JSON que toma la estructura: 
{apellido: [apellido de un viajero del pasado]}, 
La ruta responde con: 
{nombre: [nombre], apellido: [último nombre], fechas: [años de nacimiento - muerte]} 
vea el código del servidor para más detalles. 
Enviar {apellido: &#39;Colombo&#39;}. Reemplace assert.fail () y haga que la prueba pase. 
Verifique 1) estado, 2) tipo, 3) cuerpo.nombre, 4) cuerpo. Apellido 
Siga el orden de aserción anterior, nos basamos en él. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todas las pruebas deben pasar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Debes probar para que 'res.status' sea 200
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.assertions[0].method, "equal"); assert.equal(data.assertions[0].args[0], "res.status"); assert.equal(data.assertions[0].args[1], "200");}, xhr => { throw new Error(xhr.responseText); })'
  - text: Debes probar que 'res.type' sea 'application / json'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.assertions[1].method, "equal"); assert.equal(data.assertions[1].args[0], "res.type"); assert.equal(data.assertions[1].args[1], "\"application/json\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: Debería probar que 'res.body.name' sea 'Cristoforo'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.assertions[2].method, "equal"); assert.equal(data.assertions[2].args[0], "res.body.name"); assert.equal(data.assertions[2].args[1], "\"Cristoforo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: Debes probar que 'res.body.surname' sea 'Colombo'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=2").then(data => { assert.equal(data.assertions[3].method, "equal"); assert.equal(data.assertions[3].args[0], "res.body.surname"); assert.equal(data.assertions[3].args[1], "\"Colombo\"");}, xhr => { throw new Error(xhr.responseText); })'

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
