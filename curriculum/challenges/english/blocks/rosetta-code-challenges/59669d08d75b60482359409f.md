---
id: 59669d08d75b60482359409f
title: Date format
challengeType: 1
forumTopicId: 302243
dashedName: date-format
---

# --description--

Return an array with two date strings of the current date with the following specifications:

- The first string's date order should be the year number, month number, and day number separated by dashes (`-`).
- The first string's year should be four digits in length.
- The first string's month and day should not contain any leading zeros.
- The second string's weekday and month names should not be abbreviated.
- The second string's day should not contain any leading zeros.

Example outputs:

```js
['2007-11-23', 'Friday, November 23, 2007']
['2021-3-2', 'Tuesday, March 2, 2021']
```

# --hints--

`getDateFormats` should be a function.

```js
assert(typeof getDateFormats === 'function');
```

`getDateFormats` should return an object.

```js
assert(typeof getDateFormats() === 'object');
```

`getDateFormats` should return an array with 2 elements.

```js
assert(getDateFormats().length === 2);
```

`getDateFormats` should return the correct date in the right format

```js
assert.deepEqual(getDateFormats(), dates, equalsMessage);
```

# --seed--

## --after-user-code--

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

## --seed-contents--

```js
function getDateFormats() {

  return true;
}
```

# --solutions--

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
