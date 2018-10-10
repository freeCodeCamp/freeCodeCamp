---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
videoUrl: ''
localeTitle: Удаление элементов из массива Использование среза Вместо сращивания
---

## Description
<section id="description"> Обычный шаблон при работе с массивами - это когда вы хотите удалить элементы и сохранить остальную часть массива. JavaScript предлагает метод <code>splice</code> для этого, который принимает аргументы для индекса того, где следует начинать удаление элементов, а затем количество элементов для удаления. Если второй аргумент не указан, по умолчанию используется удаление элементов в конце. Однако метод <code>splice</code> мутирует исходный массив, на который он вызывается. Вот пример: <blockquote> var cities = [&quot;Чикаго&quot;, &quot;Дели&quot;, &quot;Исламабад&quot;, &quot;Лондон&quot;, &quot;Берлин&quot;]; <br> cities.splice (3, 1); // Возвращает «Лондон» и удаляет его из массива городов <br> // города теперь [«Чикаго», «Дели», «Исламабад», «Берлин»] </blockquote> Как мы видели в последнем вызове, метод <code>slice</code> не мутирует исходный массив, а возвращает новый, который можно сохранить в переменной. Напомним, что метод <code>slice</code> принимает два аргумента, чтобы индексы начинались и заканчивались срезом (конец не включен) и возвращает эти элементы в новом массиве. Использование метода <code>slice</code> вместо <code>splice</code> помогает избежать любых побочных эффектов, связанных с массивом. </section>

## Instructions
<section id="instructions"> Перепишите функцию <code>nonMutatingSplice</code> , используя <code>slice</code> вместо <code>splice</code> . Он должен ограничивать массив предоставленных <code>cities</code> длиной до 3 и возвращать новый массив только с первыми тремя элементами. Не мутируйте исходный массив, предоставленный функции. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать метод <code>slice</code> .
    testString: 'assert(code.match(/\.slice/g), "Your code should use the <code>slice</code> method.");'
  - text: Ваш код не должен использовать метод <code>splice</code> .
    testString: 'assert(!code.match(/\.splice/g), "Your code should not use the <code>splice</code> method.");'
  - text: Массив <code>inputCities</code> не должен изменяться.
    testString: 'assert(JSON.stringify(inputCities) === JSON.stringify(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]), "The <code>inputCities</code> array should not change.");'
  - text: '<code>nonMutatingSplice([&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;, &quot;London&quot;, &quot;Berlin&quot;])</code> должны вернуться <code>[&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])) === JSON.stringify(["Chicago", "Delhi", "Islamabad"]), "<code>nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])</code> should return <code>["Chicago", "Delhi", "Islamabad"]</code>.");'

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
// solution required
```
</section>
