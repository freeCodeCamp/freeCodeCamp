---
id: 5900f37a1000cf542c50fe8d
title: 'Problema 14: la sequenza di Collatz più lunga'
challengeType: 1
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

La seguente sequenza iterativa è definita per il set degli interi positivi:

<div style='padding-left: 4em;'><var>n</var> → <var>n</var>/2 (<var>n</var> è pari)</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1 (<var>n</var> è dispari)</div>

Usando le regole qua sopra e iniziando con 13, generiamo la seguente sequenza:

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

Puoi vedere che questa sequenza (iniziando con 13 e finedno con 1) contiene 10 termini. Anche se non è ancora stato provato (Problema di Collatz), si pensa che con qualsiasi numeri si parta, si finisce a 1.

Quale numero iniziale, sotto il dato limite `limit`, produce la catena più lunga?

**Nota:** Una volta che la catena inizia i termini possono superare `limit`.

# --hints--

`longestCollatzSequence(14)` dovrebbe restituire un numero.

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` dovrebbe restituire 9.

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` dovrebbe restituire 3711.

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` dovrebbe restituire 35655.

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` dovrebbe restituire 52527.

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` dovrebbe restituire 77031.

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` dovrebbe restituire 837799.

```js
assert.strictEqual(longestCollatzSequence(1000000), 837799);
```

# --seed--

## --seed-contents--

```js
function longestCollatzSequence(limit) {

  return true;
}

longestCollatzSequence(14);
```

# --solutions--

```js
function longestCollatzSequence(limit) {
  let longest = 1;
  let maxLength = 1;
  for (let i = Math.floor(limit / 2); i < limit; i++) {
    let len = colLen(i);
    if (len > maxLength) {
      longest = i;
      maxLength = len;
    }
  }
  return longest;
}

const knownSequence = { '1': 1 };

function colLen(n) {
  if (knownSequence[n]) {
    return knownSequence[n];
  } else {
    const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
    knownSequence[n] = len;
    return len;
  }
}
```
