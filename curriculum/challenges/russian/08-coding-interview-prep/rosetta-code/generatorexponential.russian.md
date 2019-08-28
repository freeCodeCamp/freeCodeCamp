---
title: GeneratorExponential
id: 5a23c84252665b21eecc7e7b
challengeType: 5
videoUrl: ''
localeTitle: GeneratorExponential
---

## Description
<section id='description'>
Генератор - это исполняемый объект (например, функция или процедура), который содержит код, который дает последовательность значений по одному, так что каждый раз, когда вы вызываете генератор, предоставляется следующее значение в последовательности. Генераторы часто строятся поверх сопрограмм или объектов, так что внутреннее состояние объекта обрабатывается «естественно». Генераторы часто используются в ситуациях, когда последовательность потенциально бесконечна и где можно построить следующее значение последовательности с минимальным состоянием. Напишите функцию, которая использует генераторы для генерации квадратов и кубов. Создайте новый генератор, который фильтрует все кубы из генератора квадратов. Функция должна возвращать значение \ (n ^ {th} \) отфильтрованного генератора. Например, для \ (n = 7 \) функция должна возвращать 81, так как последовательность будет 4,9,16,25,36,49,81. Здесь 64 отфильтровывается, так как это куб.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>exponentialGenerator</code> должен быть функцией.
    testString: 'assert(typeof exponentialGenerator=="function","<code>exponentialGenerator</code> should be a function.");'
  - text: <code>exponentialGenerator()</code> должен возвращать число.
    testString: 'assert(typeof exponentialGenerator(10)=="number","<code>exponentialGenerator()</code> should return a number.");'
  - text: <code>exponentialGenerator(10)</code> должен вернуть <code>144</code> .
    testString: 'assert.equal(exponentialGenerator(10),144,"<code>exponentialGenerator(10)</code> should return <code>144</code>.");'
  - text: <code>exponentialGenerator(12)</code> должен возвращать <code>196</code> .
    testString: 'assert.equal(exponentialGenerator(12),196,"<code>exponentialGenerator(12)</code> should return <code>196</code>.");'
  - text: <code>exponentialGenerator(14)</code> должен возвращать <code>256</code> .
    testString: 'assert.equal(exponentialGenerator(14),256,"<code>exponentialGenerator(14)</code> should return <code>256</code>.");'
  - text: <code>exponentialGenerator(20)</code> должен возвращать <code>484</code> .
    testString: 'assert.equal(exponentialGenerator(20),484,"<code>exponentialGenerator(20)</code> should return <code>484</code>.");'
  - text: <code>exponentialGenerator(25)</code> должен возвращать <code>784</code> .
    testString: 'assert.equal(exponentialGenerator(25),784,"<code>exponentialGenerator(25)</code> should return <code>784</code>.");'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function exponentialGenerator (n) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
