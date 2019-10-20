---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(myVar === 88, "<code>myVar</code> should equal <code>88</code>");'
  - text: ''
    testString: 'assert(/var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code), "<code>myVar = myVar + 1;</code> should be changed");'
  - text: ''
    testString: 'assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code), "Use the <code>++</code> operator");'
  - text: ''
    testString: 'assert(/var myVar = 87;/.test(code), "Do not change code above the line");'

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
