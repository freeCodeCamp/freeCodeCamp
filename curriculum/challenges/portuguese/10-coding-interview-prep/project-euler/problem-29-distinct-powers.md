---
id: 5900f3891000cf542c50fe9c
title: 'Problema 29: Potências distintas'
challengeType: 1
forumTopicId: 301941
dashedName: problem-29-distinct-powers
---

# --description--

Considere todas as combinações de números inteiros de $a^b$ para 2 ≤ a ≤ 5 e 2 ≤ b ≤ 5:

<div style='padding-left: 4em;'>
  2<sup>2</sup>=4, 2<sup>3</sup>=8, 2<sup>4</sup>=16, 2<sup>5</sup>=32 <br>
  3<sup>2</sup>=9, 3<sup>3</sup>=27, 3<sup>4</sup>=81, 3<sup>5</sup>=243 <br>
  4<sup>2</sup>=16, 4<sup>3</sup>=64, 4<sup>4</sup>=256, 4<sup>5</sup>=1024 <br>
  5<sup>2</sup>=25, 5<sup>3</sup>=125, 5<sup>4</sup>=625, 5<sup>5</sup>=3125 <br>
</div>

Se eles forem colocados em ordem numérica, com quaisquer repetições removidas, obtemos a seguinte sequência de 15 termos distintos:

<div style='padding-left: 4em;'>
  4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125
</div>

Quantos termos distintos estão na sequência gerada por $a^b$ para 2 ≤ `a` ≤ `n` e 2 ≤ `b` ≤ `n`?

# --hints--

`distinctPowers(15)` deve retornar um número.

```js
assert(typeof distinctPowers(15) === 'number');
```

`distinctPowers(15)` deve retornar 177.

```js
assert.strictEqual(distinctPowers(15), 177);
```

`distinctPowers(20)` deve retornar 324.

```js
assert.strictEqual(distinctPowers(20), 324);
```

`distinctPowers(25)` deve retornar 519.

```js
assert.strictEqual(distinctPowers(25), 519);
```

`distinctPowers(30)` deve retornar 755.

```js
assert.strictEqual(distinctPowers(30), 755);
```

# --seed--

## --seed-contents--

```js
function distinctPowers(n) {

  return n;
}

distinctPowers(30);
```

# --solutions--

```js
const distinctPowers = (n) => {
  let list = [];
  for (let a=2; a<=n; a++) {
    for (let b=2; b<=n; b++) {
      let term = Math.pow(a, b);
      if (list.indexOf(term)===-1) list.push(term);
    }
  }
  return list.length;
};
```
