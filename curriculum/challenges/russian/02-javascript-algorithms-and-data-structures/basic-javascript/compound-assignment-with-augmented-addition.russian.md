---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: ''
localeTitle: Соединение с добавленным дополнением
---

## Description
<section id="description"> В программировании обычно используются назначения для изменения содержимого переменной. Помните, что все справа от знака равенства оценивается первым, поэтому мы можем сказать: <code>myVar = myVar + 5;</code> добавить <code>5</code> к <code>myVar</code> . Поскольку это такая общая схема, существуют операторы, которые выполняют как математическую операцию, так и назначение за один шаг. Одним из таких операторов является оператор <code>+=</code> . <blockquote> var myVar = 1; <br> myVar + = 5; <br> console.log (MyVar); // Возвращает 6 </blockquote></section>

## Instructions
<section id="instructions"> Преобразуйте назначения для <code>a</code> , <code>b</code> и <code>c</code> чтобы использовать оператор <code>+=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> должно равняться <code>15</code>
    testString: 'assert(a === 15, "<code>a</code> should equal <code>15</code>");'
  - text: <code>b</code> должно равняться <code>26</code>
    testString: 'assert(b === 26, "<code>b</code> should equal <code>26</code>");'
  - text: <code>c</code> должно равняться <code>19</code>
    testString: 'assert(c === 19, "<code>c</code> should equal <code>19</code>");'
  - text: Вы должны использовать оператор <code>+=</code> для каждой переменной
    testString: 'assert(code.match(/\+=/g).length === 3, "You should use the <code>+=</code> operator for each variable");'
  - text: Не изменяйте код над строкой
    testString: 'assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a = a + 12;
b = 9 + b;
c = c + 7;

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
