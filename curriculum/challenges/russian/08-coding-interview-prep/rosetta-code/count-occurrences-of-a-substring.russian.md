---
title: Count occurrences of a substring
id: 596fda99c69f779975a1b67d
challengeType: 5
forumTopicId: 302237
localeTitle: Количество вхождений подстроки
---

## Description
<section id='description'>
Задача: <p> Создайте функцию или покажите встроенную функцию, чтобы подсчитать количество неперекрывающихся вхождений подстроки внутри строки. </p><p> Функция должна принимать два аргумента: </p> первый аргумент - строка для поиска, а вторая - подстрока, которую нужно искать. <p> Он должен возвращать целочисленное число. </p><p> Соответствие должно давать наибольшее количество совпадающих совпадений. </p><p> В общем, это по существу означает совмещение слева направо или справа налево. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countSubstring</code> is a function.
    testString: assert(typeof countSubstring === 'function');
  - text: <code>countSubstring("the three truths", "th")</code> should return <code>3</code>.
    testString: assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
  - text: <code>countSubstring("ababababab", "abab")</code> should return <code>2</code>.
    testString: assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
  - text: <code>countSubstring("abaabba*bbaba*bbab", "a*b")</code> should return <code>2</code>.
    testString: assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countSubstring(str, subStr) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const testCases = ['the three truths', 'ababababab', 'abaabba*bbaba*bbab'];
const searchString = ['th', 'abab', 'a*b'];
const results = [3, 2, 2];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, '\\$&');
  const matches = str.match(new RegExp(escapedSubStr, 'g'));
  return matches ? matches.length : 0;
}
```

</section>
