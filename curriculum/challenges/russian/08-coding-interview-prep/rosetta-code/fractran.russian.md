---
title: Fractran
id: 5a7dad05be01840e1778a0d1
challengeType: 3
videoUrl: ''
localeTitle: Fractran
---

## Description
<section id="description"><div class="rosetta"><p class="rosetta__paragraph"> <span class="rosetta__text--bold"><a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/FRACTRAN" title="wp: FRACTRAN">FRACTRAN</a></span> - полный эзотерический язык программирования Тьюринга, изобретенный математиком <a class="rosetta__link--wiki" href="https://en.wikipedia.org/wiki/John Horton Conway" title="wp: Джон Хортон Конвей">Джоном Хортоном Конвеем</a> . </p><br><p class="rosetta__paragraph"> Программа FRACTRAN представляет собой упорядоченный список положительных дробей $ P = (f_1, f_2, \ ldots, f_m) $ вместе с начальным положительным целым числом $ n $. </p><br><p class="rosetta__paragraph"> Программа запускается путем обновления целого числа $ n $ следующим образом: </p><br><ul class="rosetta__unordered-list"><li class="rosetta__list-item--unordered"> для первой фракции $ f_i $ в списке, для которого $ nf_i $ является целым числом, замените $ n $ на $ nf_i $; </li><li class="rosetta__list-item--unordered"> повторите это правило, пока никакая фракция в списке не выдает целое число при умножении на $ n $, а затем остановится. </li></ul><br><p class="rosetta__paragraph"> Конвей дал программу для простых чисел в FRACTRAN: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">17 долл. США, долл. США, долл. США, долл. США / $ 13/11 $, $ 15/14 $, $ 15/2 $, $ 55/1 $</span> </p><br><p class="rosetta__paragraph"> Начиная с $ n = 2 $, эта программа FRACTRAN изменит $ n $ на $ 15 = 2 \ times (15/2) $, затем $ 825 = 15 \ times (55/1) $, генерируя следующую последовательность целых чисел: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 2 $, $ 15 $, $ 825 $, $ 725 $, $ 1925 $, $ 2275 $, $ 425 $, $ 390 $, $ 330 $, $ 290 $, $ 770 $, $ \ ldots $</span> </p><br><p class="rosetta__paragraph"> После 2 эта последовательность содержит следующие степени 2: </p><br><p class="rosetta__paragraph"> <span class="rosetta__text--indented">$ 2 ^ 2 = 4 $, $ 2 ^ 3 = 8 $, $ 2 ^ 5 = 32 $, $ 2 ^ 7 = 128 $, $ 2 ^ {11} = 2048 $, $ 2 ^ {13} = 8192 $, $ 2 ^ {17 } = 131072 $, $ 2 ^ {19} = 524288 $, $ \ ldots $</span> </p><br><p class="rosetta__paragraph"> которые являются главными полномочиями 2. </p><br><dl class="rosetta__description-list"><dt class="rosetta__description-title"> Задача: </dt></dl><p class="rosetta__paragraph"> Напишите функцию, которая принимает программу fractran как строковый параметр и возвращает первые 10 номеров программы в виде массива. Если результат не содержит 10 чисел, тогда возвращаем числа как есть. </p></div></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fractran</code> должна быть функцией.
    testString: 'assert(typeof fractran=="function","<code>fractran</code> should be a function.");'
  - text: '<code>fractran(&quot;&quot;+tests[0]+&quot;&quot;)</code> должен возвращать массив.'
    testString: 'assert(Array.isArray(fractran(tests[0])),"<code>fractran(""+tests[0]+"")</code> should return an array.");'
  - text: '<code>fractran(&quot;&quot;+tests[0]+&quot;&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[0])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[0]),results[0],"<code>fractran(""+tests[0]+"")</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[1]+&quot;&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[1])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[1]),results[1],"<code>fractran(""+tests[1]+"")</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[2]+&quot;&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[2])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[2]),results[2],"<code>fractran(""+tests[2]+"")</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[3]+&quot;&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[3])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[3]),results[3],"<code>fractran(""+tests[3]+"")</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'
  - text: '<code>fractran(&quot;&quot;+tests[4]+&quot;&quot;)</code> должен возвращать <code>&quot;+JSON.stringify(results[4])+&quot;</code> .'
    testString: 'assert.deepEqual(fractran(tests[4]),results[4],"<code>fractran(""+tests[4]+"")</code> should return <code>"+JSON.stringify(results[4])+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fractran (progStr) {
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
