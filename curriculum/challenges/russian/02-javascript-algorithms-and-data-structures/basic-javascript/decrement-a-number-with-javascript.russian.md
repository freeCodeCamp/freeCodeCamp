---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: https://scrimba.com/c/cM2KeS2
forumTopicId: 17558
localeTitle: Уменьшить число с помощью JavaScript
---

## Description
<section id='description'>
Вы можете легко <dfn>декрементировать</dfn>, то есть уменьшать переменную на единицу, с помощью оператора<code>--</code>. <code>i--;</code> эквивалентно <code>i = i - 1;</code> <strong>Обратите внимание:</strong> <br> вся строка становится <code>i--;</code>, и отпадает необходимость в знаке равенства.
</section>

## Instructions
<section id='instructions'>
Измените код так, чтобы использовать оператор <code>--</code> с <code>myVar</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> should equal <code>10</code>
    testString: assert(myVar === 10);
  - text: <code>myVar = myVar - 1;</code> should be changed
    testString: assert(/var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code));
  - text: Use the <code>--</code> operator on <code>myVar</code>
    testString: assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
  - text: Do not change code above the line
    testString: assert(/var myVar = 11;/.test(code));

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
var myVar = 11;
myVar--;
```

</section>
