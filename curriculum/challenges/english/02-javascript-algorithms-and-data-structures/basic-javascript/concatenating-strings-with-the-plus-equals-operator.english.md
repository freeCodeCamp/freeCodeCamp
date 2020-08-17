---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
---

## Description
<section id='description'>
We can also use the <code>+=</code> operator to <dfn>concatenate</dfn> a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.
<strong>Note</strong><br>Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

```js
var ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."
```

</section>

## Instructions
<section id='instructions'>
Build <code>myStr</code> over several lines by concatenating these two strings: <code>"This is the first sentence. "</code> and <code>"This is the second sentence."</code> using the <code>+=</code> operator. Use the <code>+=</code> operator similar to how it is shown in the editor. Start by assigning the first string to <code>myStr</code>, then add on the second string.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> should have a value of <code>This is the first sentence. This is the second sentence.</code>
    testString: assert(myStr === "This is the first sentence. This is the second sentence.");
  - text: You should use the <code>+=</code> operator to build <code>myStr</code>.
    testString: assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

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
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

</section>
