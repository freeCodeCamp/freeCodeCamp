---
id: 56533eb9ac21ba0edf2244b7
title: Concatenating Strings with Plus Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
---

## Description
<section id='description'>
In JavaScript, when the <code>+</code> operator is used with a <code>String</code> value, it is called the <dfn>concatenation</dfn> operator. You can build a new string out of other strings by <dfn>concatenating</dfn> them together.
<strong>Example</strong>

```js
'My name is Alan,' + ' I concatenate.'
```

<strong>Note</strong><br>Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

```js
var ourStr = "I come first. " + "I come second.";
// ourStr is "I come first. I come second."
```

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
    testString: assert(myStr === "This is the start. This is the end.");
  - text: You should use the <code>+</code> operator to build <code>myStr</code>.
    testString: assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
  - text: <code>myStr</code> should be created using the <code>var</code> keyword.
    testString: assert(/var\s+myStr/.test(code));
  - text: You should assign the result to the <code>myStr</code> variable.
    testString: assert(/myStr\s*=/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr; // Change this line

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
var myStr = "This is the start. " + "This is the end.";
```

</section>
