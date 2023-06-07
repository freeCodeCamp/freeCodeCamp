---
id: 5a23c84252665b21eecc8036
title: 文字列から制御コードと拡張文字を削除する
challengeType: 1
forumTopicId: 302327
dashedName: strip-control-codes-and-extended-characters-from-a-string
---

# --description--

タスクは、文字列から制御コードと拡張文字を削除することです。 解答では、以下のそれぞれの結果を導き出す方法を示す必要があります: 制御コードと拡張文字を取り除いた文字列。 ASCII の制御コードには 10 進数コードの 0 から 31 までと 127 があります。 ASCIIベースのシステムでは、制御コードが取り除かれた場合、結果として得られる文字列は、ASCII コード表の 10 進数番号の 32 から 126 の範囲内のすべての文字になります。 非 ASCII ベースのシステムでは、ASCII コード表 (ASCII で 10 進数番号の 32 から 126 の範囲内) に対応するグリフを持たない文字は、このタスクにおいては、拡張文字とみなされます。

# --hints--

`strip` は関数とします。

```js
assert(typeof strip == 'function');
```

`strip("abc")` は文字列を返す必要があります。

```js
assert(typeof strip('abc') == 'string');
```

`strip("\ba\x00b\n\rc\fd\xc3")` は `"abcd"` を返す必要があります。

```js
assert.equal(strip('\ba\x00b\n\rc\fd\xc3'), 'abcd');
```

`strip("\u0000\n abc\u00E9def\u007F")` は `" abcdef"` を返す必要があります。

```js
assert.equal(strip('\u0000\n abc\u00E9def\u007F'), ' abcdef');
```

`strip("a\n\tb\u2102d\u2147f")` は `"abdf"` を返す必要があります。

```js
assert.equal(strip('a\n\tb\u2102d\u2147f'), 'abdf');
```

`strip("Français.")` は `"Franais."` を返す必要があります。

```js
assert.equal(strip('Français.'), 'Franais.');
```

`strip("123\tabc\u0007DEF\u007F+-*/€æŧðłþ")` は `"123abcDEF+-*/"` を返す必要があります。

```js
assert.equal(strip('123\tabc\u0007DEF\u007F+-*/€æŧðłþ'), '123abcDEF+-*/');
```

# --seed--

## --seed-contents--

```js
function strip(s) {

}
```

# --solutions--

```js
function strip(s) {
  return s
    .split('')
    .filter(function(x) {
      var n = x.charCodeAt(0);

      return 31 < n && 127 > n;
    })
    .join('');
}
```
