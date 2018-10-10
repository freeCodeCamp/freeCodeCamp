---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
videoUrl: ''
localeTitle: Построение строк с переменными
---

## Description
<section id="description"> Иногда вам нужно будет создать строку, стиль <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> . Используя оператор конкатенации ( <code>+</code> ), вы можете вставить одну или несколько переменных в строку, которую вы строите. </section>

## Instructions
<section id="instructions"> Установите <code>myName</code> в строку, равную вашему имени, и создайте <code>myStr</code> с <code>myName</code> между строками <code>&quot;My name is &quot;</code> и <code>&quot; and I am well!&quot;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myName</code> должен быть установлен в строку длиной не менее 3 символов
    testString: 'assert(typeof myName !== "undefined" && myName.length > 2, "<code>myName</code> should be set to a string at least 3 characters long");'
  - text: Используйте два <code>+</code> оператора для сборки <code>myStr</code> с <code>myName</code> внутри него
    testString: 'assert(code.match(/[""]\s*\+\s*myName\s*\+\s*[""]/g).length > 0, "Use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName;
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
