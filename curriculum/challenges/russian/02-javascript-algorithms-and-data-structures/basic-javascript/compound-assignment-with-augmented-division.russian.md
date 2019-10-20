---
id: 56533eb9ac21ba0edf2244b2
title: Compound Assignment With Augmented Division
challengeType: 1
videoUrl: https://scrimba.com/c/c2QvKT2
forumTopicId: 16659
localeTitle: Соединение с расширенным делением
---

## Description
<section id='description'>
Оператор <code>/=</code> делит переменную на другое число. <code>myVar = myVar / 5;</code> <code>myVar</code> на <code>5</code> . Это можно переписать как: <code>myVar /= 5;</code>
</section>

## Instructions
<section id='instructions'>
Преобразуйте присвоения для <code>a</code> , <code>b</code> и <code>c</code> для использования оператора <code>/=</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should equal <code>4</code>
    testString: assert(a === 4);
  - text: <code>b</code> should equal <code>27</code>
    testString: assert(b === 27);
  - text: <code>c</code> should equal <code>3</code>
    testString: assert(c === 3);
  - text: You should use the <code>/=</code> operator for each variable
    testString: assert(code.match(/\/=/g).length === 3);
  - text: Do not modify the code above the line
    testString: assert(/var a = 48;/.test(code) && /var b = 108;/.test(code) && /var c = 33;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a = a / 12;
b = b / 4;
c = c / 11;

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
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;
```

</section>
