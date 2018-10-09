---
title: Combinations
id: 5958469238c0d8d2632f46db
localeTitle: 5958469238c0d8d2632f46db
challengeType: 5
---

## Description
<section id='description'>
Tarea:
<p> Dado los enteros no negativos <big>m</big> y <big>n</big> , genere todas las <a href="http://mathworld.wolfram.com/Combination.html" title="enlace: http://mathworld.wolfram.com/Combination.html">combinaciones</a> de tamaño <big>m</big> de los enteros de <big>0</big> (cero) a <big>n-1</big> en orden ordenado (cada combinación está ordenada y la tabla completa está ordenada). </p>
Ejemplo:
<p> <big>3</big> peine <big>5</big> es: </p>
<pre>
0 1 2
0 1 3
0 1 4
0 2 2
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4
</pre>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinations</code> son una función.
    testString: 'assert(typeof combinations === "function", "<code>combinations</code> is a function.");'
  - text: ' <code>combinations(3, 5)</code> deben devolver <code>[[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]</code> . '
    testString: 'assert.deepEqual(combinations(testInput1[0], testInput1[1]), testOutput1, "<code>combinations(3, 5)</code> should return <code>[[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]</code>.");'
  - text: ' <code>combinations(4, 6)</code> deben devolver <code>[[0,1,2,3], [0,1,2,4], [0,1,2,5], [0,1,3,4], [0,1,3,5], [0,1,4,5], [0,2,3,4], [0,2,3,5], [0,2,4,5], [0,3,4,5], [1,2,3,4], [1,2,3,5], [1,2,4,5], [1,3,4,5], [2,3,4,5]]</code> '
    testString: 'assert.deepEqual(combinations(testInput2[0], testInput2[1]), testOutput2, "<code>combinations(4, 6)</code> should return <code>[[0,1,2,3],  [0,1,2,4],  [0,1,2,5],  [0,1,3,4],  [0,1,3,5],  [0,1,4,5],  [0,2,3,4],  [0,2,3,5],  [0,2,4,5],  [0,3,4,5],  [1,2,3,4],  [1,2,3,5],  [1,2,4,5],  [1,3,4,5],  [2,3,4,5]]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinations (m, n) {
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
function combinations (m, n) {
  const nArr = [...Array(n).keys()];

  return (function generateCombinations (size, numArr) {
    const ret = [];

    for (let i = 0; i < numArr.length; i++) {
      if (size === 1) {
        ret.push([numArr[i]]);
      }
      else {
        const sub = generateCombinations(size - 1, numArr.slice(i + 1, numArr.length));
        for (let subI = 0; subI < sub.length; subI++) {
          const next = sub[subI];
          next.unshift(numArr[i]);
          ret.push(next);
        }
      }
    }
    return ret;
  }(m, nArr));
}

```

</section>
