---
id: 587d7b7a367417b2b2512b12
title: Copy Array Items Using slice()
challengeType: 1
forumTopicId: 301158
localeTitle: Копирование элементов массива Использование среза ()
---

## Description
<section id='description'>
Следующий метод, который мы рассмотрим, - <code>slice()</code> . <code>slice()</code> , вместо того, чтобы модифицировать массив, копировать или <em>извлекать</em> заданное количество элементов в новый массив, оставляя массив вызываемым без изменений. <code>slice()</code> принимает только 2 параметра - первый - это индекс, с которого нужно начинать извлечение, а второй - это индекс, в котором останавливается извлечение (извлечение произойдет до, но не включает элемент в этот индекс). Учти это: <blockquote> пусть weatherConditions = [&#39;rain&#39;, &#39;snow&#39;, &#39;sleet&#39;, &#39;hail&#39;, &#39;clear&#39;]; <br><br> let todaysWeather = weatherConditions.slice (1, 3); <br> // todaysWeather равно [&#39;snow&#39;, &#39;sleet&#39;]; <br> // weatherConditions по-прежнему равно [&#39;rain&#39;, &#39;snow&#39;, &#39;sleet&#39;, &#39;hail&#39;, &#39;clear&#39;] <br></blockquote> Фактически, мы создали новый массив, извлекая элементы из существующего массива.
</section>

## Instructions
<section id='instructions'>
Мы определили функцию, <code>forecast</code> , которая принимает массив в качестве аргумента. Измените функцию, используя <code>slice()</code> чтобы извлечь информацию из массива аргументов и вернуть новый массив, содержащий элементы <code>&#39;warm&#39;</code> и <code>&#39;sunny&#39;</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>forecast</code> should return <code>["warm", "sunny"]</code>
    testString: assert.deepEqual(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']), ['warm', 'sunny']);
  - text: The <code>forecast</code> function should utilize the <code>slice()</code> method
    testString: assert(/\.slice\(/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function forecast(arr) {
  // change code below this line

  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

```

</div>

</section>

## Solution
<section id='solution'>

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```

</section>
