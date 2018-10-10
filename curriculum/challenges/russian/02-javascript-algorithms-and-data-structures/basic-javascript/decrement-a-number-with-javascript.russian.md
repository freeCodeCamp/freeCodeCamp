---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Уменьшить число с помощью JavaScript
---

## Description
<section id="description"> Вы можете легко <dfn>уменьшать</dfn> или уменьшить переменную на один с <code>--</code> оператором. <code>i--;</code> эквивалентно <code>i = i - 1;</code> <strong>Заметка</strong> <br> Вся строка становится <code>i--;</code> , устраняя необходимость равенства знака. </section>

## Instructions
<section id="instructions"> Измените код на использование оператора <code>--</code> на <code>myVar</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> должен равняться <code>10</code>
    testString: 'assert(myVar === 10, "<code>myVar</code> should equal <code>10</code>");'
  - text: <code>myVar = myVar - 1;</code> следует изменить
    testString: 'assert(/var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code), "<code>myVar = myVar - 1;</code> should be changed");'
  - text: Используйте <code>--</code> оператор на <code>myVar</code>
    testString: 'assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code), "Use the <code>--</code> operator on <code>myVar</code>");'
  - text: Не меняйте код над строкой
    testString: 'assert(/var myVar = 11;/.test(code), "Do not change code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;

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
