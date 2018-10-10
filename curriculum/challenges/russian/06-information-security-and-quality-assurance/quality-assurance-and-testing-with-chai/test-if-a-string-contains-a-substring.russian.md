---
id: 587d824d367417b2b2512c53
title: Test if a String Contains a Substring
challengeType: 2
videoUrl: ''
localeTitle: 'Проверьте, содержит ли строка String подстроку'
---

## Description
<section id="description"> Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #include (on #notInclude) также работает для строк! Он утверждает, что фактическая строка содержит ожидаемую подстроку </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Все испытания должны пройти
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=13").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - include vs. notInclude
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=13").then(data => {  assert.equal(data.assertions[0].method, "include", "\"Arrow\" contains \"row\"..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - include vs. notInclude
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=13").then(data => {  assert.equal(data.assertions[1].method, "notInclude", "... a \"dart\" doesn\"t contain a \"queue\""); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
