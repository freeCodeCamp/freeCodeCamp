---
title: Averages-Root mean square
id: 594da033de4190850b893874
challengeType: 5
videoUrl: ''
localeTitle: Media de la media de la raíz
---

## Description
<section id="description"><p> Calcule el <a href="https://en.wikipedia.org/wiki/Root mean square" title="wp: cuadrado de la raíz">cuadrado</a> de la <a href="https://en.wikipedia.org/wiki/Root mean square" title="wp: cuadrado de la raíz">raíz</a> de los números del 1 al 10, ambos inclusive. </p><p> La raíz cuadrada media también se conoce por sus iniciales RMS (o rms) y como la media cuadrática. </p><p> El RMS se calcula como la media de los cuadrados de los números, con raíz cuadrada: </p><p> <big>$$ x _ {\ mathrm {rms}} = \ sqrt {{{x_1} ^ 2 + {x_2} ^ 2 + \ cdots + {x_n} ^ 2} \ over n}. $$</big> </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>rms</code> es una función.
    testString: 'assert(typeof rms === "function", "<code>rms</code> is a function.");'
  - text: '<code>rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</code> debe ser igual a <code>6.2048368229954285</code> .'
    testString: 'assert.equal(rms(arr1), answer1, "<code>rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</code> should equal <code>6.2048368229954285</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function rms (arr) {
  // Good luck!
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
// solution required
```
</section>
