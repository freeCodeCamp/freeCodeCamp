---
id: 691f7773cddba1caf1bf5ecc
title: "Challenge 133: Daylight Hours"
challengeType: 28
dashedName: challenge-133
---

# --description--

December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.

Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:

|Latitude|Daylight Hours|
|-|-|
|-90|24|
|-75|23|
|-60|21|
|-45|15|
|-30|13|
|-15|12|
|0|12|
|15|11|
|30|10|
|45|9|
|60|6|
|75|2|
|90|0|

- If the given latitude does not exactly match a table entry, use the value of the closest latitude.

# --hints--

`daylightHours(45)` should return `9`.

```js
assert.equal(daylightHours(45), 9);
```

`daylightHours(0)` should return `12`.

```js
assert.equal(daylightHours(0), 12);
```

`daylightHours(-90)` should return `24`.

```js
assert.equal(daylightHours(-90), 24);
```

`daylightHours(-10)` should return `12`.

```js
assert.equal(daylightHours(-10), 12);
```

`daylightHours(23)` should return `10`.

```js
assert.equal(daylightHours(23), 10);
```

`daylightHours(88)` should return `0`.

```js
assert.equal(daylightHours(88), 0);
```

`daylightHours(-33)` should return `13`.

```js
assert.equal(daylightHours(-33), 13);
```

`daylightHours(70)` should return `2`.

```js
assert.equal(daylightHours(70), 2);
```

# --seed--

## --seed-contents--

```js
function daylightHours(latitude) {

  return latitude;
}
```

# --solutions--

```js
function daylightHours(latitude) {
  const table = [
    { lat: -90, hours: 24 },
    { lat: -75, hours: 23 },
    { lat: -60, hours: 21 },
    { lat: -45, hours: 15 },
    { lat: -30, hours: 13 },
    { lat: -15, hours: 12 },
    { lat: 0, hours: 12 },
    { lat: 15, hours: 11 },
    { lat: 30, hours: 10 },
    { lat: 45, hours: 9 },
    { lat: 60, hours: 6 },
    { lat: 75, hours: 2 },
    { lat: 90, hours: 0 }
  ];

  let closest = table[0];

  for (const entry of table) {
    if (Math.abs(entry.lat - latitude) < Math.abs(closest.lat - latitude)) {
      closest = entry;
    }
  }

  return closest.hours;
}
```
