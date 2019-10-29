---
id: 56533eb9ac21ba0edf2244ed
title: Appending Variables to Strings
challengeType: 1
videoUrl: https://scrimba.com/c/cbQmZfa
forumTopicId: 16656
localeTitle: Добавление переменных в строки
---

## Description
<section id='description'>
Так же, как мы можем построить строку из нескольких строк из строковых <dfn>литералов</dfn> , мы также можем добавить переменные в строку, используя оператор equals ( <code>+=</code> ).
</section>

## Instructions
<section id='instructions'>
Установите <code>someAdjective</code> и добавьте его в <code>myStr</code> используя оператор <code>+=</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>someAdjective</code> should be set to a string at least 3 characters long
    testString: assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
  - text: Append <code>someAdjective</code> to <code>myStr</code> using the <code>+=</code> operator
    testString: assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective;
var myStr = "Learning to code is ";

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
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
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "neat";
var myStr = "Learning to code is ";
myStr += someAdjective;
```

</section>
