---
id: 5a23c84252665b21eecc7edc
title: Last Friday of each month
challengeType: 1
forumTopicId: 302299
dashedName: last-friday-of-each-month
---

# --description--

Write a function that returns the date of the last Friday of a given month for a given year.

# --hints--

`lastFriday` should be a function.

```js
assert(typeof lastFriday == 'function');
```

`lastFriday(2018, 1)` should return a number.

```js
assert(typeof lastFriday(2018, 1) == 'number');
```

`lastFriday(2018, 1)` should return `26`.

```js
assert.equal(lastFriday(2018, 1), 26);
```

`lastFriday(2017, 2)` should return `24`.

```js
assert.equal(lastFriday(2017, 2), 24);
```

`lastFriday(2012, 3)` should return `30`.

```js
assert.equal(lastFriday(2012, 3), 30);
```

`lastFriday(1900, 4)` should return `27`.

```js
assert.equal(lastFriday(1900, 4), 27);
```

`lastFriday(2000, 5)` should return `26`.

```js
assert.equal(lastFriday(2000, 5), 26);
```

`lastFriday(2006, 6)` should return `30`.

```js
assert.equal(lastFriday(2006, 6), 30);
```

`lastFriday(2010, 7)` should return `30`.

```js
assert.equal(lastFriday(2010, 7), 30);
```

`lastFriday(2005, 8)` should return `26`.

```js
assert.equal(lastFriday(2005, 8), 26);
```

# --seed--

## --seed-contents--

```js
function lastFriday(year, month) {

}
```

# --solutions--

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
