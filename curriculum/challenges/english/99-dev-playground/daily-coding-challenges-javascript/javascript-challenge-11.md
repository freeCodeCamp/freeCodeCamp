---
id: 68216eb60f957572e7c340c4
title: "JavaScript Challenge 11: Mile Pace"
challengeType: 28
dashedName: javascript-challenge-11
---

# --description--

Given a number of miles ran, and a time in MM:SS (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format MM:SS.

- Add leading zeros when needed.

# --hints--

`milePace(3, "24:00")` should return `08:00`.

```js
assert.equal(milePace(3, "24:00"), "08:00");
```

`milePace(1, "06:45")` should return `06:45`.

```js
assert.equal(milePace(1, "06:45"), "06:45");
```

`milePace(2, "07:00")` should return `03:30`.

```js
assert.equal(milePace(2, "07:00"), "03:30");
```

`milePace(26.2, "120:35")` should return `04:36`.

```js
assert.equal(milePace(26.2, "120:35"), "04:36");
```

# --seed--

## --seed-contents--

```js
function milePace(miles, duration) {

  return miles;
}
```

# --solutions--

```js
function milePace(miles, duration) {
  const [minutes, seconds] = duration.split(':').map(Number);
  const totalSeconds = minutes * 60 + seconds;
  const avgSecondsPerMile = totalSeconds / miles;

  const avgMinutes = Math.floor(avgSecondsPerMile / 60);
  const avgSeconds = Math.round(avgSecondsPerMile % 60);

  const paddedMinutes = avgMinutes.toString().padStart(2, '0');
  const paddedSeconds = avgSeconds.toString().padStart(2, '0');

  return `${paddedMinutes}:${paddedSeconds}`;
}
```
