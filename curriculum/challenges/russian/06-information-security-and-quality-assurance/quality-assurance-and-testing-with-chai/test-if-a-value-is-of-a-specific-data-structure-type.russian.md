---
id: 587d824e367417b2b2512c56
title: Test if a Value is of a Specific Data Structure Type
challengeType: 2
videoUrl: ''
localeTitle: 'Проверьте, соответствует ли значение конкретному типу структуры данных'
---

## Description
<section id="description"> Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #typeOf утверждает, что тип значения - заданная строка, как определено Object.prototype.toString. Используйте #typeOf или #notTypeOf, где это необходимо </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Все испытания должны пройти
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[0].method, "typeOf", "myCar is typeOf Object"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[1].method, "typeOf", "Car.model is a String"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[2].method, "notTypeOf", "Plane.wings is a Number (not a String)"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[3].method, "typeOf", "Plane.engines is an Array"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Выберите правильное утверждение - typeOf vs. notTypeOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=16").then(data => { assert.equal(data.assertions[4].method, "typeOf", "Car.wheels is a Number"); }, xhr => { throw new Error(xhr.responseText); })'

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
