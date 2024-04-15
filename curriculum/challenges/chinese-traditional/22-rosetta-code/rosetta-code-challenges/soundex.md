---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 1
forumTopicId: 302320
dashedName: soundex
---

# --description--

**Soundex Algorithm** deals with the *intentions* of the words. It creates a representation for similar sounding words.

用於搜索 <em>name</em> 和 <em>地址</em>。 這意味着填寫 <em>name</em>的人， 可以專注於如何聽起來而不是更正 <em>name</em> 的拼寫。

例如：

如果你第一次聽到名字 `Quenci` 並且寫錯了它， 您將得到 **Soundex** 代碼 `Q520`

當你下次正確拼寫名稱 `Quincy` 時，你仍然會得到相同的代碼 `Q520`這意味着您可以將多個名稱發音鏈接到同一個 <em>人員</em> ，而無需添加每個拼寫。

以下是規則：

<ul>
  <li>If a vowel (A, E, I, O, U) separates two consonants that have the same soundex code, the consonant to the right of the vowel is coded. Tymczak is coded as T-522 (T, 5 for the M, 2 for the C, Z ignored (see "Side-by-Side" rule above), 2 for the K). Since the vowel "A" separates the Z and K, the K is coded.</li>
  <li>如果“H”或“W”分隔具有相同soundex代碼的兩個輔音，則元音右側的輔音不被編碼。 例如：Ashcraft 的編碼爲 A-261（A，S 爲 2，忽略 C，R 爲 6，F 爲 1）。 它的編碼不是 A-226。</li>
</ul>

# --instructions--

編寫一個函數，該函數將字符串作爲參數並返回編碼後的字符串。

# --hints--

`soundex` 應該是一個函數。

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` 應該返回一個字符串。

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` 應該返回 `"S532"`。

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` 應該返回 `"E251"`。

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` 應該返回 `"S532"`。

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` 應該返回 `"E251"`。

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` 應該返回 `"E460"`。

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` 應該返回 `"G200"`。

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` 應該返回 `"H416"`。

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` 應該返回 `"K530"`。

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` 應該返回 `"L300"`。

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` 應該返回 `"L222"`。

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
