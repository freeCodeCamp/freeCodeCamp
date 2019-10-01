---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
forumTopicId: 301236
localeTitle: Удаление элементов из массива используя slice вместо splice
---

## Description
<section id='description'>
Обычный случай при работе с массивами - это когда вы хотите удалить элементы и сохранить остальную часть массива. Для этого JavaScript предлагает метод <code>splice</code>, который принимает индекс того, где следует начинать удаление элементов, и количество элементов для удаления. Если второй аргумент не указан, по умолчанию удаляются элементы до конца массива. Однако метод <code>splice</code> мутирует исходный массив, на котором он вызывается. Вот пример: <blockquote> var cities = [&quot;Чикаго&quot;, &quot;Дели&quot;, &quot;Исламабад&quot;, &quot;Лондон&quot;, &quot;Берлин&quot;]; <br> cities.splice (3, 1); // Возвращает «Лондон» и удаляет его из массива городов <br> // города теперь [«Чикаго», «Дели», «Исламабад», «Берлин»] </blockquote> Как мы видели в последней задаче, метод <code>slice</code> не мутирует исходный массив, а возвращает новый, который можно сохранить в переменной. Напомним, что метод <code>slice</code> принимает два аргумента - индексы начала и канца среза (конец не включен) и возвращает эти элементы в новом массиве. Использование метода <code>slice</code> вместо <code>splice</code> помогает избежать любых побочных эффектов, связанных с массивом.
</section>

## Instructions
<section id='instructions'>
Перепишите функцию <code>nonMutatingSplice</code> , используя <code>slice</code> вместо <code>splice</code> . Он должен ограничивать массив предоставленных <code>cities</code> длиной до 3 и возвращать новый массив только с первыми тремя элементами. Не мутируйте исходный массив, предоставленный функции.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>slice</code> method.
    testString: assert(code.match(/\.slice/g));
  - text: Your code should not use the <code>splice</code> method.
    testString: assert(!code.match(/\.splice/g));
  - text: The <code>inputCities</code> array should not change.
    testString: assert(JSON.stringify(inputCities) === JSON.stringify(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]));
  - text: <code>nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])</code> should return <code>["Chicago", "Delhi", "Islamabad"]</code>.
    testString: assert(JSON.stringify(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])) === JSON.stringify(["Chicago", "Delhi", "Islamabad"]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.splice(3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.slice(0,3);
  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

</section>
