---
id: 594faaab4e2a8626833e9c3d
title: 使用轉義標記字符串
challengeType: 1
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

Write a function or program that can split a string at each non-escaped occurrence of a separator character.

它應該接受三個輸入參數：

<ul>
  <li>The <strong>string</strong></li>
  <li>The <strong>separator character</strong></li>
  <li>The <strong>escape character</strong></li>
</ul>

它應該輸出一個字符串列表。

拆分規則：

<ul>
  <li>The fields that were separated by the separators, become the elements of the output list.</li>
  <li>即使在開始和結束時，也應保留空字段。</li>
</ul>

轉義規則：

<ul>
  <li>"Escaped" means preceded by an occurrence of the escape character that is not already escaped itself.</li>
  <li>當轉義字符位於沒有特殊含義的字符之前時，它仍然算作轉義字符（但不會做任何特殊的事情）。</li>
  <li>用於轉義某些內容的每次出現的轉義字符不應成爲輸出的一部分。</li>
</ul>

證明您的函數滿足以下測試用例：

給定字符串

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

並使用 `|` 作爲分隔符和 `^` 作爲轉義字符，你的函數應輸出以下數組：

<pre>  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>

# --hints--

`tokenize` 應該是一個函數。

```js
assert(typeof tokenize === 'function');
```

`tokenize` 應該返回一個數組。

```js
assert(typeof tokenize('a', 'b', 'c') === 'object');
```

`tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^')` 應該返回 `['one|uno', '', 'three^^', 'four^|cuatro', '']`

```js
assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
```

`tokenize('a@&bcd&ef&&@@hi', '&', '@')` 應該返回 `['a&bcd', 'ef', '', '@hi']`

```js
assert.deepEqual(tokenize(testStr2, '&', '@'), res2);
```

# --seed--

## --after-user-code--

```js
const testStr1 = 'one^|uno||three^^^^|four^^^|^cuatro|';
const res1 = ['one|uno', '', 'three^^', 'four^|cuatro', ''];

// TODO add more tests
const testStr2 = 'a@&bcd&ef&&@@hi';
const res2 = ['a&bcd', 'ef', '', '@hi'];
```

## --seed-contents--

```js
function tokenize(str, sep, esc) {
  return true;
}
```

# --solutions--

```js
// tokenize :: String -> Character -> Character -> [String]
function tokenize(str, charDelim, charEsc) {
  const dctParse = str.split('')
    .reduce((a, x) => {
      const blnEsc = a.esc;
      const blnBreak = !blnEsc && x === charDelim;
      const blnEscChar = !blnEsc && x === charEsc;

      return {
        esc: blnEscChar,
        token: blnBreak ? '' : (
          a.token + (blnEscChar ? '' : x)
        ),
        list: a.list.concat(blnBreak ? a.token : [])
      };
    }, {
      esc: false,
      token: '',
      list: []
    });

  return dctParse.list.concat(
    dctParse.token
  );
}
```
