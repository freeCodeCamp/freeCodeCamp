---
id: 56533eb9ac21ba0edf2244b2
title: Compound Assignment With Augmented Division
challengeType: 1
---

## Description
<section id='description'>
The <code>/=</code> operator divides a variable by another number.
<code>myVar = myVar / 5;</code>
Will divide <code>myVar</code> by <code>5</code>. This can be rewritten as:
<code>myVar /= 5;</code>
</section>

## Instructions
<section id='instructions'>
Convert the assignments for <code>a</code>, <code>b</code>, and <code>c</code> to use the <code>/=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>a</code> should equal <code>4</code>
  testString: 'assert(a === 4, "<code>a</code> should equal <code>4</code>");'
- text: <code>b</code> should equal <code>27</code>
  testString: 'assert(b === 27, "<code>b</code> should equal <code>27</code>");'
- text: <code>c</code> should equal <code>3</code>
  testString: 'assert(c === 3, "<code>c</code> should equal <code>3</code>");'
- text: You should use the <code>/=</code> operator for each variable
  testString: 'assert(code.match(/\/=/g).length === 3, "You should use the <code>/=</code> operator for each variable");'
- text: Do not modify the code above the line
  testString: 'assert(/var a = 48;/.test(code) && /var b = 108;/.test(code) && /var c = 33;/.test(code), "Do not modify the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a = a / 12;
b = b / 4;
c = c / 11;

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
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;
```

</section>
