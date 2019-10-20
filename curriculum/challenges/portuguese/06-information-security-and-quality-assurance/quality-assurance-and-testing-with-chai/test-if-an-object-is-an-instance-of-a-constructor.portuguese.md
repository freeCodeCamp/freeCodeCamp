---
id: 587d824e367417b2b2512c57
title: Test if an Object is an Instance of a Constructor
challengeType: 2
videoUrl: ''
localeTitle: Teste se um objeto é uma instância de um construtor
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . #instanceOf afirma que um objeto é uma instância de um construtor. Use #instanceOf ou #notInstanceOf onde for apropriado </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Todos os testes devem passar
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.state,"passed"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - instanceOf vs. notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[0].method, "notInstanceOf", "myCar is not an instance of Plane"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - instanceOf vs. notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[1].method, "instanceOf", "airlinePlane is an instance of Plane"); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - instanceOf vs. notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[2].method, "instanceOf", "everything is an Object in JavaScript..."); }, xhr => { throw new Error(xhr.responseText); })'
  - text: Escolha a afirmação certa - instanceOf vs. notInstanceOf
    testString: 'getUserInput => $.get(getUserInput("url") + "/_api/get-tests?type=unit&n=17").then(data => { assert.equal(data.assertions[3].method, "notInstanceOf", "myCar.wheels is not an instance of String"); }, xhr => { throw new Error(xhr.responseText); })'

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
