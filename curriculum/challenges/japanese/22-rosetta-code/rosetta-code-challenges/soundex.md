---
id: 5a23c84252665b21eecc8017
title: サウンデックス
challengeType: 1
forumTopicId: 302320
dashedName: soundex
---

# --description--

**Soundex Algorithm** deals with the *intentions* of the words. It creates a representation for similar sounding words.

<em>名前</em>や<em>住所</em>の検索に使用されます。 たとえば、<em>名前</em>を記入した人が、<em>名前</em>の綴りを修正する代わりに、その発音に注目できるようになります。

以下に例を示します。

`Quenci` という名前を初めて聞いたときに綴りを間違えた場合、**Soundex** コード `Q520` が返されます。

次回、名前 `Quincy` を正しく綴っても、同じコード `Q520` が返されます。つまり、複数の名前の発音を、すべての綴りを追加しなくても、同じ<em>人物</em>にリンクすることができます。

ルールは次のようになっています:

<ul>
  <li>If a vowel (A, E, I, O, U) separates two consonants that have the same soundex code, the consonant to the right of the vowel is coded. Tymczak is coded as T-522 (T, 5 for the M, 2 for the C, Z ignored (see "Side-by-Side" rule above), 2 for the K). Since the vowel "A" separates the Z and K, the K is coded.</li>
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
