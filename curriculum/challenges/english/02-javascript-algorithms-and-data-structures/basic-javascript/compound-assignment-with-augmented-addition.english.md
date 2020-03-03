---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
---

## Description
<section id='description'>
In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:
<code>myVar = myVar + 5;</code>
to add <code>5</code> to <code>myVar</code>. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.
One such operator is the <code>+=</code> operator.

```js
var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6
```

</section>

## Instructions
<section id='instructions'>
Convert the assignments for <code>a</code>, <code>b</code>, and <code>c</code> to use the <code>+=</code> operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code> should equal <code>15</code>.
    testString: assert(a === 15);
  - text: <code>b</code> should equal <code>26</code>.
    testString: assert(b === 26);
  - text: <code>c</code> should equal <code>19</code>.
    testString: assert(c === 19);
  - text: You should use the <code>+=</code> operator for each variable.
    testString: assert(code.match(/\+=/g).length === 3);
  - text: You should not modify the code above the specified comment.
    testString: assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
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
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;
```

</section>
