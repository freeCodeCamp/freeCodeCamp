---
id: 594810f028c0303b75339ad6
title: Zeckendorfsche Zahlendarstellung
challengeType: 1
forumTopicId: 302346
dashedName: zeckendorf-number-representation
---

# --description--

Just as numbers can be represented in a positional notation as sums of multiples of the powers of ten (decimal) or two (binary); all the positive integers can be represented as the sum of one or zero times the distinct members of the Fibonacci series. Recall that the first six distinct Fibonacci numbers are: `1, 2, 3, 5, 8, 13`.

Die Dezimalzahl elf kann als `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` oder `010100` in Stellenschreibweise geschrieben werden, wobei die Spalten die Multiplikation eines bestimmten Mitglieds der Sequenz darstellen. Führende Nullen werden weggelassen, sodass aus 11 dezimal `10100` wird. 10100 ist nicht die einzige Möglichkeit aus den Fibonacci-Zahlen 11 herzustellen, aber `0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` oder 010011 würden auch die Dezimalzahl 11 darstellen. Für eine echte Zeckendorf-Zahl gibt es die zusätzliche Einschränkung, dass *keine zwei aufeinanderfolgenden Fibonacci-Zahlen verwendet werden können*, was zu der früheren eindeutigen Lösung führt.

# --instructions--

Schreibe eine Funktion, die die Zeckendorfsche Zahlendarstellung von `n` erzeugt und zurückgibt.

# --hints--

`zeckendorf` sollte eine Funktion sein.

```js
assert.equal(typeof zeckendorf, 'function');
```

`zeckendorf(0)` sollte `0` zurückgeben.

```js
assert.equal(zeckendorf(0), 0);

```

`zeckendorf(1)` sollte `1` zurückgeben.

```js
assert.equal(zeckendorf(1), 1);
```

`zeckendorf(2)` sollte `10` zurückgeben.

```js
assert.equal(zeckendorf(2), 10);
```

`zeckendorf(3)` sollte `100` zurückgeben.

```js
assert.equal(zeckendorf(3), 100);
```

`zeckendorf(4)` sollte `101` zurückgeben.

```js
assert.equal(zeckendorf(4), 101);
```

`zeckendorf(5)` sollte `1000` zurückgeben.

```js
assert.equal(zeckendorf(5), 1000);
```

`zeckendorf(6)` sollte `1001` zurückgeben.

```js
assert.equal(zeckendorf(6), 1001);
```

`zeckendorf(7)` sollte `1010` zurückgeben.

```js
assert.equal(zeckendorf(7), 1010);
```

`zeckendorf(8)` sollte `10000` zurückgeben.

```js
assert.equal(zeckendorf(8), 10000);
```

`zeckendorf(9)` sollte `10001` zurückgeben.

```js
assert.equal(zeckendorf(9), 10001);
```

`zeckendorf(10)` sollte `10010` zurückgeben.

```js
assert.equal(zeckendorf(10), 10010);
```

`zeckendorf(11)` sollte `10100` zurückgeben.

```js
assert.equal(zeckendorf(11), 10100);
```

`zeckendorf(12)` sollte `10101` zurückgeben.

```js
assert.equal(zeckendorf(12), 10101);
```

`zeckendorf(13)` sollte `100000` zurückgeben.

```js
assert.equal(zeckendorf(13), 100000);
```

`zeckendorf(14)` sollte `100001` zurückgeben.

```js
assert.equal(zeckendorf(14), 100001);
```

`zeckendorf(15)` sollte `100010` zurückgeben.

```js
assert.equal(zeckendorf(15), 100010);
```

`zeckendorf(16)` sollte `100100` zurückgeben.

```js
assert.equal(zeckendorf(16), 100100);
```

`zeckendorf(17)` sollte `100101` zurückgeben.

```js
assert.equal(zeckendorf(17), 100101);
```

`zeckendorf(18)` sollte `101000` zurückgeben.

```js
assert.equal(zeckendorf(18), 101000);
```

`zeckendorf(19)` sollte `101001` zurückgeben.

```js
assert.equal(zeckendorf(19), 101001);
```

`zeckendorf(20)` sollte `101010` zurückgeben.

```js
assert.equal(zeckendorf(20), 101010);
```

# --seed--

## --seed-contents--

```js
function zeckendorf(n) {

}
```

# --solutions--

```js
// zeckendorf :: Int -> Int
function zeckendorf(n) {
  const f = (m, x) => (m < x ? [m, 0] : [m - x, 1]);
  return parseInt((n === 0 ? ([0]) :
    mapAccumL(f, n, reverse(
      tail(fibUntil(n))
    ))[1]).join(''));
}

// fibUntil :: Int -> [Int]
let fibUntil = n => {
  const xs = [];
  until(
      ([a]) => a > n,
      ([a, b]) => (xs.push(a), [b, a + b]), [1, 1]
  );
  return xs;
};

let mapAccumL = (f, acc, xs) => (
  xs.reduce((a, x) => {
    const pair = f(a[0], x);

    return [pair[0], a[1].concat(pair[1])];
  }, [acc, []])
);

let until = (p, f, x) => {
  let v = x;
  while (!p(v)) v = f(v);
  return v;
};

const tail = xs => (
   xs.length ? xs.slice(1) : undefined
);

const reverse = xs => xs.slice(0).reverse();
```
