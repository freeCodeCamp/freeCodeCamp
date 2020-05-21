---
title: Date manipulation
id: 5966c21cf732a95f1b67dd28
challengeType: 5
isHidden: false
forumTopicId: 302244
---

## Description
<section id='description'>
Given a date string in EST, output the given date as a string with 12 hours added to the time. Time zone should be preserved.
Example input: <code>"March 7 2009 7:30pm EST"</code>
Example output: <code>"March 8 2009 7:30am EST"</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add12Hours</code> should be a function.
    testString: assert(typeof add12Hours === 'function');
  - text: <code>add12Hours(dateString)</code> should return a string.
    testString: assert(typeof add12Hours('January 17 2017 11:43am EST') === 'string');
  - text: <code>add12Hours("January 17 2017 11:43am EST")</code> should return <code>"January 17 2017 11:43pm EST"</code>
    testString: assert(add12Hours('January 17 2017 11:43am EST') === 'January 17 2017 11:43pm EST');
  - text: Should handle day change. <code>add12Hours("March 7 2009 7:30pm EST")</code> should return <code>"March 8 2009 7:30am EST"</code>
    testString: assert(add12Hours('March 7 2009 7:30pm EST') === 'March 8 2009 7:30am EST');
  - text: Should handle month change in a leap years. <code>add12Hours("February 29 2004 9:15pm EST")</code> should return <code>"March 1 2004 9:15am EST"</code>
    testString: assert(add12Hours('February 29 2004 9:15pm EST') === 'March 1 2004 9:15am EST');
  - text: Should handle month change in a common years. <code>add12Hours("February 28 1999 3:15pm EST")</code> should return <code>"March 1 1999 3:15am EST"</code>
    testString: assert(add12Hours('February 28 1999 3:15pm EST') === 'March 1 1999 3:15am EST');
  - text: Should handle year change. <code>add12Hours("December 31 2020 1:45pm EST")</code> should return <code>"January 1 2021 1:45am EST"</code>
    testString: assert(add12Hours('December 31 2020 1:45pm EST') === 'January 1 2021 1:45am EST');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add12Hours(dateString) {
  // Good luck!
  return true;
}
```

</div>

</section>

## Solution
<section id='solution'>


```js
function add12Hours(dateString) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  // Get the parts of the string
  const parts = dateString.split(' ');
  const month = months.indexOf(parts[0]);
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  const time = parts[3].split(':');
  let hours = parseInt(time[0], 10);
  if (time[1].slice(-2) === 'pm') {
    hours += 12;
  }
  const minutes = parseInt(time[1].slice(0, -2), 10);

  // Create a date with given parts, and updated hours
  const date = new Date();
  date.setFullYear(year, month, day);
  date.setHours(hours + 12);  // Add 12 hours
  date.setMinutes(minutes);

  let hoursOutput = date.getHours();
  let abbreviation = 'am';
  if (hoursOutput > 12) {
    hoursOutput -= 12;
    abbreviation = 'pm';
  }

  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${hoursOutput}:${date.getMinutes()}${abbreviation} EST`;
}

```

</section>
