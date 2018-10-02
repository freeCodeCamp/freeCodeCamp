---
id: 56533eb9ac21ba0edf2244b1
title: Compound Assignment With Augmented Multiplication
challengeType: 1
---

## Description
<section id='description'>
The <code>*=</code> operator multiplies a variable by a number.
<code>myVar = myVar * 5;</code>
will multiply <code>myVar</code> by <code>5</code>. This can be rewritten as: 
<code>myVar *= 5;</code>
</section>

## Instructions
<section id='instructions'>
Convert the assignments for <code>a</code>, <code>b</code>, and <code>c</code> to use the <code>*=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>a</code> should equal <code>25</code>
  testString: 'assert(a === 25, ''<code>a</code> should equal <code>25</code>'');'
- text: <code>b</code> should equal <code>36</code>
  testString: 'assert(b === 36, ''<code>b</code> should equal <code>36</code>'');'
- text: <code>c</code> should equal <code>46</code>
  testString: 'assert(c === 46, ''<code>c</code> should equal <code>46</code>'');'
- text: You should use the <code>*=</code> operator for each variable
  testString: 'assert(code.match(/\*=/g).length === 3, ''You should use the <code>*=</code> operator for each variable'');'
- text: Do not modify the code above the line
  testString: 'assert(/var a = 5;/.test(code) && /var b = 12;/.test(code) && /var c = 4\.6;/.test(code), ''Do not modify the code above the line'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a = a * 5;
b = 3 * b;
c = c * 10;


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
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```

</section>
