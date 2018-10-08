---
id: 5
localeTitle: 5900f3981000cf542c50feab
challengeType: 5
title: 'Problem 44: Pentagon numbers'
---

## Description
<section id='description'> 
números pentagonales son generados por la fórmula, P <sub>n</sub> = <var>n</var> (3 <var>n</var> −1) / 2. Los primeros diez números pentagonales son: 
<span style='display: block; text-align: center;'>1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...</span> 
Se puede ver que P <sub>4</sub> + P <sub>7</sub> = 22 + 70 = 92 = P <sub>8</sub> . Sin embargo, su diferencia, 70 - 22 = 48, no es pentagonal. 
Encuentra el par de números pentagonales, P <sub>j</sub> y P <sub>k</sub> , para los cuales su suma y diferencia son pentagonales y D = | P <sub>k</sub> - P <sub>j</sub> | se minimiza ¿Cuál es el valor de D? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pentagonNumbers()</code> debe devolver 5482660.
    testString: 'assert.strictEqual(pentagonNumbers(), 5482660, "<code>pentagonNumbers()</code> should return 5482660.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pentagonNumbers() {
  // Good luck!
  return true;
}

pentagonNumbers();
```

</div>



</section>

## Solution
<section id='solution'>


```js
function pentagonNumbers() {
  function isPentagonal(num) {
  // Formula found by solving pentagonal number
  // equation for n.
  const n = (Math.sqrt((24 * num) + 1) + 1) / 6;
  return n % 1 === 0;
  }

  function pentagonal(num) {
    return (num * ((3 * num) - 1)) / 2;
  }
  let result;
  let i = 1;
  while (!result) {
  i++;
  const num1 = (i * ((3 * i) - 1)) / 2; // Pentagonal num formula
  const minDiff = num1 - (((i - 1) * ((3 * (i - 1)) - 1)) / 2);
  let j = i - 1;
  while (j > 0 && !result) {
  const num2 = (j * ((3 * j) - 1)) / 2;
  if (isPentagonal(num1 - num2) && isPentagonal(num1 + num2)) {
        result = num1 - num2;
      }
      j--;
    }
  }
  return result;
  }
```

</section>
