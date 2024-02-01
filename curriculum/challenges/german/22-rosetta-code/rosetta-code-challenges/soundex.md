---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 1
forumTopicId: 302320
dashedName: soundex
---

# --description--

**Soundex Algorithm** deals with the *intentions* of the words. It creates a representation for similar sounding words.

Sie wird für die Suche nach <em>Namen</em> und <em>Adressen</em> verwendet. Das bedeutet, dass die Person, die den <em>Namen</em> eingetragen hat, sich darauf konzentrieren kann, wie er klingt, anstatt die Schreibweise von <em>Namen</em> zu korrigieren.

Zum Beispiel:

Wenn du den Namen `Quenci` zum ersten Mal hörst und ihn falsch geschrieben hast, erhälst du **Soundex** code `Q520`.

Wenn du den Namen `Quincy` das nächste Mal richtig buchstabieren, erhalten Sie immer noch den gleichen Code `Q520`, das bedeutet, dass du mehrere Namensaussprachen mit ein und derselben <em>Person</em> verknüpfen kannst, ohne jede Schreibweise hinzufügen zu müssen.

Hier sind die Regeln:

<ul>
  <li>If a vowel (A, E, I, O, U) separates two consonants that have the same soundex code, the consonant to the right of the vowel is coded. Tymczak is coded as T-522 (T, 5 for the M, 2 for the C, Z ignored (see "Side-by-Side" rule above), 2 for the K). Since the vowel "A" separates the Z and K, the K is coded.</li>
  <li>Wenn "H" oder "W" zwei Konsonanten trennen, die den gleichen Soundex-Code haben, wird der Konsonant rechts vom Vokal nicht kodiert. Beispiel: Ashcraft hat den Code A-261 (A, 2 für das S, C ignoriert, 6 für das R, 1 für das F). Sie ist nicht mit A-226 codiert.</li>
</ul>

# --instructions--

Schreibe eine Funktion, die einen String als Parameter nimmt und den kodierten String zurückgibt.

# --hints--

`soundex` sollte eine Funktion sein.

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` sollte einen String zurückgeben.

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` sollte `"S532"` zurückgeben.

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` sollte `"E251"` zurückgeben.

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` sollte `"S532"` zurückgeben.

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` sollte `"E251"` zurückgeben.

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` sollte `"E460"` zurückgeben.

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` sollte `"G200"` zurückgeben.

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` sollte `"H416"` zurückgeben.

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` sollte `"K530"` zurückgeben.

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` sollte `"L300"` zurückgeben.

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` sollte `"L222"` zurückgeben.

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
