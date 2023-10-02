---
id: 5949b579404977fbaefcd736
title: I 9 miliardi di nomi di Dio
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

Questa sfida è una variazione della storia breve scritta da Arthur C. Clarke.

(I risolutori dovrebbero essere consapevoli delle consequenze di completare questa sfida)

In dettaglio, per specificare cosa si intende per "nome":

<ul>
  <li>Il numero 1 ha 1 nome "1".</li>
  <li>Il numero 2 ha 2 nomi "1+1" e "2".</li>
  <li>Il numero 3 ha 3 nomi "1+1+1", "2+1", e "3".</li>
  <li>Il numero 4 ha 5 nomi "1+1+1+1", "2+1+1", "2+2", "3+1" e "4".</li>
  <li>Il numero 5 ha 7 nomi "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".</li>
</ul>

Questo può essere visualizzato nella seguente forma:

<pre>          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

Dove la riga $n$ corrisponde al numero $n$, e ogni colonna $C$ nella riga $m$ da sinistra a destra corrisponde al numero di nomi che inizia con $C$.

Facoltativamente, nota che la somma dell'$n$-sima riga $P(n)$ è la funzione di partizione dei numeri interi.

# --instructions--

Implementa una funzione che restituisca la somma della $n$-sima riga.

# --hints--

`numberOfNames` dovrebbe essere una funzione.

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` dovrebbe essere uguale a 7.

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` dovrebbe essere uguale a 77.

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` dovrebbe essere uguale a 385.

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` dovrebbe essere uguale a 1255.

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` dovrebbe essere uguale a 53174.

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` dovrebbe essere uguale a 2552338241.

```js
assert.equal(numberOfNames(123), 2552338241);
```

# --seed--

## --seed-contents--

```js
function numberOfNames(num) {

  return true;
}
```

# --solutions--

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```
