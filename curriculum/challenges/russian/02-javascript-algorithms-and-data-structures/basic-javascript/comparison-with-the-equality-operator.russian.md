---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: Сравнение с использованием оператора равенства
---

## Description
<section id="description"> В JavaScript есть много <dfn>операторов сравнения</dfn> . Все эти операторы возвращают логическое значение <code>true</code> или <code>false</code> . Самым основным оператором является оператор равенства <code>==</code> . Оператор равенства сравнивает два значения и возвращает <code>true</code> если они равны или <code>false</code> если отличаются. Обратите внимание, что равенство отличается от присваивания ( <code>=</code> ), которое присваивает значение справа от оператора переменной в левой части. <blockquote> function equalityTest (myVal) { <br> if (myVal == 10) { <br> return "Равно"; <br> } <br> return "Не равно"; <br> } </blockquote> Если <code>myVal</code> равно <code>10</code> , оператор равенства возвращает <code>true</code> , поэтому код в фигурных скобках будет выполняться, и функция вернет <code>&quot;Равно&quot;</code> . В противном случае функция вернет <code>&quot;Не равно&quot;</code> . Чтобы JavaScript мог сравнивать два разных <em>типа данных</em> (например, <code>numbers</code> и <code>strings</code> ), он должен преобразовать один тип в другой. Это называется «Приведение типов». Однако, производить сравнение можно следующим образом: <blockquote> 1 == 1 // true <br> 1 == 2 // false <br> 1 == &#39;1&#39; // true <br> &quot;3&quot; == 3 // true </blockquote></section>

## Instructions
<section id="instructions"> Добавьте <code>оператор равенства</code> в указанную строку, чтобы функция вернула «Равно», когда <code>val</code> равно <code>12</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testEqual(10)</code> должен вернуть &quot;Не равно&quot;
    testString: 'assert(testEqual(10) === "Не равно", "<code>testEqual(10)</code> should return "Не равно"");'
  - text: <code>testEqual(12)</code> должен вернуть &quot;Равно&quot;
    testString: 'assert(testEqual(12) === "Равно", "<code>testEqual(12)</code> should return "Равно"");'
  - text: <code>testEqual(&quot;12&quot;)</code> должен вернуть &quot;Равно&quot;
    testString: 'assert(testEqual("12") === "Равно", "<code>testEqual("12")</code> should return "Равно"");'
  - text: Вы должны использовать оператор <code>==</code>
    testString: 'assert(code.match(/==/g) && !code.match(/===/g), "You should use the <code>==</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testEqual(val) {
  if (val) { // Измените эту строку
    return "Равно";
  }
  return "Не равно";
}

// Измените строку ниже чтобы проверить решение
testEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
function testEqual(val) {
  if (val == 12) {
    return "Равно";
  }
  return "Не равно";
}
```
</section>
