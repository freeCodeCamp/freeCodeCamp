---
id: 5900f37f1000cf542c50fe92
challengeType: 5
title: 'Problem 19: Counting Sundays'
forumTopicId: 301827
---

## Description
<section id='description'>

You are given the following information, but you may prefer to do some research for yourself.

<ul>
  <li>1 Jan 1900 was a Monday.</li>
  <li>Thirty days has September,<br>April, June and November.<br>All the rest have thirty-one,<br>Saving February alone,<br>Which has twenty-eight, rain or shine.<br>And on leap years, twenty-nine.</li>
  <li>A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.</li>
</ul>

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countingSundays(1943, 1946)</code> should return a number.
    testString: assert(typeof countingSundays(1943, 1946) === 'number');
  - text: <code>countingSundays(1943, 1946)</code> should return 6.
    testString: assert.strictEqual(countingSundays(1943, 1946), 6);
  - text: <code>countingSundays(1995, 2000)</code> should return 10.
    testString: assert.strictEqual(countingSundays(1995, 2000), 10);
  - text: <code>countingSundays(1901, 2000)</code> should return 171.
    testString: assert.strictEqual(countingSundays(1901, 2000), 171);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countingSundays(firstYear, lastYear) {

  return true;
}

countingSundays(1943, 1946);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function countingSundays(firstYear, lastYear) {
  let sundays = 0;

  for (let year = firstYear; year <= lastYear; year++) {
    for (let month = 0; month <= 11; month++) {
      const thisDate = new Date(year, month, 1);
      if (thisDate.getDay() === 0) {
        sundays++;
      }
    }
  }
  return sundays;
}
```

</section>
