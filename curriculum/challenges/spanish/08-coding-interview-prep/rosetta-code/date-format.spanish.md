---
title: Date format
id: 59669d08d75b60482359409f
localeTitle: 59669d08d75b60482359409f
challengeType: 5
---

## Description
<section id='description'> 
Tarea: 
<p> Devuelve una matriz con la fecha actual en los formatos: </p> 
<p> - 2007-11-23 y </p> 
<p> - Domingo 23 de noviembre de 2007. </p> 
<p> Salida de ejemplo: <code>[&#39;2007-11-23&#39;, &#39;Sunday, November 23, 2007&#39;]</code> </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDateFormats</code> es una función.
    testString: 'assert(typeof getDateFormats === "function", "<code>getDateFormats</code> is a function.");'
  - text: Debe devolver un objeto.
    testString: 'assert(typeof getDateFormats() === "object", "Should return an object.");'
  - text: Debe devolverse una matriz con 2 elementos.
    testString: 'assert(getDateFormats().length === 2, "Should returned an array with 2 elements.");'
  - text: Debe devolver la fecha correcta en el formato correcto.
    testString: 'assert.deepEqual(getDateFormats(), dates, equalsMessage);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDateFormats () {
  // Good luck!
  return true;
}
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
function getDateFormats () {
  const date = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const fmt1 = `${date.getFullYear()}-${(1 + date.getMonth())}-${date.getDate()}`;
  const fmt2 = `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return [fmt1, fmt2];
}

```

</section>
