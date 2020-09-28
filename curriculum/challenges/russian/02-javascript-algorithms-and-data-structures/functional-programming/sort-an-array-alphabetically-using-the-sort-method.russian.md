---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
forumTopicId: 18303
localeTitle: Сортировка массива по алфавиту с помощью метода сортировки
---

## Description
<section id='description'>
Метод <code>sort</code> сортирует элементы массива в соответствии с функцией обратного вызова. Например: <blockquote> функция ascendingOrder (arr) { <br> return arr.sort (функция (a, b) { <br> return a - b; <br> }); <br> } <br> ascendingOrder ([1, 5, 2, 3, 4]); <br> // Возвращает [1, 2, 3, 4, 5] <br><br> функция reverseAlpha (arr) { <br> return arr.sort (функция (a, b) { <br> return a &lt;b; <br> }); <br> } <br> reverseAlpha ([&#39;l&#39;, &#39;h&#39;, &#39;z&#39;, &#39;b&#39;, &#39;s&#39;]); <br> // Возвращает [&#39;z&#39;, &#39;s&#39;, &#39;l&#39;, &#39;h&#39;, &#39;b&#39;] </blockquote> Примечание. Рекомендуется указать функцию обратного вызова, чтобы указать способ сортировки элементов массива. Метод сортировки по умолчанию JavaScript - это значение строки Unicode, которое может возвращать неожиданные результаты.
</section>

## Instructions
<section id='instructions'>
Используйте метод <code>sort</code> в функции <code>alphabeticalOrder</code> для сортировки элементов <code>arr</code> в алфавитном порядке.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>sort</code> method.
    testString: assert(code.match(/\.sort/g));
  - text: <code>alphabeticalOrder(["a", "d", "c", "a", "z", "g"])</code> should return <code>["a", "a", "c", "d", "g", "z"]</code>.
    testString: assert(JSON.stringify(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])) === JSON.stringify(["a", "a", "c", "d", "g", "z"]));
  - text: <code>alphabeticalOrder(["x", "h", "a", "m", "n", "m"])</code> should return <code>["a", "h", "m", "m", "n", "x"]</code>.
    testString: assert(JSON.stringify(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])) === JSON.stringify(["a", "h", "m", "m", "n", "x"]));
  - text: <code>alphabeticalOrder(["a", "a", "a", "a", "x", "t"])</code> should return <code>["a", "a", "a", "a", "t", "x"]</code>.
    testString: assert(JSON.stringify(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])) === JSON.stringify(["a", "a", "a", "a", "t", "x"]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function alphabeticalOrder(arr) {
  // Add your code below this line


  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort();
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

</section>
