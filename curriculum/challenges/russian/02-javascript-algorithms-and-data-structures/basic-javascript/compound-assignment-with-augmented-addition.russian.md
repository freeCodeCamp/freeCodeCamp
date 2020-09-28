---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: https://scrimba.com/c/cDR6LCb
forumTopicId: 16661
localeTitle: Соединение с добавленным дополнением
---

## Description
<section id='description'>
В программировании обычно используются назначения для изменения содержимого переменной. Помните, что все справа от знака равенства оценивается первым, поэтому мы можем сказать: <code>myVar = myVar + 5;</code> добавить <code>5</code> к <code>myVar</code> . Поскольку это такая общая схема, существуют операторы, которые выполняют как математическую операцию, так и назначение за один шаг. Одним из таких операторов является оператор <code>+=</code> . <blockquote> var myVar = 1; <br> myVar + = 5; <br> console.log (MyVar); // Возвращает 6 </blockquote>
</section>

## Instructions
<section id='instructions'>
Преобразуйте назначения для <code>a</code> , <code>b</code> и <code>c</code> чтобы использовать оператор <code>+=</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should equal <code>15</code>
    testString: assert(a === 15);
  - text: <code>b</code> should equal <code>26</code>
    testString: assert(b === 26);
  - text: <code>c</code> should equal <code>19</code>
    testString: assert(c === 19);
  - text: You should use the <code>+=</code> operator for each variable
    testString: assert(code.match(/\+=/g).length === 3);
  - text: Do not modify the code above the line
    testString: assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code));

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

### After Tests
<div id='js-teardown'>

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;
```

</section>
