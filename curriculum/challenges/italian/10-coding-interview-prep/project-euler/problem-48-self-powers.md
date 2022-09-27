---
id: 5900f39c1000cf542c50feaf
title: 'Problema 48: auto-potenze'
challengeType: 1
forumTopicId: 302157
dashedName: problem-48-self-powers
---

# --description--

La serie 1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 10<sup>10</sup> = 10405071317.

Trova le ultime dieci cifre della serie 1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 1000<sup>1000</sup>.

# --hints--

`selfPowers(10, 3)` dovrebbe restituire un numero.

```js
assert(typeof selfPowers(10, 3) === 'number');
```

`selfPowers(10, 3)` dovrebbe restituire 317.

```js
assert.strictEqual(selfPowers(10, 3), 317);
```

`selfPowers(150, 6)` dovrebbe restituire 29045.

```js
assert.strictEqual(selfPowers(150, 6), 29045);
```

`selfPowers(673, 7)` dovrebbe restituire 2473989.

```js
assert.strictEqual(selfPowers(673, 7), 2473989);
```

`selfPowers(1000, 10)` dovrebbe restituire 9110846700.

```js
assert.strictEqual(selfPowers(1000, 10), 9110846700);
```

# --seed--

## --seed-contents--

```js
function selfPowers(power, lastDigits) {

  return true;
}

selfPowers(1000, 10);
```

# --solutions--

```js
function selfPowers(power, lastDigits) {
  let sum = 0;
  const modulo = Math.pow(10, lastDigits);

  for (let i = 1; i <= power; i++) {
    let temp = i;
    for (let j = 1; j < i; j++) {
      temp *= i;
      temp %= modulo;
    }

    sum += temp;
    sum %= modulo;
  }

  return sum;
}
```
