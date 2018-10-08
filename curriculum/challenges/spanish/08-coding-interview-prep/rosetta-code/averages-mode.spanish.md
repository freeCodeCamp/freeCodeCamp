---
title: Averages-Mode
id: 594d8d0ab97724821379b1e6
localeTitle: 594d8d0ab97724821379b1e6
challengeType: 5
---

## Description
<section id='description'> 
<p> Escribe un programa para encontrar el valor de <a href="https://en.wikipedia.org/wiki/Mode (statistics)" title="wp: modo (estadísticas)">modo</a> de una colección. </p><p> El caso donde la colección está vacía puede ser ignorado. Se debe tener cuidado para manejar el caso donde el modo no es único. </p><p> Si no es apropiado o no es posible admitir una colección general, use un vector (matriz), si es posible. Si no es apropiado o no es posible admitir un tipo de valor no especificado, use números enteros. </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mode</code> es una función.
    testString: 'assert(typeof mode === "function", "<code>mode</code> is a function.");'
  - text: &#39; <code>mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])</code> debe ser igual a <code>[6]</code> &#39;
    testString: 'assert.deepEqual(mode(arr1), [6], "<code>mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])</code> should equal <code>[6]</code>");'
  - text: &#39;el <code>mode([1, 2, 4, 4, 1])</code> debe ser igual a <code>[1, 4]</code> .&#39;
    testString: 'assert.deepEqual(mode(arr2).sort(), [1, 4], "<code>mode([1, 2, 4, 4, 1])</code> should equal <code>[1, 4]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mode (arr) {
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
function mode(arr) {
  const counter = {};
  let result = [];
  let max = 0;
  // for (const i in arr) {
  arr.forEach(el => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    }
    else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}

```

</section>
