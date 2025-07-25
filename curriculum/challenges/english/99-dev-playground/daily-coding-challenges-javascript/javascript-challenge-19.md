---
id: 6821ebea237de8297eaee795
title: "JavaScript Challenge 19: Candlelight"
challengeType: 28
dashedName: javascript-challenge-19
---

# --description--

Given an integer representing the number of candles you start with, and an integer representing how many burned candles it takes to create a new one, return the number of candles you will have used after creating and burning as many as you can.

For example, if given 7 candles and it takes 2 burned candles to make a new one:

1. Burn 7 candles to get 7 leftovers,
2. Recycle 6 leftovers into 3 new candles (1 leftover remains),
3. Burn 3 candles to get 3 more leftovers (4 total),
4. Recycle 4 leftovers into 2 new candles,
5. Burn 2 candles to get 2 leftovers,
6. Recycle 2 leftovers into 1 new candle,
7. Burn 1 candle.

You will have burned 13 total candles in the example.

# --hints--

`burnCandles(7, 2)` should return `13`

```js
assert.equal(burnCandles(7, 2), 13);
```

`burnCandles(10, 5)` should return `12`

```js
assert.equal(burnCandles(10, 5), 12);
```

`burnCandles(20, 3)` should return `29`

```js
assert.equal(burnCandles(20, 3), 29);
```

`burnCandles(17, 4)` should return `22`

```js
assert.equal(burnCandles(17, 4), 22);
```

`burnCandles(2345, 3)` should return `3517`

```js
assert.equal(burnCandles(2345, 3), 3517);
```

# --seed--

## --seed-contents--

```js
function burnCandles(candles, leftoversNeeded) {

  return candles;
}
```

# --solutions--

```js
function burnCandles(candles, leftoversNeeded) {
  let totalBurned = 0;
  let unusedLeftovers = 0;

  while (candles > 0) {
    totalBurned += candles;
    const leftovers = candles + unusedLeftovers;
    candles = Math.floor(leftovers / leftoversNeeded);
    unusedLeftovers = leftovers % leftoversNeeded;
  }

  return totalBurned;
}
```
