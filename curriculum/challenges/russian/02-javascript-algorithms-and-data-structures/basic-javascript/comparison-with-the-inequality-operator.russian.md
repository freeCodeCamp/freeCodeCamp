---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: Сравнение с оператором неравенства
---

## Description
<section id="description"> Оператор неравенства ( <code>!=</code> ) Является противоположным оператору равенства. Это означает «Не равно» и возвращает <code>false</code> когда равенство вернет <code>true</code> и <em>наоборот</em> . Как и оператор равенства, оператор неравенства будет преобразовывать типы данных значений при сравнении. <strong>Примеры</strong> <blockquote> 1! = 2 // true <br> 1! = &quot;1&quot; // false <br> 1! = &#39;1&#39; // false <br> 1! = True // false <br> 0! = False // false </blockquote></section>

## Instructions
<section id="instructions"> Добавьте оператор неравенства <code>!=</code> оператор <code>if</code> чтобы функция вернула «Не равно», когда <code>val</code> не эквивалентен <code>99</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testNotEqual(99)</code> должен возвращать &quot;Equal&quot;
    testString: 'assert(testNotEqual(99) === "Equal", "<code>testNotEqual(99)</code> should return "Equal"");'
  - text: <code>testNotEqual(&quot;99&quot;)</code> должен возвращать &quot;Equal&quot;
    testString: 'assert(testNotEqual("99") === "Equal", "<code>testNotEqual("99")</code> should return "Equal"");'
  - text: <code>testNotEqual(12)</code> должен возвращать «Не <code>testNotEqual(12)</code> »
    testString: 'assert(testNotEqual(12) === "Not Equal", "<code>testNotEqual(12)</code> should return "Not Equal"");'
  - text: <code>testNotEqual(&quot;12&quot;)</code> должен возвращать «Не равно»
    testString: 'assert(testNotEqual("12") === "Not Equal", "<code>testNotEqual("12")</code> should return "Not Equal"");'
  - text: <code>testNotEqual(&quot;bob&quot;)</code> должен возвращать «Не равно»
    testString: 'assert(testNotEqual("bob") === "Not Equal", "<code>testNotEqual("bob")</code> should return "Not Equal"");'
  - text: Вы должны использовать оператор <code>!=</code>
    testString: 'assert(code.match(/(?!!==)!=/), "You should use the <code>!=</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
