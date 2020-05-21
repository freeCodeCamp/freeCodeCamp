---
id: 5a23c84252665b21eecc7edc
title: Last Friday of each month
challengeType: 5
isHidden: false
forumTopicId: 302299
---

## Description

<section id='description'>

Write a function that returns the date of the last Friday of a given month for a given year.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>lastFriday</code> should be a function.
    testString: assert(typeof lastFriday == 'function');
  - text: <code>lastFriday(2018, 1)</code> should return a number.
    testString: assert(typeof lastFriday(2018, 1) == 'number');
  - text: <code>lastFriday(2018, 1)</code> should return <code>26</code>.
    testString: assert.equal(lastFriday(2018, 1), 26);
  - text: <code>lastFriday(2017, 2)</code> should return <code>24</code>.
    testString: assert.equal(lastFriday(2017, 2), 24);
  - text: <code>lastFriday(2012, 3)</code> should return <code>30</code>.
    testString: assert.equal(lastFriday(2012, 3), 30);
  - text: <code>lastFriday(1900, 4)</code> should return <code>27</code>.
    testString: assert.equal(lastFriday(1900, 4), 27);
  - text: <code>lastFriday(2000, 5)</code> should return <code>26</code>.
    testString: assert.equal(lastFriday(2000, 5), 26);
  - text: <code>lastFriday(2006, 6)</code> should return <code>30</code>.
    testString: assert.equal(lastFriday(2006, 6), 30);
  - text: <code>lastFriday(2010, 7)</code> should return <code>30</code>.
    testString: assert.equal(lastFriday(2010, 7), 30);
  - text: <code>lastFriday(2005, 8)</code> should return <code>26</code>.
    testString: assert.equal(lastFriday(2005, 8), 26);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function lastFriday(year, month) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function lastFriday(year, month) {
  var i, last_day;
  i = 0;
  while (true) {
    last_day = new Date(year, month, i);
    if (last_day.getDay() === 5) {
      return last_day.getDate();
    }
    i -= 1;
  }
}
```

</section>
