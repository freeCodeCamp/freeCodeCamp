---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
challengeType: 1
forumTopicId: 301222
localeTitle: Используйте оператора распространения для оценки массивов на месте
---

## Description
<section id='description'>
ES6 вводит <dfn>оператор спреда</dfn> , который позволяет нам расширять массивы и другие выражения в местах, где ожидаются несколько параметров или элементов. В приведенном ниже коде ES5 применяется <code>apply()</code> для вычисления максимального значения в массиве: <blockquote> var arr = [6, 89, 3, 45]; <br> var maximus = Math.max.apply (null, arr); // возвращает 89 </blockquote> Нам пришлось использовать <code>Math.max.apply(null, arr)</code> потому что <code>Math.max(arr)</code> возвращает <code>NaN</code> . <code>Math.max()</code> ожидает аргументы, разделенные запятыми, но не массив. Оператор распространения делает этот синтаксис намного лучше для чтения и обслуживания. <blockquote> const arr = [6, 89, 3, 45]; <br> const maximus = Math.max (... arr); // возвращает 89 </blockquote> <code>...arr</code> возвращает распакованный массив. Другими словами, он <em>расширяет</em> массив. Однако оператор расширения работает только на месте, например, в аргументе функции или в литерале массива. Следующий код не будет работать: <blockquote> const spreaded = ... arr; // выдает синтаксическую ошибку </blockquote>
</section>

## Instructions
<section id='instructions'>
Скопируйте все содержимое <code>arr1</code> в другой массив <code>arr2</code> используя оператор спреда.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arr2</code> should be correct copy of <code>arr1</code>.
    testString: assert(arr2.every((v, i) => v === arr1[i]));
  - text: <code>...</code> spread operator was used to duplicate <code>arr1</code>.
    testString: assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
  - text: <code>arr2</code> should remain unchanged when <code>arr1</code> is changed.
    testString: assert((arr1, arr2) => {arr1.push('JUN'); return arr2.length < arr1.length});

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // change this line

console.log(arr2);

```

</div>

</section>

## Solution
<section id='solution'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```

</section>
