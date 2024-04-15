---
id: 5966c21cf732a95f1b67dd28
title: Datumsmanipulation
challengeType: 1
forumTopicId: 302244
dashedName: date-manipulation
---

# --description--

Given a date string in EST, output the given date as a string with 12 hours added to the time. Time zone should be preserved.

Beispiel Eingabe: `"March 6 2009 7:30pm EST"`

Beispiel Output: `"March 7 2009 7:30am EST"`

# --hints--

`add12Hours` sollte eine Funktion sein.

```js
assert(typeof add12Hours === 'function');
```

`add12Hours(dateString)` sollte einen String zurückgeben.

```js
assert(typeof add12Hours('January 17 2017 11:43am EST') === 'string');
```

`add12Hours("January 17 2017 11:43am EST")` sollte `"January 17 2017 11:43pm EST"` zurückgeben

```js
assert(
  add12Hours('January 17 2017 11:43am EST') === 'January 17 2017 11:43pm EST'
);
```

Sollte den Tageswechsel berücksichtigen. `add12Hours("March 6 2009 7:30pm EST")` sollte `"March 7 2009 7:30am EST"` zurückgeben

```js
assert(add12Hours('March 6 2009 7:30pm EST') === 'March 7 2009 7:30am EST');
```

Sollte den Monatswechsel in einem Schaltjahr berücksichtigen. `add12Hours("February 29 2004 9:15pm EST")` sollte `"March 1 2004 9:15am EST"` zurückgeben

```js
assert(add12Hours('February 29 2004 9:15pm EST') === 'March 1 2004 9:15am EST');
```

Sollte den Monatswechsel in einem üblichen Jahr berücksichtigen. `add12Hours("February 28 1999 3:15pm EST")` sollte `"March 1 1999 3:15am EST"` zurückgeben

```js
assert(add12Hours('February 28 1999 3:15pm EST') === 'March 1 1999 3:15am EST');
```

Sollte den Jahreswechsel berücksichtigen. `add12Hours("December 31 2020 1:45pm EST")` sollte `"January 1 2021 1:45am EST"` zurückgeben

```js
assert(
  add12Hours('December 31 2020 1:45pm EST') === 'January 1 2021 1:45am EST'
);
```

# --seed--

## --seed-contents--

```js
function add12Hours(dateString) {

  return true;
}
```

# --solutions--

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
