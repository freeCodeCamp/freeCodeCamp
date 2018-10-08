---
id: cf1111c1c11feddfaeb6bdef
title: Divide One Number by Another with JavaScript
localeTitle: Divide un número por otro con JavaScript
challengeType: 1
---

## Description
<section id='description'> 
También podemos dividir un número por otro. 
JavaScript usa el símbolo <code>/</code> para la división. 

<strong>Ejemplo</strong> 
<blockquote>myVar = 16 / 2; // assigned 8</blockquote> 

</section>

## Instructions
<section id='instructions'> 
Cambia el <code>0</code> para que el <code>quotient</code> sea ​​igual a <code>2</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Haz que el <code>quotient</code> variable sea igual a 2.
    testString: 'assert(quotient === 2, "Make the variable <code>quotient</code> equal to 2.");'
  - text: Usa el operador <code>/</code>
    testString: 'assert(/\d+\s*\/\s*\d+/.test(code), "Use the <code>/</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var quotient = 66 / 0;


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
var quotient = 66 / 33;
```

</section>
