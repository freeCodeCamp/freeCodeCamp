---
id: 5a23c84252665b21eecc8017
title: Алгоритм Саундекс
challengeType: 1
forumTopicId: 302320
dashedName: soundex
---

# --description--

**Soundex Algorithm** deals with the *intentions* of the words. It creates a representation for similar sounding words.

It is used for searching <em>names</em> and <em>addresses</em>. This means that the person who filled in the <em>name</em>, can focus on how it sounds instead of correcting the spelling of <em>names</em>.

Наприклад:

If you are hearing the name `Quenci` for the first time, and misspelled it, you will get **Soundex** code `Q520`.

When you spell the name `Quincy` correctly next time, you will still get the same code `Q520`, which means you can link multiple name pronunciations into the same <em>person</em> without the need for adding every spelling.

Ось правила: 

<ul>
  <li>Якщо голосний (A, E, I, O, U) звук розділяє два приголосні, які мають однаковий саундекс-код, кодується приголосний праворуч від голосного. Tymczak кодується як T-522 (T, 5 замість M, 2 замість C, Z ігнорується (див. правило "Пліч-о-пліч" вище), 2 замість K). Оскільки голосний "A" розділяє літери Z та К, літера К кодується.</li>
  <li>Якщо "H" чи "W" розділяють два приголосні із однаковим саундекс-кодом, приголосний праворуч від голосного не кодується. Приклад: Ashcraft кодується як A-261 (A, 2 замість S, C ігнорується, 6 замість R, 1 замість F). Слово не кодується як A-226.</li>
</ul>

# --instructions--

Write a function that takes a string as a parameter and returns the encoded string.

# --hints--

`soundex` має бути функцією.

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` має повернути рядок.

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` має повернути `"S532"`.

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` має повернути `"E251"`.

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` має повернути `"S532"`.

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` має повернути `"E251"`.

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` має повернути `"E460"`.

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` має повернути `"G200"`.

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` має повернути `"H416"`.

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` має повернути `"K530"`.

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` має повернути `"L300"`.

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` має повернути `"L222"`.

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
