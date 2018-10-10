---
title: Fibonacci word
id: 5992e222d397f00d21122931
challengeType: 5
videoUrl: ''
localeTitle: Слово Фибоначчи
---

## Description
<section id="description"><p> Напишите функцию для возврата слов Фибоначчи до N. N будет предоставлена ​​в качестве параметра функции. Функция должна возвращать массив объектов. Объекты должны иметь вид: {N: 1, Length: 1, Entropy: 0, Word: &#39;1&#39;}. Более подробная информация приведена ниже: </p><p> Слово Фибоначчи может быть создано способом, аналогичным последовательности Фибоначчи, <a href="http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf" title="ссылка: http://hal.archives-ouvertes.fr/docs/00/36/79/72/PDF/The_Fibonacci_word_fractal.pdf">как описано здесь</a> : </p><p> Определите F_Word <sub>1</sub> как 1 </p><p> Определить F_Word <sub>2</sub> как 0 </p><p> Форма F_Word <sub>3</sub> как F_Word <sub>2,</sub> объединенная с F_Word <sub>1,</sub> то есть: 01 </p><p> Форма F_Word <sub>n</sub> как F_Word <sub>n-1,</sub> связанная с F_word <sub>n-2</sub> </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fibWord</code> - это функция.
    testString: 'assert(typeof fibWord === "function", "<code>fibWord</code> is a function.");'
  - text: <code>fibWord(5)</code> должен возвращать массив.
    testString: 'assert(Array.isArray(fibWord(5)),"<code>fibWord(5)</code> should return an array.");'
  - text: '<code>fibWord(5)</code> должен возвращать <code>&#39;+JSON.stringify(ans)+&#39;</code> .'
    testString: 'assert.deepEqual(fibWord(5),ans,"<code>fibWord(5)</code> should return <code>"+JSON.stringify(ans)+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fibWord (n) {
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
