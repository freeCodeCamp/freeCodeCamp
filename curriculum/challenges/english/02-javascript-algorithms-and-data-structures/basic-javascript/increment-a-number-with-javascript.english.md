---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
challengeType: 1
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
<strong>Hint</strong><br>Learn more about <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()" target="_blank">Arithmetic operators - Increment (++)</a>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code> should equal <code>88</code>
    testString: 'assert(myVar === 88, ''<code>myVar</code> should equal <code>88</code>'');'
  - text: <code>myVar = myVar + 1;</code> should be changed
    testString: 'assert(/var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code), ''<code>myVar = myVar + 1;</code> should be changed'');'
  - text: Use the <code>++</code> operator
    testString: 'assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code), ''Use the <code>++</code> operator'');'
  - text: Do not change code above the line
    testString: 'assert(/var myVar = 87;/.test(code), ''Do not change code above the line'');'

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
var myVar = 87;
myVar++;
```

</section>
