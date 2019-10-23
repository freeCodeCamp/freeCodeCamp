---
id: 56533eb9ac21ba0edf2244d6
title: Comparison with the Less Than Operator
challengeType: 1
videoUrl: https://scrimba.com/c/cNVRWtB
forumTopicId: 16789
localeTitle: Сравнение с Менеджером оператора
---

## Description
<section id='description'>
<dfn>Менее чем</dfn> оператор ( <code>&lt;</code> ) сравнивает значения двух чисел. Если число слева меньше числа справа, оно возвращает <code>true</code> . В противном случае возвращается <code>false</code> . Как и оператор равенства, <dfn>меньше, чем</dfn> оператор, преобразует типы данных при сравнении. <strong>Примеры</strong> <blockquote> 2 &lt;5 // true <br> &#39;3&#39; &lt;7 // true <br> 5 &lt;5 // false <br> 3 &lt;2 // false <br> &#39;8&#39; &lt;4 // false </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте <code>less than</code> операторов к указанным линиям так, чтобы операторы return имели смысл.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testLessThan(0)</code> should return "Under 25"
    testString: assert(testLessThan(0) === "Under 25");
  - text: <code>testLessThan(24)</code> should return "Under 25"
    testString: assert(testLessThan(24) === "Under 25");
  - text: <code>testLessThan(25)</code> should return "Under 55"
    testString: assert(testLessThan(25) === "Under 55");
  - text: <code>testLessThan(54)</code> should return "Under 55"
    testString: assert(testLessThan(54) === "Under 55");
  - text: <code>testLessThan(55)</code> should return "55 or Over"
    testString: assert(testLessThan(55) === "55 or Over");
  - text: <code>testLessThan(99)</code> should return "55 or Over"
    testString: assert(testLessThan(99) === "55 or Over");
  - text: You should use the <code>&lt;</code> operator at least twice
    testString: assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```

</section>
