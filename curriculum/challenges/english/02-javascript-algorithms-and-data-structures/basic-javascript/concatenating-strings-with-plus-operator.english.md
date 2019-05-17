---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
---

## Description
<section id='description'>
In JavaScript, when the <code>+</code> operator is used with a <code>String</code> value, it is called the <dfn>concatenation</dfn> operator. You can build a new string out of other strings by <dfn>concatenating</dfn> them together.
<strong>Example</strong>

```js
'My name is Alan,' + ' I concatenate.'
```

<strong>Note</strong><br>Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.
</section>

## Instructions
<section id='instructions'>
Build <code>myStr</code> from the strings <code>"This is the start. "</code> and <code>"This is the end."</code> using the <code>+</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> should have a value of <code>This is the start. This is the end.</code>
    testString: assert(myStr === "This is the start. This is the end.", '<code>myStr</code> should have a value of <code>This is the start. This is the end.</code>');
  - text: Use the <code>+</code> operator to build <code>myStr</code>
    testString: assert(code.match(/(["']).*(["'])\s*\+\s*(["']).*(["'])/g).length > 1, 'Use the <code>+</code> operator to build <code>myStr</code>');
  - text: <code>myStr</code> should be created using the <code>var</code> keyword.
    testString: assert(/var\s+myStr/.test(code), '<code>myStr</code> should be created using the <code>var</code> keyword.');
  - text: Make sure to assign the result to the <code>myStr</code> variable.
    testString: assert(/myStr\s*=/.test(code), 'Make sure to assign the result to the <code>myStr</code> variable.');

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
