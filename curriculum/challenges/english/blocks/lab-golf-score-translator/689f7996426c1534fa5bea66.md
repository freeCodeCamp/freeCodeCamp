---
id: 689f7996426c1534fa5bea66
title: Build a Golf Score Translator
challengeType: 26
dashedName: build-a-golf-score-translator
---

# --description--

In the game of Golf, each hole has a `par`, meaning the average number of `strokes` a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below `par` your `strokes` are, there is a different nickname.

In this lab, you will write a function that converts the `par` and `strokes` to their nickname. 

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a function named `golfScore`.
1. `golfScore` should take two numeric arguments, which are the par for the course and the amount of strokes made.
1. `golfScore` should return a string.
1. `golfScore` should return `"Hole-in-one!"` if `strokes` is `1`. 
1. `golfScore` should return `"Eagle"` if `strokes` is less than or equal to `par` minus `2`.
1. `golfScore` should return `"Birdie"` if `strokes` is equal to `par` minus `1`.
1. `golfScore` should return `"Par"` if `strokes` is equal to `par`. 
1. `golfScore` should return `"Bogey"` if `strokes` is equal to `par` plus `1`. 
1. `golfScore` should return `"Double Bogey"` if `strokes` is equal to `par` plus `2`. 
1. `golfScore` should return `"Go Home!"` if `strokes` is greater than or equal to `par` plus `3`. 

# --hints--

You should create a function named `golfScore`.

```js
assert.isFunction(golfScore);
```

`golfScore` should take two parameters.

```js
assert.lengthOf(golfScore, 2);
```

`golfScore` should return a string

```js
assert.isString(golfScore(4,1)); 
```

`golfScore(1, 1)` should return the string `Hole-in-one!`

```js
assert.strictEqual(golfScore(1,1), 'Hole-in-one!');
```

`golfScore(3, 1)` should return the string `Hole-in-one!`

```js
assert.strictEqual(golfScore(3,1), 'Hole-in-one!');
```

`golfScore(4, 1)` should return the string `Hole-in-one!`

```js
assert.strictEqual(golfScore(4,1), 'Hole-in-one!');
```

`golfScore(5, 1)` should return the string `Hole-in-one!`

```js
assert.strictEqual(golfScore(5,1), 'Hole-in-one!');
```

`golfScore(4, 2)` should return the string `Eagle`

```js
assert.strictEqual(golfScore(4,2), 'Eagle');
```

`golfScore(5, 2)` should return the string `Eagle`

```js
assert.strictEqual(golfScore(5,2), 'Eagle');
```

`golfScore(3, 2)` should return the string `Birdie`

```js
assert.strictEqual(golfScore(3,2), 'Birdie');
```

`golfScore(4, 3)` should return the string `Birdie`

```js
assert.strictEqual(golfScore(4,3), 'Birdie');
```

`golfScore(5, 4)` should return the string `Birdie`

```js
assert.strictEqual(golfScore(5,4), 'Birdie');
```

`golfScore(3, 3)` should return the string `Par`

```js
assert.strictEqual(golfScore(3,3), 'Par');
```

`golfScore(4, 4)` should return the string `Par`

```js
assert.strictEqual(golfScore(4,4), 'Par');
```

`golfScore(5, 5)` should return the string `Par`

```js
assert.strictEqual(golfScore(5,5), 'Par');
```

`golfScore(3, 4)` should return the string `Bogey`

```js
assert.strictEqual(golfScore(3,4), 'Bogey');
```

`golfScore(4, 5)` should return the string `Bogey`

```js
assert.strictEqual(golfScore(4,5), 'Bogey');
```

`golfScore(5, 6)` should return the string `Bogey`

```js
assert.strictEqual(golfScore(5,6), 'Bogey');
```

`golfScore(3, 5)` should return the string `Double Bogey`

```js
assert.strictEqual(golfScore(3,5), 'Double Bogey');
```

`golfScore(4, 6)` should return the string `Double Bogey`

```js
assert.strictEqual(golfScore(4,6), 'Double Bogey');
```

`golfScore(5, 7)` should return the string `Double Bogey`

```js
assert.strictEqual(golfScore(5,7), 'Double Bogey');
```

`golfScore(3, 7)` should return the string `Go Home!`

```js
assert.strictEqual(golfScore(3,7), 'Go Home!');
```

`golfScore(4, 8)` should return the string `Go Home!`

```js
assert.strictEqual(golfScore(4,8), 'Go Home!');
```

`golfScore(5, 9)` should return the string `Go Home!`

```js
assert.strictEqual(golfScore(5,9), 'Go Home!');
```

# --seed--

## --seed-contents--

```js
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

```

# --solutions--

```js
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  if (strokes <= par - 2) {
    return "Eagle";
  }

  if (strokes === par - 1) {
    return "Birdie";
  }

  if (strokes === par) {
    return "Par";
  }

  if (strokes === par + 1) {
    return "Bogey";
  }

  if(strokes === par + 2) {
    return "Double Bogey";
  }

  return "Go Home!";
}
```
