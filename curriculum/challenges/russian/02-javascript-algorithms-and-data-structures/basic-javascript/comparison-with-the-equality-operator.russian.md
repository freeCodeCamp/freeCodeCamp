---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: https://scrimba.com/c/cKyVMAL
forumTopicId: 16784
localeTitle: Сравнение с оператором равенства
---

## Description
<section id='description'>
В JavaScript есть много <dfn>операторов сравнения</dfn> . Все эти операторы возвращают логическое значение <code>true</code> или <code>false</code> . Основным оператором является оператор равенства <code>==</code> . Оператор равенства сравнивает два значения и возвращает <code>true</code> если они эквивалентны или <code>false</code> если они не являются. Обратите внимание, что равенство отличается от присваивания ( <code>=</code> ), которое присваивает значение справа от оператора переменной в левой части. <blockquote> функция равенстваTest (myVal) { <br> if (myVal == 10) { <br> return «Equal»; <br> } <br> возвращение «Не равно»; <br> } </blockquote> Если <code>myVal</code> равно <code>10</code> , оператор равенства возвращает <code>true</code> , поэтому код в фигурных скобках будет выполняться, и функция вернет <code>&quot;Equal&quot;</code> . В противном случае функция вернет <code>&quot;Not Equal&quot;</code> . Чтобы JavaScript мог сравнивать два разных <code>data types</code> (например, <code>numbers</code> и <code>strings</code> ), он должен преобразовывать один тип в другой. Это называется «Типовое принуждение». Однако, как только это произойдет, он может сравнить термины следующим образом: <blockquote> 1 == 1 // true <br> 1 == 2 // false <br> 1 == &#39;1&#39; // true <br> &quot;3&quot; == 3 // true </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте <code>equality operator</code> в указанную строку, чтобы функция вернула «Равно», когда <code>val</code> эквивалентно <code>12</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testEqual(10)</code> should return "Not Equal"
    testString: assert(testEqual(10) === "Not Equal");
  - text: <code>testEqual(12)</code> should return "Equal"
    testString: assert(testEqual(12) === "Equal");
  - text: <code>testEqual("12")</code> should return "Equal"
    testString: assert(testEqual("12") === "Equal");
  - text: You should use the <code>==</code> operator
    testString: assert(code.match(/==/g) && !code.match(/===/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```

</section>
