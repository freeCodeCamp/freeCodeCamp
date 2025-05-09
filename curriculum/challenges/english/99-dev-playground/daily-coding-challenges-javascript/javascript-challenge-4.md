---
id: 681cb1afdab50c87ddb2e515
title: "JavaScript Challenge 4: S  P  A  C  E  J  A  M"
challengeType: 28
dashedName: javascript-challenge-4
---

# --description--

Given a string, remove all spaces from the string, then insert two spaces between every character and convert all letters to uppercase.

- The function should handle any characters.

# --hints--

`spaceJam("freeCodeCamp")` should return `F  R  E  E  C  O  D  E  C  A  M  P`

```js
assert.equal(spaceJam("freeCodeCamp"), "F  R  E  E  C  O  D  E  C  A  M  P");
```

`spaceJam("   free   Code   Camp   ")` should return `F  R  E  E  C  O  D  E  C  A  M  P`

```js
assert.equal(spaceJam("   free   Code   Camp   "), "F  R  E  E  C  O  D  E  C  A  M  P");
```

`spaceJam("Hello World?!")` should return `H  E  L  L  O  W  O  R  L  D  ?  !`

```js
assert.equal(spaceJam("Hello World?!"), "H  E  L  L  O  W  O  R  L  D  ?  !");
```

`spaceJam("C@t$ & D0g$")` should return `C  @  T  $  &  D  0  G  $`

```js
assert.equal(spaceJam("C@t$ & D0g$"), "C  @  T  $  &  D  0  G  $");
```

`spaceJam("allyourbase")` should return `A  L  L  Y  O  U  R  B  A  S  E`

```js
assert.equal(spaceJam("all your base"), "A  L  L  Y  O  U  R  B  A  S  E");
```

# --seed--

## --seed-contents--

```js
function spaceJam(str) {

  return true;
}
```

# --solutions--

```js
function spaceJam(str) {

  return str.toUpperCase().replace(/\s+/g, '').split('').join('  ');
}
```
