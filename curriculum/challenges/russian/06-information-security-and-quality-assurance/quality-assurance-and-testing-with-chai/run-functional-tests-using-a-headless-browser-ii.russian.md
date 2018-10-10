---
id: 587d8250367417b2b2512c5d
title: Run Functional Tests using a Headless Browser II
challengeType: 2
videoUrl: ''
localeTitle: Запуск функциональных тестов с использованием безгласного браузера II
---

## Description
<section id="description"> Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Это упражнение аналогично предыдущему. Посмотрите на код для маршрутов. Следуйте порядку утверждений, мы полагаемся на это. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Все испытания должны пройти
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'утверждать, что запрос без браузера'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[0].method, "browser.success"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'утверждают, что текст внутри элемента «span # name» - это «Amerigo»,'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[1].method, "browser.text"); assert.equal(data.assertions[1].args[0], "\"span#name\""); assert.equal(data.assertions[1].args[1], "\"Amerigo\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'утверждают, что текст внутри элемента «span # фамилия» является «Vespucci»'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[2].method, "browser.text"); assert.equal(data.assertions[2].args[0], "\"span#surname\""); assert.equal(data.assertions[2].args[1], "\"Vespucci\"");}, xhr => { throw new Error(xhr.responseText); })'
  - text: 'утверждают, что существует элемент «span # dates», и его счет равен 1'
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=functional&n=5").then(data => { assert.equal(data.assertions[3].method, "browser.element"); assert.equal(data.assertions[3].args[0], "\"span#dates\""); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })'

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
