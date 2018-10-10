---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: ''
localeTitle: Конкатенация строк с помощью оператора Plus
---

## Description
<section id="description"> В JavaScript, когда оператор <code>+</code> используется со значением <code>String</code> , он называется оператором <dfn>конкатенации</dfn> . Вы можете создать новую строку из других строк путем <dfn>конкатенации</dfn> их вместе. <strong>пример</strong> <blockquote> «Меня зовут Алан, +, я конкатенирую». </blockquote> <strong>Заметка</strong> <br> Следите за пробелами. Конкатенация не добавляет пробелов между конкатенированными строками, поэтому вам нужно будет добавить их самостоятельно. </section>

## Instructions
<section id="instructions"> Создайте <code>myStr</code> из строк <code>&quot;This is the start. &quot;</code> и <code>&quot;This is the end.&quot;</code> используя оператор <code>+</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> должен иметь значение <code>This is the start. This is the end.</code>
    testString: 'assert(myStr === "This is the start. This is the end.", "<code>myStr</code> should have a value of <code>This is the start. This is the end.</code>");'
  - text: Используйте оператор <code>+</code> для создания <code>myStr</code>
    testString: 'assert(code.match(/([""]).*([""])\s*\+\s*([""]).*([""])/g).length > 1, "Use the <code>+</code> operator to build <code>myStr</code>");'
  - text: <code>myStr</code> должен быть создан с использованием ключевого слова <code>var</code> .
    testString: 'assert(/var\s+myStr/.test(code), "<code>myStr</code> should be created using the <code>var</code> keyword.");'
  - text: Обязательно присвойте результат переменной <code>myStr</code> .
    testString: 'assert(/myStr\s*=/.test(code), "Make sure to assign the result to the <code>myStr</code> variable.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr;

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
