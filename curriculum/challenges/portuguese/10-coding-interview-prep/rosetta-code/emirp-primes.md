---
id: 599d0ba974141b0f508b37d5
title: Primos omirp
challengeType: 1
forumTopicId: 302253
dashedName: emirp-primes
---

# --description--

Um omirp (**primo** escrito ao contrário) é um número primo que, quando invertido (em sua representação decimal) é um número primo diferente.

# --instructions--

Escreva uma função que:

<ul>
  <li>Mostra os <code>n</code> primeiros números omirp.</li>
  <li>Mostra os números omirp em um intervalo.</li>
  <li>Mostra o número de omirps em um intervalo.</li>
  <li>Mostre o <code>n<sup>th</sup></code> (enésimo) número omirp.</li>
</ul>

A função deve receber dois parâmetros. O primeiro receberá `n` ou o intervalo como um array. O segundo receberá um booleano, que especifica se a função retorna os omirps como um array ou um único número - o número de primos no intervalo ou o <code>n<sup>th</sup></code> (enésimo) primo. De acordo com os parâmetros, a função deve retornar um array ou um número.

# --hints--

`emirps` deve ser uma função.

```js
assert(typeof emirps === 'function');
```

`emirps(20,true)` deve retornar `[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]`

```js
assert.deepEqual(emirps(20, true), [
  13,
  17,
  31,
  37,
  71,
  73,
  79,
  97,
  107,
  113,
  149,
  157,
  167,
  179,
  199,
  311,
  337,
  347,
  359,
  389
]);
```

`emirps(1000)` deve retornar `70529`

```js
assert.deepEqual(emirps(1000), 70529);
```

`emirps([7700,8000],true)` deve retornar `[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]`

```js
assert.deepEqual(emirps([7700, 8000], true), [
  7717,
  7757,
  7817,
  7841,
  7867,
  7879,
  7901,
  7927,
  7949,
  7951,
  7963
]);
```

`emirps([7700,8000],false)` deve retornar `11`

```js
assert.deepEqual(emirps([7700, 8000], false), 11);
```

# --seed--

## --seed-contents--

```js
function emirps(n) {

}
```

# --solutions--

```js
function emirps(num, showEmirps)
{
  const is_prime = function(n)
    {
    if (!(n % 2) || !(n % 3)) return false;
    let p = 1;
    while (p * p < n)
                    { if (n % (p += 4) == 0 || n % (p += 2) == 0)
                            { return false; } }
    return true;
  };
  const is_emirp = function(n) {
    const r = parseInt(n.toString().split('').reverse().join(''));
    return r != n && is_prime(n) && is_prime(r);
  };

  let i,
    arr = [];
  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (is_emirp(i)) arr.push(i);
    // first x emirps
    if (showEmirps) return arr;
    // xth emirp
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (is_emirp(i)) arr.push(i);
    // emirps between x .. y
    if (showEmirps) return arr;
    // number of emirps between x .. y
    return arr.length;
  }
}
```
