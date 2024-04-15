---
id: 5a23c84252665b21eecc8036
title: 文字列から制御コードと拡張文字を削除する
challengeType: 1
forumTopicId: 302327
dashedName: strip-control-codes-and-extended-characters-from-a-string
---

# --description--

The task is to strip control codes and extended characters from a string. The solution should demonstrate how to achieve each of the following results: A string with control codes and extended characters stripped. In ASCII, the control codes have decimal codes 0 through to 31 and 127. On an ASCII based system, if the control codes are stripped, the resultant string would have all of its characters within the range of 32 to 126 decimal on the ASCII table. On a non-ASCII based system, we consider characters that do not have a corresponding glyph on the ASCII table (within the ASCII range of 32 to 126 decimal) to be an extended character for the purpose of this task.

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
