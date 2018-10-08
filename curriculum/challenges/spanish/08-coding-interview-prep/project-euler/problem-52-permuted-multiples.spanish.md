---
id: 5
localeTitle: 5900f3a01000cf542c50feb3
challengeType: 5
title: 'Problem 52: Permuted multiples'
---

## Description
<section id='description'> 
Se puede ver que el número, 125874, y su doble, 251748, contienen exactamente los mismos dígitos, pero en un orden diferente. 
Encuentre el entero positivo más pequeño, x, tal que 2x, 3x, 4x, 5x y 6x, contengan los mismos dígitos. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>permutedMultiples()</code> debe devolver 142857.
    testString: 'assert.strictEqual(permutedMultiples(), 142857, "<code>permutedMultiples()</code> should return 142857.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function permutedMultiples() {
  // Good luck!
  return true;
}

permutedMultiples();
```

</div>



</section>

## Solution
<section id='solution'>


```js
function permutedMultiples() {
    const isPermutation = (a, b) =>
        a.length !== b.length
            ? false
            : a.split('').sort().join() === b.split('').sort().join();


    let start = 1;
    let found = false;
    let result = 0;

    while (!found) {
        start *= 10;
        for (let i = start; i < start * 10 / 6; i++) {
            found = true;
            for (let j = 2; j <= 6; j++) {
                if (!isPermutation(i + ", j * i + ")) {
                    found = false;
                    break;
                }
            }
            if (found) {
                result = i;
                break;
            }
        }
    }

    return result;
}
```

</section>
