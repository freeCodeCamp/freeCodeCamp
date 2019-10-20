---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
forumTopicId: 301228
localeTitle: Избегайте мутаций и побочных эффектов с помощью функционального программирования
---

## Description
<section id='description'>
Если вы еще этого не поняли, проблема в предыдущем вызове заключалась в вызове <code>splice</code> в функции <code>tabClose()</code> . К сожалению, <code>splice</code> изменяет исходный массив, на который он вызывается, поэтому второй вызов к нему использовал модифицированный массив и дал неожиданные результаты. Это небольшой пример гораздо большего шаблона - вы вызываете функцию в переменной, массиве или объекте, а функция меняет переменную или что-то в объекте. Одним из основных принципов функционального программирования является не изменение вещей. Изменения приводят к ошибкам. Легче предотвращать ошибки, зная, что ваши функции ничего не меняют, включая аргументы функции или любую глобальную переменную. В предыдущем примере не было никаких сложных операций, но метод <code>splice</code> изменил исходный массив и привел к ошибке. Напомним, что в функциональном программировании изменение или изменение вещей называется <code>mutation</code> , и результат называется <code>side effect</code> . Функция, в идеале, должна быть <code>pure function</code> , что означает, что она не вызывает никаких побочных эффектов. Давайте попробуем освоить эту дисциплину, а не изменять любую переменную или объект в нашем коде.
</section>

## Instructions
<section id='instructions'>
Заполните код для <code>incrementer</code> функции, чтобы он возвращал значение глобальной переменной <code>fixedValue</code> увеличиваемое на единицу.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.
    testString: assert(fixedValue === 4);
  - text: Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.
    testString: assert(newValue === 5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line


  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

```

</div>

</section>

## Solution
<section id='solution'>

```js
var fixedValue = 4

function incrementer() {
  return fixedValue + 1
}

var newValue = incrementer(); // Should equal 5
```

</section>
