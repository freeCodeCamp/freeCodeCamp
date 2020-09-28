---
id: 5900f4811000cf542c50ff94
challengeType: 5
title: 'Problem 277: A Modified Collatz sequence'
forumTopicId: 301927
localeTitle: 'Задача 277: Измененная последовательность Collatz'
---

## Description
<section id='description'>
Измененная последовательность целых чисел Collatz получается из начального значения a1 следующим образом: <p> an + 1 = an / 3, если an делится на 3. Мы будем обозначать это как большой шаг вниз, «D». </p><p> an + 1 = (4an + 2) / 3, если деленная на 3 дает остаток от 1. Мы будем обозначать это как восходящий шаг «U». </p><p> an + 1 = (2an - 1) / 3, если деленная на 3 дает остаток от 2. Мы будем обозначать это как небольшой шаг вниз «d». </p><p> Последовательность завершается при некотором an = 1. </p><p> Для любого целого числа мы можем перечислить последовательность шагов. Например, если a1 = 231, то последовательность {an} = {231,77,51,17,11,7,10,14,9,3,1} соответствует этапам «DdDddUUdDD». </p><p> Конечно, есть и другие последовательности, начинающиеся с той же последовательности «DdDddUUdDD ....». Например, если a1 = 1004064, то последовательностью является DdDddUUdDDDUDUDUUdDdUUDDDUdDD. Фактически, 1004064 является наименьшим возможным a1&gt; 106, которое начинается с последовательности DdDddUUdDD. </p><p> Каков самый маленький a1&gt; 1015, который начинается с последовательности «UDDDUdddDDUDDddDdDddDDUDDdUUDd»? </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler277()</code> should return 1125977393124310.
    testString: assert.strictEqual(euler277(), 1125977393124310);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler277() {
  // Good luck!
  return true;
}

euler277();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
