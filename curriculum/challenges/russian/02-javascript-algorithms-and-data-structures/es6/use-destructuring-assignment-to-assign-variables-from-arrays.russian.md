---
id: 587d7b89367417b2b2512b4b
title: Use Destructuring Assignment to Assign Variables from Arrays
challengeType: 1
videoUrl: ''
localeTitle: Использование назначения назначения для назначения переменных из массивов
---

## Description
<section id="description"> ES6 делает массивы деструктуризации такими же легкими, как и объекты разрушения. Одним из ключевых различий между оператором спреда и деструктурированием массива является то, что оператор распространения распаковывает все содержимое массива в список, разделенный запятыми. Следовательно, вы не можете выбирать, какие элементы вы хотите назначить переменным. Уничтожение массива позволяет нам делать именно это: <blockquote> const [a, b] = [1, 2, 3, 4, 5, 6]; <br> console.log (a, b); // 1, 2 </blockquote> Переменной <code>a</code> присваивается первое значение массива, а <code>b</code> - второе значение массива. Мы также можем получить доступ к значению по любому индексу в массиве с деструктурированием, используя запятые для достижения желаемого индекса: <blockquote> const [a, b ,,, c] = [1, 2, 3, 4, 5, 6]; <br> console.log (a, b, c); // 1, 2, 5 </blockquote></section>

## Instructions
<section id="instructions"> Используйте назначение destructuring для обмена значениями <code>a</code> и <code>b</code> чтобы <code>a</code> получил значение, сохраненное в <code>b</code> , и <code>b</code> получает значение, сохраненное в <code>a</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Значение <code>a</code> должно быть 6 после замены.
    testString: 'assert(a === 6, "Value of <code>a</code> should be 6, after swapping.");'
  - text: Значение <code>b</code> должно быть 8 после замены.
    testString: 'assert(b === 8, "Value of <code>b</code> should be 8, after swapping.");'
  - text: Используйте деструктурирование массива для обмена a и b.
    testString: '// assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code), "Use array destructuring to swap a and b.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line

  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
