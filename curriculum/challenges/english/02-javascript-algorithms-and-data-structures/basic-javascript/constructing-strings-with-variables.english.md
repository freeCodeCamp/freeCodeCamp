---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
---

## Description
<section id='description'>
Sometimes you will need to build a string, <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> style. By using the concatenation operator (<code>+</code>), you can insert one or more variables into a string you're building.

Example:

```js
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr is now "Hello, our name is freeCodeCamp, how are you?"
```

</section>

## Instructions
<section id='instructions'>
Set <code>myName</code> to a string equal to your name and build <code>myStr</code> with <code>myName</code> between the strings <code>"My name is "</code> and <code>" and I am well!"</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myName</code> should be set to a string at least 3 characters long.
    testString: assert(typeof myName !== 'undefined' && myName.length > 2);
  - text: You should use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it.
    testString: assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line
var myName;
var myStr;


```

</div>


### After Test
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
