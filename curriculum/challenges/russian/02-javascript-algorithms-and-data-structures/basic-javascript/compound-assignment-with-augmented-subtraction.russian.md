---
id: 56533eb9ac21ba0edf2244b0
title: Compound Assignment With Augmented Subtraction
challengeType: 1
videoUrl: ''
localeTitle: Соединение с расширенной вычитанием
---

## Description
<section id="description"> Как и оператор <code>+=</code> , <code>-=</code> вычитает число из переменной. <code>myVar = myVar - 5;</code> вычитает <code>5</code> из <code>myVar</code> . Это можно переписать как: <code>myVar -= 5;</code> </section>

## Instructions
<section id="instructions"> Преобразуйте присвоения для <code>a</code> , <code>b</code> и <code>c</code> для использования оператора <code>-=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> должно равняться <code>5</code>
    testString: 'assert(a === 5, "<code>a</code> should equal <code>5</code>");'
  - text: <code>b</code> должно равняться <code>-6</code>
    testString: 'assert(b === -6, "<code>b</code> should equal <code>-6</code>");'
  - text: <code>c</code> должно равняться <code>2</code>
    testString: 'assert(c === 2, "<code>c</code> should equal <code>2</code>");'
  - text: Вы должны использовать оператор <code>-=</code> для каждой переменной
    testString: 'assert(code.match(/-=/g).length === 3, "You should use the <code>-=</code> operator for each variable");'
  - text: Не изменяйте код над строкой
    testString: 'assert(/var a = 11;/.test(code) && /var b = 9;/.test(code) && /var c = 3;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a = a - 6;
b = b - 15;
c = c - 1;

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
