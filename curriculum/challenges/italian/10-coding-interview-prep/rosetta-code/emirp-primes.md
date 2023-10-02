---
id: 599d0ba974141b0f508b37d5
title: Numeri primi emirp
challengeType: 1
forumTopicId: 302253
dashedName: emirp-primes
---

# --description--

Gli emirp (numero primo in inglese, **prime**, scritto al contrario) sono primi che quando invertiti (nella loro rappresentazione decimale) sono un numero primo diverso.

# --instructions--

Scrivi una funzione che:

<ul>
  <li>Mostra i primi <code>n</code> numeri emirp.</li>
  <li>Mostra i numeri emirp in un intervallo.</li>
  <li>Mostra il numero di emirp presenti in un intervallo.</li>
  <li>Mostra l'<code>n<sup>mo</sup></code> numero emirp.</li>
</ul>

La funzione dovrebbe accettare due parametri. Il primo riceverà `n` o l'intervallo sotto forma di array. Il secondo riceverà un booleano, che specifica se la funzione restituisce gli emirp come array o un singolo numero (il numero di primi nell'intervallo o l'<code>n<sup>mo</sup></code> primo). A seconda dei parametri la funzione dovrebbe restituire un array o un numero.

# --hints--

`emirps` dovrebbe essere una funzione.

```js
assert(typeof emirps === 'function');
```

`emirps(20,true)` dovrebbe restituire `[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]`

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

`emirps(1000)` dovrebbe restituire `70529`

```js
assert.deepEqual(emirps(1000), 70529);
```

`emirps([7700,8000],true)` dovrebbe restituire `[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]`

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

`emirps([7700,8000],false)` dovrebbe restituire `11`

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
