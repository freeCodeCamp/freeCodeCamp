---
id: bd7993c9c69feddfaeb7bdef
title: Multiply Two Decimals with JavaScript
localeTitle: Multiplica dos decimales con JavaScript
challengeType: 1
---

## Description
<section id='description'> 
En JavaScript, también puede realizar cálculos con números decimales, al igual que los números enteros. 
Multipliquemos dos decimales para obtener su producto. 
</section>

## Instructions
<section id='instructions'> 
Cambie el <code>0.0</code> para que el producto sea igual a <code>5.0</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El <code>product</code> variable debe ser igual a <code>5.0</code> .
    testString: 'assert(product === 5.0, "The variable <code>product</code> should equal <code>5.0</code>.");'
  - text: Debes usar el operador <code>*</code>
    testString: 'assert(/\*/.test(code), "You should use the <code>*</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var product = 2.0 * 0.0;


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
var product = 2.0 * 2.5;
```

</section>
