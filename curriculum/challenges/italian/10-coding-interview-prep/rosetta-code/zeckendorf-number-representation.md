---
id: 594810f028c0303b75339ad6
title: Rappresentazione di Zeckendorf dei numeri
challengeType: 1
forumTopicId: 302346
dashedName: zeckendorf-number-representation
---

# --description--

Così come i numeri possono essere rappresentati in una notazione posizionale come somme di multipli delle potenze di dieci (decimali) o due (binario), tutti gli interi positivi possono essere rappresentati come la somma di una o zero volte i membri distinti della serie di Fibonacci. Ricorda che i primi sei numeri distinti di Fibonacci sono: `1, 2, 3, 5, 8, 13`.

Il numero decimale undici può essere scritto come `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` o `010100` nella notazione posizionale in cui le colonne rappresentano la moltiplicazione per un particolare membro della sequenza. Gli zeri iniziali sono caduti in modo che 11 decimale diventa `10100`. 10100 non è l'unico modo per formare 11 dai numeri di Fibonacci: anche `0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` o 010011 rappresenta il decimale 11. Per un vero numero di Zeckendorf c'è la restrizione che *non possono essere utilizzati due numeri consecutivi di Fibonacci* che porta alla precedente soluzione unica.

# --instructions--

Scrivi una funzione che genera e restituisce la rappresentazione di Zeckendorf del numero `n`.

# --hints--

`zeckendorf` dovrebbe essere una funzione.

```js
assert.equal(typeof zeckendorf, 'function');
```

`zeckendorf(0)` dovrebbe restituire `0`.

```js
assert.equal(zeckendorf(0), 0);

```

`zeckendorf(1)` dovrebbe restituire `1`.

```js
assert.equal(zeckendorf(1), 1);
```

`zeckendorf(2)` dovrebbe restituire `10`.

```js
assert.equal(zeckendorf(2), 10);
```

`zeckendorf(3)` dovrebbe restituire `100`.

```js
assert.equal(zeckendorf(3), 100);
```

`zeckendorf(4)` dovrebbe restituire `101`.

```js
assert.equal(zeckendorf(4), 101);
```

`zeckendorf(5)` dovrebbe restituire `1000`.

```js
assert.equal(zeckendorf(5), 1000);
```

`zeckendorf(6)` dovrebbe restituire `1001`.

```js
assert.equal(zeckendorf(6), 1001);
```

`zeckendorf(7)` dovrebbe restituire `1010`.

```js
assert.equal(zeckendorf(7), 1010);
```

`zeckendorf(8)` dovrebbe restituire `10000`.

```js
assert.equal(zeckendorf(8), 10000);
```

`zeckendorf(9)` dovrebbe restituire `10001`.

```js
assert.equal(zeckendorf(9), 10001);
```

`zeckendorf(10)` dovrebbe restituire `10010`.

```js
assert.equal(zeckendorf(10), 10010);
```

`zeckendorf(11)` dovrebbe restituire `10100`.

```js
assert.equal(zeckendorf(11), 10100);
```

`zeckendorf(12)` dovrebbe restituire `10101`.

```js
assert.equal(zeckendorf(12), 10101);
```

`zeckendorf(13)` dovrebbe restituire `100000`.

```js
assert.equal(zeckendorf(13), 100000);
```

`zeckendorf(14)` dovrebbe restituire `100001`.

```js
assert.equal(zeckendorf(14), 100001);
```

`zeckendorf(15)` dovrebbe restituire `100010`.

```js
assert.equal(zeckendorf(15), 100010);
```

`zeckendorf(16)` dovrebbe restituire `100100`.

```js
assert.equal(zeckendorf(16), 100100);
```

`zeckendorf(17)` dovrebbe restituire `100101`.

```js
assert.equal(zeckendorf(17), 100101);
```

`zeckendorf(18)` dovrebbe restituire `101000`.

```js
assert.equal(zeckendorf(18), 101000);
```

`zeckendorf(19)` dovrebbe restituire `101001`.

```js
assert.equal(zeckendorf(19), 101001);
```

`zeckendorf(20)` dovrebbe restituire `101010`.

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
