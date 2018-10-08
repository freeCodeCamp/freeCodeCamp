---
id: cf1231c1c11feddfaeb5bdef
title: Multiply Two Numbers with JavaScript
localeTitle: Multiplica dos números con JavaScript
challengeType: 1
---

## Description
<section id='description'> 
También podemos multiplicar un número por otro. 
JavaScript usa el símbolo <code>*</code> para la multiplicación de dos números. 

<strong>Ejemplo</strong> 
<blockquote>myVar = 13 * 13; // assigned 169</blockquote> 

</section>

## Instructions
<section id='instructions'> 
Cambia el <code>0</code> para que el producto sea igual a <code>80</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Hacer que el <code>product</code> variable sea igual a 80.
    testString: 'assert(product === 80,"Make the variable <code>product</code> equal 80");'
  - text: Usa el operador <code>*</code>
    testString: 'assert(/\*/.test(code), "Use the <code>*</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var product = 8 * 0;


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
var product = 8 * 10;
```

</section>
