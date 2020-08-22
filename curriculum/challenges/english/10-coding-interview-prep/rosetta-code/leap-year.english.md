---
id: 5a23c84252665b21eecc7ede
title: Leap year
challengeType: 5
isHidden: false
forumTopicId: 302300
---

## Description

<section id='description'>

Determine whether a given year is a leap year in the Gregorian calendar.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>isLeapYear</code> should be a function.
    testString: assert(typeof isLeapYear == 'function');
  - text: <code>isLeapYear()</code> should return a boolean.
    testString: assert(typeof isLeapYear(2018) == 'boolean');
  - text: <code>isLeapYear(2018)</code> should return <code>false</code>.
    testString: assert.equal(isLeapYear(2018), false);
  - text: <code>isLeapYear(2016)</code> should return <code>true</code>.
    testString: assert.equal(isLeapYear(2016), true);
  - text: <code>isLeapYear(2000)</code> should return <code>true</code>.
    testString: assert.equal(isLeapYear(2000), true);
  - text: <code>isLeapYear(1900)</code> should return <code>false</code>.
    testString: assert.equal(isLeapYear(1900), false);
  - text: <code>isLeapYear(1996)</code> should return <code>true</code>.
    testString: assert.equal(isLeapYear(1996), true);
  - text: <code>isLeapYear(1800)</code> should return <code>false</code>.
    testString: assert.equal(isLeapYear(1800), false);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function isLeapYear(year) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
```

</section>
