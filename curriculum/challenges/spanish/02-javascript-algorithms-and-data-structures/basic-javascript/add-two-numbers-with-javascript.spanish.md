---
id: cf1111c1c11feddfaeb3bdef
title: Add Two Numbers with JavaScript
localeTitle: Añadir dos números con JavaScript
challengeType: 1
---

## Description
<section id='description'> 
<code>Number</code> es un tipo de datos en JavaScript que representa datos numéricos. 
Ahora vamos a tratar de sumar dos números usando JavaScript. 
JavaScript usa el símbolo <code>+</code> como operación de suma cuando se coloca entre dos números. 
<strong>Ejemplo</strong> 
<blockquote>myVar = 5 + 10; // assigned 15</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Cambia el <code>0</code> para que la suma sea igual a <code>20</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sum</code> debe ser igual a <code>20</code>
    testString: 'assert(sum === 20, "<code>sum</code> should equal <code>20</code>");'
  - text: Usa el operador <code>+</code>
    testString: 'assert(/\+/.test(code), "Use the <code>+</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var sum = 10 + 0;

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var sum = 10 + 10;
```

</section>
