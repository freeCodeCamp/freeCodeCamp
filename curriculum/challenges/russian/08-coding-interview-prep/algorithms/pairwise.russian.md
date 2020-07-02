---
id: a3f503de51cfab748ff001aa
title: Pairwise
challengeType: 5
forumTopicId: 301617
localeTitle: парный
---

## Description
<section id='description'>
Учитывая массив <code>arr</code> , найдите пары элементов, сумма которых равна второму аргументу <code>arg</code> и возвращает сумму их индексов. Вы можете использовать несколько пар, которые имеют одинаковые числовые элементы, но разные индексы. Каждая пара должна использовать самые низкие доступные индексы. Как только элемент был использован, его нельзя повторно использовать для соединения с другим элементом. Например, <code>pairwise([1, 1, 2], 3)</code> создает пару <code>[2, 1]</code> используя 1 в индексе 0, а не 1 в индексе 1, потому что 0 + 2 &lt;1 + 2. Например, <code>pairwise([7, 9, 11, 13, 15], 20)</code> возвращает <code>6</code> . Парами, суммирующимися до 20, являются <code>[7, 13]</code> и <code>[9, 11]</code> . Затем мы можем записать массив с их индексами и значениями. <table class="table"><tbody><tr><th> <strong>Индекс</strong> </th><th> 0 </th><th> 1 </th><th> 2 </th><th> 3 </th><th> 4 </th></tr><tr><td> Стоимость </td><td> 7 </td><td> 9 </td><td> 11 </td><td> 13 </td><td> 15 </td></tr></tbody></table> Ниже мы возьмем соответствующие индексы и добавим их. 7 + 13 = 20 → Индексы 0 + 3 = 3 <br> 9 + 11 = 20 → Индексы 1 + 2 = 3 <br> 3 + 3 = 6 → Return <code>6</code> забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> should return 11.
    testString: assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
  - text: <code>pairwise([1, 3, 2, 4], 4)</code> should return 1.
    testString: assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
  - text: <code>pairwise([1, 1, 1], 2)</code> should return 1.
    testString: assert.deepEqual(pairwise([1, 1, 1], 2), 1);
  - text: <code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> should return 10.
    testString: assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
  - text: <code>pairwise([], 100)</code> should return 0.
    testString: assert.deepEqual(pairwise([], 100), 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
```

</section>
