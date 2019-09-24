---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
challengeType: 1
videoUrl: https://scrimba.com/c/c9Me8t4
forumTopicId: 301176
localeTitle: Понимание булевых значений
---

## Description
<section id='description'>
Другим типом данных является <dfn>логическое значение</dfn> . <code>Booleans</code> могут быть только одним из двух значений: <code>true</code> или <code>false</code> . Они в основном маленькие переключатели включения, где <code>true</code> - «включено», а <code>false</code> - «выключено». Эти два государства являются взаимоисключающими. <strong>Заметка</strong> <br> <code>Boolean</code> значения никогда не записываются с кавычками. <code>strings</code> <code>&quot;true&quot;</code> и <code>&quot;false&quot;</code> не являются <code>Boolean</code> и не имеют специального значения в JavaScript.
</section>

## Instructions
<section id='instructions'>
Измените функцию <code>welcomeToBooleans</code> так, чтобы он возвращал <code>true</code> вместо <code>false</code> при нажатии кнопки запуска.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>welcomeToBooleans()</code> function should return a boolean &#40;true/false&#41; value.
    testString: assert(typeof welcomeToBooleans() === 'boolean');
  - text: <code>welcomeToBooleans()</code> should return true.
    testString: assert(welcomeToBooleans() === true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function welcomeToBooleans() {

  // Only change code below this line.

  return false; // Change this line

  // Only change code above this line.
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
welcomeToBooleans();

```

</div>

</section>

## Solution
<section id='solution'>

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```

</section>
