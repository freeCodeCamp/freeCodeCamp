---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/ca8GLT9
forumTopicId: 18201
localeTitle: Увеличение номера с помощью JavaScript
---

## Description
<section id='description'>
Вы можете легко <dfn>увеличить</dfn> или добавьте к переменной с <code>++</code> оператора. <code>i++;</code> эквивалентно <code>i = i + 1;</code> <strong>Заметка</strong> <br> Вся строка становится <code>i++;</code> , устраняя необходимость равенства знака.
</section>

## Instructions
<section id='instructions'>
Измените код, чтобы использовать оператор <code>++</code> на <code>myVar</code> . <strong>намек</strong> <br> Подробнее об <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()" target="_blank">арифметических операторах - Increment (++)</a> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> should equal <code>88</code>
    testString: assert(myVar === 88);
  - text: <code>myVar = myVar + 1;</code> should be changed
    testString: assert(/var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code));
  - text: Use the <code>++</code> operator
    testString: assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
  - text: Do not change code above the line
    testString: assert(/var myVar = 87;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 87;

// Only change code below this line
myVar = myVar + 1;

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(z){return 'myVar = ' + z;})(myVar);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myVar = 87;
myVar++;
```

</section>
