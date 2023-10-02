---
id: 5900f43a1000cf542c50ff4d
title: '問題 206: 隠された平方数'
challengeType: 1
forumTopicId: 301847
dashedName: problem-206-concealed-square
---

# --description--

「_」は 1 つの数を表すものとします。2 乗すると 1_2_3_4_5_6_7_8_9_0 の形になる唯一の正の整数を求めなさい。

# --hints--

`concealedSquare()` は `1389019170` を返す必要があります。

```js
assert.strictEqual(concealedSquare(), 1389019170);
```

# --seed--

## --seed-contents--

```js
function concealedSquare() {

  return true;
}

concealedSquare();
```

# --solutions--

```js
// Check if n**2 matches the pattern
function squareMatchs(n) {
  // Need BigInt due to size of values
  let nSquared = (BigInt(n) * BigInt(n)).toString();

  // Check if digits match pattern
  for (let i = 1; i <= 9; i++) {
    if (nSquared[2 * (i - 1)] != i) return false;
  }
  return true;
}

// Find integer whose square matches the pattern
function concealedSquare() {
  // Set bounds based upon max and min candidates
  const minSquareRoot = Math.floor(Math.sqrt(10203040506070809) / 10) * 10;
  const maxSquareRoot = Math.ceil(Math.sqrt(19293949596979899) / 10) * 10;

  for (let x = maxSquareRoot; x >= minSquareRoot; x -= 10) {
    // Note: 3*3 = 9 and 7*7 = 49 are only trailing digits
    //       that can produce 9 as trailing digit in square
    if (squareMatchs(x + 3)) return (x + 3)*10;
    if (squareMatchs(x + 7)) return (x + 7)*10;
  }
  return -1;
}
```
