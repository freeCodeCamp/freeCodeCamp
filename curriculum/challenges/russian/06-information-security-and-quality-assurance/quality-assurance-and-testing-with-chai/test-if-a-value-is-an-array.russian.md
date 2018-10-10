---
id: 587d824d367417b2b2512c50
title: Test if a Value is an Array
challengeType: 2
videoUrl: ''
localeTitle: 'Проверьте, является ли значение массивом'
---

## Description
<section id="description"> Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Все испытания должны пройти
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=10").then(data => {assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - isArray vs. isNotArray
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=10").then(data => {  assert.equal(data.assertions[0].method, "isArray", "String.prototype.split() returns an Array"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - isArray vs. isNotArray
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=10").then(data => {  assert.equal(data.assertions[1].method, "isNotArray", "Array.prototype.indexOf() returns a number"); }, xhr => { throw new Error(xhr.responseText); })'

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
