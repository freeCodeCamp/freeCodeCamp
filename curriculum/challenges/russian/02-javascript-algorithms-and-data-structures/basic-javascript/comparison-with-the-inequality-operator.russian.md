---
id: 56533eb9ac21ba0edf2244d2
title: Comparison with the Inequality Operator
challengeType: 1
videoUrl: https://scrimba.com/c/cdBm9Sr
forumTopicId: 16787
localeTitle: Сравнение с оператором неравенства
---

## Description
<section id='description'>
Оператор неравенства ( <code>!=</code> ) Является противоположным оператору равенства. Это означает «Не равно» и возвращает <code>false</code> когда равенство вернет <code>true</code> и <em>наоборот</em> . Как и оператор равенства, оператор неравенства будет преобразовывать типы данных значений при сравнении. <strong>Примеры</strong> <blockquote> 1! = 2 // true <br> 1! = &quot;1&quot; // false <br> 1! = &#39;1&#39; // false <br> 1! = True // false <br> 0! = False // false </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте оператор неравенства <code>!=</code> оператор <code>if</code> чтобы функция вернула «Не равно», когда <code>val</code> не эквивалентен <code>99</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testNotEqual(99)</code> should return "Equal"
    testString: assert(testNotEqual(99) === "Equal");
  - text: <code>testNotEqual("99")</code> should return "Equal"
    testString: assert(testNotEqual("99") === "Equal");
  - text: <code>testNotEqual(12)</code> should return "Not Equal"
    testString: assert(testNotEqual(12) === "Not Equal");
  - text: <code>testNotEqual("12")</code> should return "Not Equal"
    testString: assert(testNotEqual("12") === "Not Equal");
  - text: <code>testNotEqual("bob")</code> should return "Not Equal"
    testString: assert(testNotEqual("bob") === "Not Equal");
  - text: You should use the <code>!=</code> operator
    testString: assert(code.match(/(?!!==)!=/));

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
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
```

</section>
