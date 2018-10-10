---
title: Define a primitive data type
id: 597089c87eec450c68aa1643
challengeType: 5
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
    testString: 'assert(typeof Num === "function", "<code>Num</code> should be a function.");'
  - text: ''
    testString: 'assert(typeof (new Num(4)) === "object", "<code>new Num(4)</code> should return an object.");'
  - text: ''
    testString: 'assert(throws(() => new Num("test"), TypeError, "Not a Number"), "<code>new Num(\"test\")</code> should throw a TypeError with message \"Not a Number\".");'
  - text: ''
    testString: 'assert(throws(() => new Num(0), TypeError, "Out of range"), "<code>new Num(0)</code> should throw a TypeError with message \"Out of range\".");'
  - text: ''
    testString: 'assert(throws(() => new Num(-5), TypeError, "Out of range"), "<code>new Num(-5)</code> should throw a TypeError with message \"Out of range\".");'
  - text: ''
    testString: 'assert(throws(() => new Num(11), TypeError, "Out of range"), "<code>new Num(10)</code> should throw a TypeError with message \"Out of range\".");'
  - text: ''
    testString: 'assert(throws(() => new Num(20), TypeError, "Out of range"), "<code>new Num(20)</code> should throw a TypeError with message \"Out of range\".");'
  - text: ''
    testString: 'assert.equal(new Num(3) + new Num(4), 7, "<code>new Num(3) + new Num(4)</code> should equal 7.");'
  - text: ''
    testString: 'assert.equal(new Num(3) - new Num(4), -1, "<code>new Num(3) - new Num(4)</code> should equal -1.");'
  - text: ''
    testString: 'assert.equal(new Num(3) * new Num(4), 12, "<code>new Num(3) * new Num(4)</code> should equal 12.");'
  - text: ''
    testString: 'assert.equal(new Num(3) / new Num(4), 0.75, "<code>new Num(3) / new Num(4)</code> should equal 0.75.");'
  - text: ''
    testString: 'assert(new Num(3) < new Num(4), "<code>new Num(3) < new Num(4)</code> should be true.");'
  - text: ''
    testString: 'assert(!(new Num(3) > new Num(4)), "<code>new Num(3) > new Num(4)</code> should be false.");'
  - text: ''
    testString: 'assert.equal((new Num(5)).toString(), "5", "<code>(new Num(5)).toString()</code> should return \"5\"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Num (n) {
  // Good luck!
  return n;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
