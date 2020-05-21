---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
---

## Description
<section id='description'>
The <dfn>remainder</dfn> operator <code>%</code> gives the remainder of the division of two numbers.
<strong>Example</strong>
<blockquote>5 % 2 = 1 because<br>Math.floor(5 / 2) = 2 (Quotient)<br>2 * 2 = 4<br>5 - 4 = 1 (Remainder)</blockquote>
<strong>Usage</strong><br>In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by <code>2</code>.
<blockquote>17 % 2 = 1 (17 is Odd)<br>48 % 2 = 0 (48 is Even)</blockquote>
<strong>Note</strong><br>The <dfn>remainder</dfn> operator is sometimes incorrectly referred to as  the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.
</section>

## Instructions
<section id='instructions'>
Set <code>remainder</code> equal to the remainder of <code>11</code> divided by <code>3</code> using the <dfn>remainder</dfn> (<code>%</code>) operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>remainder</code> should be initialized
    testString: assert(/var\s+?remainder/.test(code));
  - text: The value of <code>remainder</code> should be <code>2</code>
    testString: assert(remainder === 2);
  - text: You should use the <code>%</code> operator
    testString: assert(/\s+?remainder\s*?=\s*?.*%.*;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line

var remainder;

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(y){return 'remainder = '+y;})(remainder);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var remainder =  11 % 3;
```

</section>
