---
id: 56533eb9ac21ba0edf2244aa
title: Understanding Uninitialized Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
---

## Description
<section id='description'>
When JavaScript variables are declared, they have an initial value of <code>undefined</code>. If you do a mathematical operation on an <code>undefined</code> variable your result will be <code>NaN</code> which means <dfn>"Not a Number"</dfn>. If you concatenate a string with an <code>undefined</code> variable, you will get a literal <dfn>string</dfn> of <code>"undefined"</code>.
</section>

## Instructions
<section id='instructions'>
Initialize the three variables <code>a</code>, <code>b</code>, and <code>c</code> with <code>5</code>, <code>10</code>, and <code>"I am a"</code> respectively so that they will not be <code>undefined</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should be defined and evaluated to have the value of <code>6</code>.
    testString: assert(typeof a === 'number' && a === 6);
  - text: <code>b</code> should be defined and evaluated to have the value of <code>15</code>.
    testString: assert(typeof b === 'number' && b === 15);
  - text: <code>c</code> should not contain <code>undefined</code> and should have a value of "I am a String!"
    testString: assert(!/undefined/.test(c) && c === "I am a String!");
  - text: You should not change code below the specified comment.
    testString: assert(/a = a \+ 1;/.test(code) && /b = b \+ 5;/.test(code) && /c = c \+ " String!";/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```

</section>
