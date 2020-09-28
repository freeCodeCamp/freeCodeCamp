---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
forumTopicId: 301152
localeTitle: Добавление элементов с помощью splice ()
---

## Description
<section id='description'>
Помните, что в последнем вызове мы упоминали, что <code>splice()</code> может принимать до трех параметров? Ну, мы можем сделать еще один шаг с помощью <code>splice()</code> - в дополнение к удалению элементов, мы можем использовать этот третий параметр, который представляет один или несколько элементов, чтобы <em>добавить</em> их также. Это может быть невероятно полезно для быстрого переключения элемента или набора элементов для другого. Например, предположим, что вы храните цветовую схему для набора элементов DOM в массиве и хотите динамически изменять цвет на основе некоторых действий: <blockquote> function colorChange (arr, index, newColor) { <br> arr.splice (индекс, 1, newColor); <br> return arr; <br> } <br><br> let colorScheme = [&#39;# 878787&#39;, &#39;# a08794&#39;, &#39;# bb7e8c&#39;, &#39;# c9b6be&#39;, &#39;# d1becf&#39;]; <br><br> colorScheme = colorChange (colorScheme, 2, &#39;# 332327&#39;); <br> // мы удалили &#39;# bb7e8c&#39; и добавили &#39;# 332327&#39; на свое место <br> // colorScheme теперь равно [&#39;# 878787&#39;, &#39;# a08794&#39;, &#39;# 332327&#39;, &#39;# c9b6be&#39;, &#39;# d1becf&#39;] </blockquote> Эта функция принимает массив шестнадцатеричных значений, индекс, с которого нужно удалить элемент, и новый цвет для замены удаленного элемента. Возвращаемое значение представляет собой массив, содержащий новую измененную цветовую схему! Хотя этот пример немного упрощен, мы можем видеть, что значение, использующее <code>splice()</code> может иметь максимальный потенциал.
</section>

## Instructions
<section id='instructions'>
Мы определили функцию <code>htmlColorNames</code> , которая принимает в качестве аргумента массив цветов HTML. Измените функцию с помощью <code>splice()</code> чтобы удалить первые два элемента массива и добавить <code>&#39;DarkSalmon&#39;</code> и <code>&#39;BlanchedAlmond&#39;</code> в соответствующие места.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>htmlColorNames</code> should return <code>["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]</code>
    testString: assert.deepEqual(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']), ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']);
  - text: The <code>htmlColorNames</code> function should utilize the <code>splice()</code> method
    testString: assert(/.splice/.test(code));
  - text: You should not use <code>shift()</code> or <code>unshift()</code>.
    testString: assert(!/shift|unshift/.test(code));
  - text: You should not use array bracket notation.
    testString: assert(!/\[\d\]\s*=/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function htmlColorNames(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

```

</div>

</section>

## Solution
<section id='solution'>

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```

</section>
