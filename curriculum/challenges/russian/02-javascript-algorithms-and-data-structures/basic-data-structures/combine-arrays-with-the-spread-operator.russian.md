---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1
forumTopicId: 301156
localeTitle: Объединить массивы с оператором распространения
---

## Description
<section id='description'>
Другим огромным преимуществом оператора <dfn>спреда</dfn> является возможность объединения массивов или вставки всех элементов одного массива в другой при любом индексе. С более традиционными синтаксисами мы можем конкатенировать массивы, но это позволяет нам объединять массивы в конце одного и в начале другого. Синтаксис Spread делает следующую операцию чрезвычайно простой: <blockquote> пусть thisArray = [&#39;sage&#39;, &#39;rosemary&#39;, &#39;parsley&#39;, &#39;thyme&#39;]; <br><br> let thatArray = [&#39;basil&#39;, &#39;cilantro&#39;, ... thisArray, &#39;coriander&#39;]; <br> // thisArray теперь равен [&#39;basil&#39;, &#39;cilantro&#39;, &#39;sage&#39;, &#39;rosemary&#39;, &#39;parsley&#39;, &#39;thyme&#39;, &#39;coriander&#39;] </blockquote> Используя синтаксис распространения, мы только что выполнили операцию, которая была бы более сложной и более сложной, если бы мы использовали традиционные методы.
</section>

## Instructions
<section id='instructions'>
Мы определили функцию <code>spreadOut</code> которая возвращает <code>sentence</code> переменной, модифицируйте функцию с помощью оператора <dfn>спреда,</dfn> чтобы он возвращал массив <code>[&#39;learning&#39;, &#39;to&#39;, &#39;code&#39;, &#39;is&#39;, &#39;fun&#39;]</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>spreadOut</code> should return <code>["learning", "to", "code", "is", "fun"]</code>
    testString: assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
  - text: The <code>spreadOut</code> function should utilize spread syntax
    testString: assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```

</section>
