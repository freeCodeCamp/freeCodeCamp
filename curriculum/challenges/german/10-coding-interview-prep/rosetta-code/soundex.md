---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 1
forumTopicId: 302320
dashedName: soundex
---

# --description--

**Soundex Algorithm** deals with the *intentions* of the words. It creates a representation for similar sounding words.

It is used for searching <em>names</em> and <em>addresses</em>. This means that the person who filled in the <em>name</em>, can focus on how it sounds instead of correcting the spelling of <em>names</em>.

Zum Beispiel:

If you are hearing the name `Quenci` for the first time, and misspelled it, you will get **Soundex** code `Q520`.

When you spell the name `Quincy` correctly next time, you will still get the same code `Q520`, which means you can link multiple name pronunciations into the same <em>person</em> without the need for adding every spelling.

Hier sind die Regeln: 

<ul>
  <li>If a vowel (A, E, I, O, U) separates two consonants that have the same soundex code, the consonant to the right of the vowel is coded. Tymczak is coded as T-522 (T, 5 for the M, 2 for the C, Z ignored (see "Side-by-Side" rule above), 2 for the K). Since the vowel "A" separates the Z and K, the K is coded.</li>
  <li>If "H" or "W" separate two consonants that have the same soundex code, the consonant to the right of the vowel is not coded. Example: Ashcraft is coded A-261 (A, 2 for the S, C ignored, 6 for the R, 1 for the F). It is not coded A-226.</li>
</ul>

# --instructions--

Write a function that takes a string as a parameter and returns the encoded string.

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
