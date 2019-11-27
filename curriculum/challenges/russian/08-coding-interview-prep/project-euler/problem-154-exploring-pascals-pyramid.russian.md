---
id: 5900f4071000cf542c50ff19
challengeType: 5
title: 'Problem 154: Exploring Pascal''s pyramid'
forumTopicId: 301785
localeTitle: 'Задача 154: Изучение пирамиды Паскаля'
---

## Description
<section id='description'>
Треугольная пирамида построена с использованием сферических шаров, так что каждый шар покоится ровно на три шара следующего нижнего уровня. <p> Затем мы вычисляем количество путей, ведущих от вершины к каждой позиции: путь начинается с вершины и продвигается вниз к любой из трех сфер непосредственно под текущей позицией. Следовательно, число путей для достижения определенной позиции - это сумма чисел, находящихся непосредственно над ним (в зависимости от положения, над ней должно быть не более трех чисел). Результатом является пирамида Паскаля, а числа на каждом уровне n - коэффициенты триномиального разложения (x + y + z) n. Сколько коэффициентов разложения (x + y + z) 200000 кратно 1012? </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler154()</code> should return 479742450.
    testString: assert.strictEqual(euler154(), 479742450);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler154() {
  // Good luck!
  return true;
}

euler154();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
