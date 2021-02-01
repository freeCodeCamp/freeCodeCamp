---
id: 5900f3971000cf542c50feaa
title: 'Problem 43: Sub-string divisibility'
challengeType: 5
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d<sub>1</sub> be the 1<sup>st</sup> digit, d<sub>2</sub> be the 2<sup>nd</sup> digit, and so on. In this way, we note the following:

<ul>
  <li>d<sub>2</sub>d<sub>3</sub>d<sub>4</sub> = 406 is divisible by 2</li>
  <li>d<sub>3</sub>d<sub>4</sub>d<sub>5</sub> = 063 is divisible by 3</li>
  <li>d<sub>4</sub>d<sub>5</sub>d<sub>6</sub> = 635 is divisible by 5</li>
  <li>d<sub>5</sub>d<sub>6</sub>d<sub>7</sub> = 357 is divisible by 7</li>
  <li>d<sub>6</sub>d<sub>7</sub>d<sub>8</sub> = 572 is divisible by 11</li>
  <li>d<sub>7</sub>d<sub>8</sub>d<sub>9</sub> = 728 is divisible by 13</li>
  <li>d<sub>8</sub>d<sub>9</sub>d<sub>10</sub> = 289 is divisible by 17</li>
</ul>

Find the numbers of all 0 to 9 pandigital numbers with this property.

# --hints--

`substringDivisibility()` should return an array.

```js
assert(Array.isArray(substringDivisibility()));
```

`substringDivisibility()` should return [ 1430952867, 1460357289, 1406357289, 4130952867, 4160357289, 4106357289 ].

```js
assert.sameMembers(substringDivisibility(), [
  1430952867,
  1460357289,
  1406357289,
  4130952867,
  4160357289,
  4106357289
]);
```

You should not copy and return the array.

```js
assert(
  !__helpers
    .removeJSComments(code)
    .match(
      /(1430952867)|(1460357289)|(1406357289)|(4130952867)|(4160357289)|(4106357289)/
    )
);
```

# --seed--

## --seed-contents--

```js
function substringDivisibility() {

  return [];
}

substringDivisibility();
```

# --solutions--

```js
// solution required
```
