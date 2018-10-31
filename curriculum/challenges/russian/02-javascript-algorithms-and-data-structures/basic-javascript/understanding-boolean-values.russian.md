---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
challengeType: 1
videoUrl: ''
localeTitle: Понимание булевых значений
---

## Description
<section id="description"> Другим типом данных является <dfn>логическое значение</dfn> . <code>Booleans</code> могут быть только одним из двух значений: <code>true</code> или <code>false</code> . Они в основном маленькие переключатели включения, где <code>true</code> - «включено», а <code>false</code> - «выключено». Эти два государства являются взаимоисключающими. <strong>Заметка</strong> <br> <code>Boolean</code> значения никогда не записываются с кавычками. <code>strings</code> <code>&quot;true&quot;</code> и <code>&quot;false&quot;</code> не являются <code>Boolean</code> и не имеют специального значения в JavaScript. </section>

## Instructions
<section id="instructions"> Измените функцию <code>welcomeToBooleans</code> так, чтобы он возвращал <code>true</code> вместо <code>false</code> при нажатии кнопки запуска. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Функция <code>welcomeToBooleans()</code> должна возвращать значение boolean (true / false).
    testString: 'assert(typeof welcomeToBooleans() === "boolean", "The <code>welcomeToBooleans()</code> function should return a boolean &#40;true/false&#41; value.");'
  - text: <code>welcomeToBooleans()</code> должен возвращать true.
    testString: 'assert(welcomeToBooleans() === true, "<code>welcomeToBooleans()</code> should return true.");'

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
