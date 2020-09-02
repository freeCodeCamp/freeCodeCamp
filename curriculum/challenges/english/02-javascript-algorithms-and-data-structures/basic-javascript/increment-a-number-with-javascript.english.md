---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
---

## Description
<section id='description'>
You can easily <dfn>increment</dfn> or add one to a variable with the <code>++</code> operator.
<code>i++;</code>
is the equivalent of
<code>i = i + 1;</code>
<strong>Note</strong><br>The entire line becomes <code>i++;</code>, eliminating the need for the equal sign.
</section>

## Instructions
<section id='instructions'>
Change the code to use the <code>++</code> operator on <code>myVar</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> should equal <code>88</code>.
    testString: assert(myVar === 88);
  - text: You should not use the assignment operator.
    testString: assert(/var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code));
  - text: You should use the <code>++</code> operator.
    testString: assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
  - text: You should not change code above the specified comment.
    testString: assert(/var myVar = 87;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 87;

// Only change code below this line
myVar = myVar + 1;

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myVar = 87;
myVar++;
```

</section>
