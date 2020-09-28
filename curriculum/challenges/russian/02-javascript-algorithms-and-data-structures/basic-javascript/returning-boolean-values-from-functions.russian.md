---
id: 5679ceb97cbaa8c51670a16b
title: Returning Boolean Values from Functions
challengeType: 1
videoUrl: https://scrimba.com/c/cp62qAQ
forumTopicId: 18273
localeTitle: Возврат булевых значений из функций
---

## Description
<section id='description'>
Вы можете вспомнить из <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank">сравнения с Оператором равенства,</a> что все операторы сравнения возвращают логическое <code>true</code> или <code>false</code> значение. Иногда люди используют оператор if / else для сравнения, например: <blockquote> функция isEqual (a, b) { <br> if (a === b) { <br> return true; <br> } else { <br> return false; <br> } <br> } </blockquote> Но есть лучший способ сделать это. Поскольку <code>===</code> возвращает <code>true</code> или <code>false</code> , мы можем вернуть результат сравнения: <blockquote> функция isEqual (a, b) { <br> return a === b; <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Исправить функцию <code>isLess</code> чтобы удалить инструкции <code>if/else</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isLess(10,15)</code> should return <code>true</code>
    testString: assert(isLess(10,15) === true);
  - text: <code>isLess(15,10)</code> should return <code>false</code>
    testString: assert(isLess(15, 10) === false);
  - text: You should not use any <code>if</code> or <code>else</code> statements
    testString: assert(!/if|else/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function isLess(a, b) {
  return a < b;
}
```

</section>
