---
id: 5a23c84252665b21eecc8017
title: サウンデックス
challengeType: 5
forumTopicId: 302320
dashedName: soundex
---

# --description--

サウンデックスは発音から単語のインデックスを作成するためのアルゴリズムです。 目的は、複数の同音異義語を同じ表記にコード化して、スペルの微小な違いにもかかわらず、一致させることです ([wikipedia記事](https://en.wikipedia.org/wiki/soundex)より)。 同じサウンデックスコードを持つ 2 つの子音の分離に関する実装には、多くの場合、大きな問題があります。 ([公式ルール](https://www.archives.gov/research/census/soundex.html) より)。 では、**Ashcraft** を **A-261** にコード化する場合を確認してみましょう。

<ul>
  <li>母音 (A、E、I、O、U) が同じサウンデックスコードを持つ2つの子音を分離している場合、母音の右側の子音がコード化されます。 Tymczak は T-522 (T、Mを5、Cを2、Zは無視 (上記の隣接ルールを参照)、Kを2) としてコード化されます。 母音 "A" が Z と K を分離しているため、K がコード化されます。</li>
  <li>"H" または "W" が同じサウンデックスコードを持つ 2 つの子音を分離している場合、母音の右側の子音はコード化されません。 例: Ashcraft は A-261 (A、Sを2、Cは無視、Rを6、Fを1) にコード化されます。 A-226 にはコード化されません。</li>
</ul>

# --instructions--

1つの文字列をパラメータとして取り、コード化した文字列を返す関数を記述してください。

# --hints--

`soundex` は関数とします。

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` は文字列を返す必要があります。

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` は `"S532"` を返す必要があります。

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` は `"E251"` を返す必要があります。

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` は `"S532"` を返す必要があります。

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` は `"E251"` を返す必要があります。

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` は `"E460"` を返す必要があります。

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` は `"G200"` を返す必要があります。

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` は `"H416"` を返す必要があります。

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` は `"K530"` を返す必要があります。

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` は `"L300"` を返す必要があります。

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` は `"L222"` を返す必要があります。

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
