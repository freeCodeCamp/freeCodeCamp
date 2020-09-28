---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: https://scrimba.com/c/cNpM8AN
forumTopicId: 16802
localeTitle: Конкатенация строк с помощью оператора Plus
---

## Description
<section id='description'>
В JavaScript, когда оператор <code>+</code> используется со значением <code>String</code> , он называется оператором <dfn>конкатенации</dfn> . Вы можете создать новую строку из других строк путем <dfn>конкатенации</dfn> их вместе. <strong>пример</strong> <blockquote> «Меня зовут Алан, +, я конкатенирую». </blockquote> <strong>Заметка</strong> <br> Следите за пробелами. Конкатенация не добавляет пробелов между конкатенированными строками, поэтому вам нужно будет добавить их самостоятельно.
</section>

## Instructions
<section id='instructions'>
Создайте <code>myStr</code> из строк <code>&quot;This is the start. &quot;</code> и <code>&quot;This is the end.&quot;</code> используя оператор <code>+</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> should have a value of <code>This is the start. This is the end.</code>
    testString: assert(myStr === "This is the start. This is the end.");
  - text: Use the <code>+</code> operator to build <code>myStr</code>
    testString: assert(code.match(/(["']).*(["'])\s*\+\s*(["']).*(["'])/g).length > 1);
  - text: <code>myStr</code> should be created using the <code>var</code> keyword.
    testString: assert(/var\s+myStr/.test(code));
  - text: Make sure to assign the result to the <code>myStr</code> variable.
    testString: assert(/myStr\s*=/.test(code));

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

### After Tests
<div id='js-teardown'>

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();

```

</div>

</section>

## Solution
<section id='solution'>

```js
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start. " + "This is the end.";
```

</section>
