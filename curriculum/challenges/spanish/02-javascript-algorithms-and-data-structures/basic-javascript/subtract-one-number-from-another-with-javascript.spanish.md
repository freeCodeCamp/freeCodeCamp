---
id: cf1111c1c11feddfaeb4bdef
title: Subtract One Number from Another with JavaScript
localeTitle: Resta un número de otro con JavaScript
challengeType: 1
---

## Description
<section id='description'> 
También podemos restar un número de otro. 
JavaScript usa el símbolo <code>-</code> para restar. 

<strong>Ejemplo</strong> 
<blockquote>myVar = 12 - 6; // assigned 6</blockquote> 

</section>

## Instructions
<section id='instructions'> 
Cambia el <code>0</code> por lo que la diferencia es <code>12</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Haz la <code>difference</code> variable igual a 12.
    testString: 'assert(difference === 12, "Make the variable <code>difference</code> equal 12.");'
  - text: Sólo restar un número de 45.
    testString: 'assert(/var\s*difference\s*=\s*45\s*-\s*[0-9]*;(?!\s*[a-zA-Z0-9]+)/.test(code),"Only subtract one number from 45.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var difference = 45 - 0;


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
var difference = 45 - 33;
```

</section>
