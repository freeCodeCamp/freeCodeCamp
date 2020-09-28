---
id: 56533eb9ac21ba0edf2244d4
title: Comparison with the Greater Than Operator
challengeType: 1
videoUrl: https://scrimba.com/c/cp6GbH4
forumTopicId: 16786
localeTitle: Сравнение с более крупным оператором
---

## Description
<section id='description'>
Чем больше оператор ( <code>&gt;</code> ), сравнивает значения двух чисел. Если число слева больше числа справа, оно возвращает <code>true</code> . В противном случае возвращается <code>false</code> . Как и оператор равенства, большее, чем оператор, преобразует типы данных при сравнении. <strong>Примеры</strong> <blockquote> 5&gt; 3 // true <br> 7&gt; &#39;3&#39; // true <br> 2&gt; 3 // false <br> &#39;1&#39;&gt; 9 // false </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте к указанным линиям оператор <code>greater than</code> операторы return.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterThan(0)</code> should return "10 or Under"
    testString: assert(testGreaterThan(0) === "10 or Under");
  - text: <code>testGreaterThan(10)</code> should return "10 or Under"
    testString: assert(testGreaterThan(10) === "10 or Under");
  - text: <code>testGreaterThan(11)</code> should return "Over 10"
    testString: assert(testGreaterThan(11) === "Over 10");
  - text: <code>testGreaterThan(99)</code> should return "Over 10"
    testString: assert(testGreaterThan(99) === "Over 10");
  - text: <code>testGreaterThan(100)</code> should return "Over 10"
    testString: assert(testGreaterThan(100) === "Over 10");
  - text: <code>testGreaterThan(101)</code> should return "Over 100"
    testString: assert(testGreaterThan(101) === "Over 100");
  - text: <code>testGreaterThan(150)</code> should return "Over 100"
    testString: assert(testGreaterThan(150) === "Over 100");
  - text: You should use the <code>&gt;</code> operator at least twice
    testString: assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```

</section>
