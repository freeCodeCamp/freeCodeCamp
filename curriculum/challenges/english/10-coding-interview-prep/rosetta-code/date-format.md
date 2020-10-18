---
title: Date format
id: 59669d08d75b60482359409f
challengeType: 5
forumTopicId: 302243
---

## Description
<section id='description'>
Return an array with the current date in the formats:
<ul>
  <li>2007-11-23</li>
  <li>Friday, November 23, 2007</li>
</ul>
Example output: <code>['2007-11-23', 'Friday, November 23, 2007']</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getDateFormats</code> should be a function.
    testString: assert(typeof getDateFormats === 'function');
  - text: <code>getDateFormats</code> should return an object.
    testString: assert(typeof getDateFormats() === 'object');
  - text: <code>getDateFormats</code> should return an array with 2 elements.
    testString: assert(getDateFormats().length === 2);
  - text: <code>getDateFormats</code> should return the correct date in the right format
    testString: assert.deepEqual(getDateFormats(), dates, equalsMessage);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getDateFormats() {

  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const getDateSolution = () => {
  const date = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const fmt1 = `${date.getFullYear()}-${(1 + date.getMonth())}-${date.getDate()}`;
  const fmt2 = `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return [fmt1, fmt2];
};

const dates = getDateSolution();
const equalsMessage = `message: <code>getDataFormats()</code> should return <code>["${dates[0]}", "${dates[1]}"]</code>.`;
```

</div>

</section>

## Solution
<section id='solution'>


```js
function getDateFormats() {
  const date = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const fmt1 = `${date.getFullYear()}-${(1 + date.getMonth())}-${date.getDate()}`;
  const fmt2 = `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return [fmt1, fmt2];
}

```

</section>
