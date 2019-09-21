---
id: 56533eb9ac21ba0edf2244d5
title: Comparison with the Greater Than Or Equal To Operator
challengeType: 1
videoUrl: https://scrimba.com/c/c6KBqtV
forumTopicId: 16785
localeTitle: Сравнение с более высоким или равным оператору
---

## Description
<section id='description'>
Чем <code>greater than or equal to</code> оператору ( <code>&gt;=</code> ), то сравниваются значения двух чисел. Если число слева больше или равно числу справа, оно возвращает <code>true</code> . В противном случае возвращается <code>false</code> . Подобно оператору равенства, который <code>greater than or equal to</code> оператору, будет преобразовывать типы данных при сравнении. <strong>Примеры</strong> <blockquote> 6&gt; = 6 // true <br> 7&gt; = &#39;3&#39; // true <br> 2&gt; = 3 // false <br> &#39;7&#39;&gt; = 9 // false </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте к указанным линиям оператор, <code>greater than or equal to</code> иметь смысл.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterOrEqual(0)</code> should return "Less than 10"
    testString: assert(testGreaterOrEqual(0) === "Less than 10");
  - text: <code>testGreaterOrEqual(9)</code> should return "Less than 10"
    testString: assert(testGreaterOrEqual(9) === "Less than 10");
  - text: <code>testGreaterOrEqual(10)</code> should return "10 or Over"
    testString: assert(testGreaterOrEqual(10) === "10 or Over");
  - text: <code>testGreaterOrEqual(11)</code> should return "10 or Over"
    testString: assert(testGreaterOrEqual(11) === "10 or Over");
  - text: <code>testGreaterOrEqual(19)</code> should return "10 or Over"
    testString: assert(testGreaterOrEqual(19) === "10 or Over");
  - text: <code>testGreaterOrEqual(100)</code> should return "20 or Over"
    testString: assert(testGreaterOrEqual(100) === "20 or Over");
  - text: <code>testGreaterOrEqual(21)</code> should return "20 or Over"
    testString: assert(testGreaterOrEqual(21) === "20 or Over");
  - text: You should use the <code>&gt;=</code> operator at least twice
    testString: assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```

</section>
