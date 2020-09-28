---
id: 56533eb9ac21ba0edf2244b0
title: Compound Assignment With Augmented Subtraction
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
---

## Description
<section id='description'>
Like the <code>+=</code> operator, <code>-=</code> subtracts a number from a variable.
<code>myVar = myVar - 5;</code>
will subtract <code>5</code> from <code>myVar</code>. This can be rewritten as:
<code>myVar -= 5;</code>
</section>

## Instructions
<section id='instructions'>
Convert the assignments for <code>a</code>, <code>b</code>, and <code>c</code> to use the <code>-=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should equal <code>5</code>.
    testString: assert(a === 5);
  - text: <code>b</code> should equal <code>-6</code>.
    testString: assert(b === -6);
  - text: <code>c</code> should equal <code>2</code>.
    testString: assert(c === 2);
  - text: You should use the <code>-=</code> operator for each variable.
    testString: assert(code.match(/-=/g).length === 3);
  - text: You should not modify the code above the specified comment.
    testString: assert(/var a = 11;/.test(code) && /var b = 9;/.test(code) && /var c = 3;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;


```

</section>
