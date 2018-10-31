---
title: Count occurrences of a substring
id: 596fda99c69f779975a1b67d
challengeType: 5
videoUrl: ''
localeTitle: Количество вхождений подстроки
---

## Description
<section id="description"> Задача: <p> Создайте функцию или покажите встроенную функцию, чтобы подсчитать количество неперекрывающихся вхождений подстроки внутри строки. </p><p> Функция должна принимать два аргумента: </p> первый аргумент - строка для поиска, а вторая - подстрока, которую нужно искать. <p> Он должен возвращать целочисленное число. </p><p> Соответствие должно давать наибольшее количество совпадающих совпадений. </p><p> В общем, это по существу означает совмещение слева направо или справа налево. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countSubstring</code> - это функция.
    testString: 'assert(typeof countSubstring === "function", "<code>countSubstring</code> is a function.");'
  - text: '<code>countSubstring(&quot;the three truths&quot;, &quot;th&quot;)</code> должны возвращать <code>3</code> .'
    testString: 'assert.equal(countSubstring(testCases[0], searchString[0]), results[0], "<code>countSubstring("the three truths", "th")</code> should return <code>3</code>.");'
  - text: '<code>countSubstring(&quot;ababababab&quot;, &quot;abab&quot;)</code> должен возвращать <code>2</code> .'
    testString: 'assert.equal(countSubstring(testCases[1], searchString[1]), results[1], "<code>countSubstring("ababababab", "abab")</code> should return <code>2</code>.");'
  - text: '<code>countSubstring(&quot;abaabba*bbaba*bbab&quot;, &quot;a*b&quot;)</code> должен возвращать <code>2</code> .'
    testString: 'assert.equal(countSubstring(testCases[2], searchString[2]), results[2], "<code>countSubstring("abaabba*bbaba*bbab", "a*b")</code> should return <code>2</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countSubstring (str, subStr) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
