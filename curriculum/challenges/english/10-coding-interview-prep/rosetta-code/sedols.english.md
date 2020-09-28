---
title: SEDOLs
id: 59d9c6bc214c613ba73ff012
challengeType: 5
forumTopicId: 302305
---

## Description
<section id='description'>

For each number list of 6-digit <a href="https://en.wikipedia.org/wiki/SEDOL" title="wp: SEDOL" target="_blank">SEDOL</a>s, calculate and append the checksum digit.
That is, given the input string on the left, your function should return the corresponding string on the right:
<pre>
710889 => 7108899
B0YBKJ => B0YBKJ7
406566 => 4065663
B0YBLH => B0YBLH2
228276 => 2282765
B0YBKL => B0YBKL9
557910 => 5579107
B0YBKR => B0YBKR5
585284 => 5852842
B0YBKT => B0YBKT7
B00030 => B000300
</pre>
Check that each input is correctly formed, especially with respect to valid characters allowed in a SEDOL string. Your function should return <code>null</code> on an invalid input.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sedol</code> should be a function.
    testString: assert(typeof sedol === 'function');
  - text: <code>sedol('a')</code> should return null.
    testString: assert(sedol('a') === null);
  - text: <code>sedol('710889')</code> should return '7108899'.
    testString: assert(sedol('710889') === '7108899');
  - text: <code>sedol('BOATER')</code> should return null.
    testString: assert(sedol('BOATER') === null);
  - text: <code>sedol('228276')</code> should return '2282765'.
    testString: assert(sedol('228276') === '2282765');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sedol(input) {

  return true;
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function sedol(input) {
  const checkDigit = sedolCheckDigit(input);
  if (checkDigit !== null) {
    return input + checkDigit;
  }
  return null;
}

const weight = [1, 3, 1, 7, 3, 9, 1];
function sedolCheckDigit(char6) {
  if (char6.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/) === -1) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < char6.length; i++) {
    sum += weight[i] * parseInt(char6.charAt(i), 36);
  }
  const check = (10 - (sum % 10)) % 10;
  return check.toString();
}

```

</section>
