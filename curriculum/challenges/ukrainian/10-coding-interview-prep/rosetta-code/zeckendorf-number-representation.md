---
id: 594810f028c0303b75339ad6
title: Подання Цекендорфа
challengeType: 1
forumTopicId: 302346
dashedName: zeckendorf-number-representation
---

# --description--

Так само як числа можуть бути представлені в позиційній нотації як суми кратних степенів десяти (десяткових) або двох (двійкових); всі додатні цілі числа можна єдиним чином представити у вигляді суми одного або декількох різних чисел Фібоначчі. Нагадаємо, що перші шість різних чисел Фібоначчі дорівнюють: `1, 2, 3, 5, 8, 13`.

Десяткове число 11 можна записати як `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` або `010100` у позиційній нотації, де стовпці представляють множення на певний елемент послідовності. Початкові нулі упущено, тому десяткові числа стають `10100`. 10100 не єдиний спосіб утворити 11 з чисел Фібоначчі, однак`0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` або 010011 також утворює число 11. Для справжнього числа Цекендорфа існує додаткова умова, при якій *не можна використовувати два послідовних числа Фібоначчі*, що призводить до попереднього унікального рішення.

# --instructions--

Напишіть функцію, яка створює і повертає подання Цекендорфа для чисел у вигляді `n`.

# --hints--

`zeckendorf` має бути функцією.

```js
assert.equal(typeof zeckendorf, 'function');
```

`zeckendorf(0)` має повернути `0`.

```js
assert.equal(zeckendorf(0), 0);

```

`zeckendorf(1)` має повернути `1`.

```js
assert.equal(zeckendorf(1), 1);
```

`zeckendorf(2)` має повернути `10`.

```js
assert.equal(zeckendorf(2), 10);
```

`zeckendorf(3)` має повернути `100`.

```js
assert.equal(zeckendorf(3), 100);
```

`zeckendorf(4)` має повернути `101`.

```js
assert.equal(zeckendorf(4), 101);
```

`zeckendorf(5)` має повернути `1000`.

```js
assert.equal(zeckendorf(5), 1000);
```

`zeckendorf(6)` має повернути `1001`.

```js
assert.equal(zeckendorf(6), 1001);
```

`zeckendorf(7)` має повернути `1010`.

```js
assert.equal(zeckendorf(7), 1010);
```

`zeckendorf(8)` має повернути `10000`.

```js
assert.equal(zeckendorf(8), 10000);
```

`zeckendorf(9)` має повернути `10001`.

```js
assert.equal(zeckendorf(9), 10001);
```

`zeckendorf(10)` має повернути `10010`.

```js
assert.equal(zeckendorf(10), 10010);
```

`zeckendorf(11)` має повернути `10100`.

```js
assert.equal(zeckendorf(11), 10100);
```

`zeckendorf(12)` має повернути `10101`.

```js
assert.equal(zeckendorf(12), 10101);
```

`zeckendorf(13)` має повернути `100000`.

```js
assert.equal(zeckendorf(13), 100000);
```

`zeckendorf(14)` має повернути `100001`.

```js
assert.equal(zeckendorf(14), 100001);
```

`zeckendorf(15)` має повернути `100010`.

```js
assert.equal(zeckendorf(15), 100010);
```

`zeckendorf(16)` має повернути `100100`.

```js
assert.equal(zeckendorf(16), 100100);
```

`zeckendorf(17)` має повернути `100101`.

```js
assert.equal(zeckendorf(17), 100101);
```

`zeckendorf(18)` має повернути `101000`.

```js
assert.equal(zeckendorf(18), 101000);
```

`zeckendorf(19)` має повернути `101001`.

```js
assert.equal(zeckendorf(19), 101001);
```

`zeckendorf(20)` має повернути `101010`.

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
