---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
videoUrl: https://scrimba.com/c/cqk8rf4
forumTopicId: 16805
localeTitle: Построение строк с переменными
---

## Description
<section id='description'>
Иногда вам нужно будет создать строку, стиль <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> . Используя оператор конкатенации ( <code>+</code> ), вы можете вставить одну или несколько переменных в строку, которую вы строите.
</section>

## Instructions
<section id='instructions'>
Установите <code>myName</code> в строку, равную вашему имени, и создайте <code>myStr</code> с <code>myName</code> между строками <code>&quot;My name is &quot;</code> и <code>&quot; and I am well!&quot;</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myName</code> should be set to a string at least 3 characters long
    testString: assert(typeof myName !== 'undefined' && myName.length > 2);
  - text: Use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it
    testString: assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);

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

### After Tests
<div id='js-teardown'>

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myName = "Bob";
var myStr = "My name is " + myName + " and I am well!";
```

</section>
