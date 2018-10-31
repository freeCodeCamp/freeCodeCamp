---
id: 56533eb9ac21ba0edf2244d3
title: Comparison with the Strict Inequality Operator
challengeType: 1
videoUrl: ''
localeTitle: Сравнение с оператором строгого неравенства
---

## Description
<section id="description"> Оператор строгого неравенства ( <code>!==</code> ) является логической противоположностью оператора строгого равенства. Это означает «строго не равно» и возвращает <code>false</code> когда строгое равенство вернет <code>true</code> и <em>наоборот</em> . Строгое неравенство не будет преобразовывать типы данных. <strong>Примеры</strong> <blockquote> 3! == 3 // false <br> 3! == &#39;3&#39; // true <br> 4! == 3 // true </blockquote></section>

## Instructions
<section id="instructions"> Добавьте <code>strict inequality operator</code> <code>if</code> чтобы функция вернула «Не равно», когда <code>val</code> строго не равно <code>17</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>testStrictNotEqual(17)</code> должен вернуть «Равный»,'
    testString: 'assert(testStrictNotEqual(17) === "Equal", "<code>testStrictNotEqual(17)</code> should return "Equal"");'
  - text: <code>testStrictNotEqual(&quot;17&quot;)</code> должен возвращать &quot;Не равно&quot;
    testString: 'assert(testStrictNotEqual("17") === "Not Equal", "<code>testStrictNotEqual("17")</code> should return "Not Equal"");'
  - text: <code>testStrictNotEqual(12)</code> должен вернуть «Не <code>testStrictNotEqual(12)</code> »
    testString: 'assert(testStrictNotEqual(12) === "Not Equal", "<code>testStrictNotEqual(12)</code> should return "Not Equal"");'
  - text: <code>testStrictNotEqual(&quot;bob&quot;)</code> должен возвращать &quot;Не равно&quot;
    testString: 'assert(testStrictNotEqual("bob") === "Not Equal", "<code>testStrictNotEqual("bob")</code> should return "Not Equal"");'
  - text: Вы должны использовать оператор <code>!==</code>
    testString: 'assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0, "You should use the <code>!==</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
