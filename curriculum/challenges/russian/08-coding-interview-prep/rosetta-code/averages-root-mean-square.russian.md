---
title: Averages-Root mean square
id: 594da033de4190850b893874
challengeType: 5
videoUrl: ''
localeTitle: Средние значения - средний квадрат
---

## Description
<section id="description"><p> Вычислите <a href="https://en.wikipedia.org/wiki/Root mean square" title="wp: средний квадрат корня">средний квадрат корня</a> чисел от 1 до 10 включительно. </p><p> Корневой средний квадрат также известен по его инициалам RMS (или rms) и как квадратичное среднее. </p><p> RMS рассчитывается как среднее из квадратов чисел, с квадратным корнем: </p><p> <big>$$ x _ {\ mathrm {rms}} = \ sqrt {{{x_1} ^ 2 + {x_2} ^ 2 + \ cdots + {x_n} ^ 2} \ over n}. $$</big> </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>rms</code> - это функция.
    testString: 'assert(typeof rms === "function", "<code>rms</code> is a function.");'
  - text: '<code>rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</code> должны равняться <code>6.2048368229954285</code> .'
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
