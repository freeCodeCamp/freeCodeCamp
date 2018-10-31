---
id: bd7993c9ca9feddfaeb7bdef
title: Divide One Decimal by Another with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Разделить одно десятичное на другое с помощью JavaScript
---

## Description
<section id="description"> Теперь давайте разделим одно десятичное на другое. </section>

## Instructions
<section id="instructions"> Измените <code>0.0</code> так, чтобы <code>quotient</code> равен <code>2.2</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Переменный <code>quotient</code> должен равняться <code>2.2</code>
    testString: 'assert(quotient === 2.2, "The variable <code>quotient</code> should equal <code>2.2</code>");'
  - text: Вы должны использовать оператор <code>/</code> для разделения 4.4 на 2
    testString: 'assert(/4\.40*\s*\/\s*2\.*0*/.test(code), "You should use the <code>/</code> operator to divide 4.4 by 2");'
  - text: Значение переменной следует присваивать только один раз
    testString: 'assert(code.match(/quotient/g).length === 1, "The quotient variable should only be assigned once");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var quotient = 0.0 / 2.0; // Fix this line

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
