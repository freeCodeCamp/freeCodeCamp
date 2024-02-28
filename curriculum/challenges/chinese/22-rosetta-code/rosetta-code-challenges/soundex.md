---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 1
forumTopicId: 302320
dashedName: soundex
---

# --description--

**Soundex Algorithm** deals with the *intentions* of the words. It creates a representation for similar sounding words.

用于搜索 <em>name</em> 和 <em>地址</em>。 这意味着填写 <em>name</em>的人， 可以专注于如何听起来而不是更正 <em>name</em> 的拼写。

例如：

如果你第一次听到名字 `Quenci` 并且写错了它， 您将得到 **Soundex** 代码 `Q520`

当你下次正确拼写名称 `Quincy` 时，你仍然会得到相同的代码 `Q520`这意味着您可以将多个名称发音链接到同一个 <em>人员</em> ，而无需添加每个拼写。

以下是规则：

<ul>
  <li>If a vowel (A, E, I, O, U) separates two consonants that have the same soundex code, the consonant to the right of the vowel is coded. Tymczak is coded as T-522 (T, 5 for the M, 2 for the C, Z ignored (see "Side-by-Side" rule above), 2 for the K). Since the vowel "A" separates the Z and K, the K is coded.</li>
  <li>如果“H”或“W”分隔具有相同soundex代码的两个辅音，则元音右侧的辅音不被编码。 例如：Ashcraft 的编码为 A-261（A，S 为 2，忽略 C，R 为 6，F 为 1）。 它的编码不是 A-226。</li>
</ul>

# --instructions--

编写一个函数，该函数将字符串作为参数并返回编码后的字符串。

# --hints--

`soundex` 应该是一个函数。

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` 应该返回一个字符串。

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` 应该返回 `"S532"`。

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` 应该返回 `"E251"`。

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` 应该返回 `"S532"`。

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` 应该返回 `"E251"`。

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` 应该返回 `"E460"`。

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` 应该返回 `"G200"`。

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` 应该返回 `"H416"`。

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` 应该返回 `"K530"`。

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` 应该返回 `"L300"`。

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` 应该返回 `"L222"`。

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
