---
id: 5a23c84252665b21eecc8017
title: サウンデックス
challengeType: 1
forumTopicId: 302320
dashedName: soundex
---

# --description--

**Soundex Algorithm** deals with the *intentions* of the words. It creates a representation for similar sounding words.

It is used for searching <em>names</em> and <em>addresses</em>. This means that the person who filled in the <em>name</em>, can focus on how it sounds instead of correcting the spelling of <em>names</em>.

For example:

If you are hearing the name `Quenci` for the first time, and misspelled it, you will get **Soundex** code `Q520`.

When you spell the name `Quincy` correctly next time, you will still get the same code `Q520`, which means you can link multiple name pronunciations into the same <em>person</em> without the need for adding every spelling.

Here is the rules: 

<ul>
  <li>母音 (A、E、I、O、U) が同じサウンデックスコードを持つ2つの子音を分離している場合、母音の右側の子音がコード化されます。 Tymczak は T-522 (T、Mを5、Cを2、Zは無視 (上記の隣接ルールを参照)、Kを2) としてコード化されます。 母音 "A" が Z と K を分離しているため、K がコード化されます。</li>
  <li>"H" または "W" が同じサウンデックスコードを持つ 2 つの子音を分離している場合、母音の右側の子音はコード化されません。 例: Ashcraft は A-261 (A、Sを2、Cは無視、Rを6、Fを1) にコード化されます。 A-226 にはコード化されません。</li>
</ul>

# --instructions--

Write a function that takes a string as a parameter and returns the encoded string.

# --hints--

`soundex` should be a function.

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` should return a string.

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` should return `"S532"`.

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` should return `"E251"`.

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` should return `"S532"`.

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` should return `"E251"`.

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` should return `"E460"`.

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` should return `"G200"`.

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` should return `"H416"`.

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` should return `"K530"`.

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` should return `"L300"`.

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` should return `"L222"`.

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
