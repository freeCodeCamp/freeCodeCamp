---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 5
forumTopicId: 302320
dashedName: soundex
---

# --description--

Soundex è un algoritmo per creare indici per le parole basato sulla loro pronuncia. L'obbiettivo è avere gli omofoni codificati alla stessa rappresentazione così che possano essere combaciati nonostante piccole differenze di ortografia (dall'[articolo di Wikipedia](https://en.wikipedia.org/wiki/soundex)). C'è un problema importante in molte delle implementazioni riguardanti la separazione di due consonanti che hanno lo stesso codice soundex! In accordo con le [regole ufficiali](https://www.archives.gov/research/census/soundex.html). Quindi controlla se per esempio **Ashcraft** è codificato a **A-261**.

<ul>
  <li>Se una vocale (A, E, I, O, U) separata due consonanti che hanno lo stesso codice soundex, la consonante a destra della vocale è codificata. Tymczak è codificato come T-522 (T, 5 per M, 2 per C, Z ignorata (vedi regola "Fianco-a-fianco" qua sopra), 2 per K). Visto che la "A" separa la Z e la K, la K è codificata.</li>
  <li>Se "H" o "W" separano due consonanti che hanno lo stesso codice soundex, la consonante alla destra della vocale non è codificata. Per esempio: Ashcraft è codificato come A-261 (A, 2 per S, C ignorata, 6 per R, 1 per F). Non è codificata come A-226.</li>
</ul>

# --instructions--

Scrivi una funzione che prende una stringa come parametro e restituisce la stringa codificata.

# --hints--

`soundex` dovrebbe essere una funzione.

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` dovrebbe restituire una stringa.

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` dovrebbe restituire `"S532"`.

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` dovrebbe restituire `"E251"`.

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` dovrebbe restituire `"S532"`.

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` dovrebbe restituire `"E251"`.

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` dovrebbe restituire `"E460"`.

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` dovrebbe restituire `"G200"`.

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` dovrebbe restituire `"H416"`.

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` dovrebbe restituire `"K530"`.

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` dovrebbe restituire `"L300"`.

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` dovrebbe restituire `"L222"`.

```js
assert.equal(soundex('Lukasiewicz'), 'L222');
```

# --seed--

## --seed-contents--

```js
function soundex(s) {

}
```

# --solutions--

```js
function soundex(s) {
  var a = s.toLowerCase().split('');
  var f = a.shift(),
    r = '',
    codes = {
      a: '',
      e: '',
      i: '',
      o: '',
      u: '',
      b: 1,
      f: 1,
      p: 1,
      v: 1,
      c: 2,
      g: 2,
      j: 2,
      k: 2,
      q: 2,
      s: 2,
      x: 2,
      z: 2,
      d: 3,
      t: 3,
      l: 4,
      m: 5,
      n: 5,
      r: 6
    };
  r =
    f +
    a
      .map(function(v, i, a) {
        return codes[v];
      })
      .filter(function(v, i, a) {
        return i === 0 ? v !== codes[f] : v !== a[i - 1];
      })
      .join('');

  return (r + '000').slice(0, 4).toUpperCase();
}
```
