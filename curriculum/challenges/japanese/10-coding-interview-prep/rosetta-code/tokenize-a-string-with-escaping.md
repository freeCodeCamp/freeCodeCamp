---
id: 594faaab4e2a8626833e9c3d
title: エスケープ文字のある文字列をトークン化する
challengeType: 1
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

エスケープ処理されていない区切り文字がある位置で、文字列を分割できる関数またはプログラムを記述してください。

次の 3 つの入力パラメータを受け取る必要があります:

<ul>
  <li><strong>文字列</strong></li>
  <li><strong>区切り文字</strong></li>
  <li><strong>エスケープ文字</strong></li>
</ul>

文字列のリストを出力する必要があります。

分割ルール:

<ul>
  <li>区切り文字で区切られたフィールドが出力リストの要素になります。</li>
  <li>空のフィールドは、開始時と終了時にも保存する必要があります。</li>
</ul>

エスケープルール:

<ul>
  <li>「エスケープ処理」とは、それ自体はエスケープされていないエスケープ文字が先行することを意味します。</li>
  <li>エスケープ文字が特別な意味を持たない文字の前に置かれた場合でも、エスケープとしてカウントされます (ただし、特別なことはしません)。</li>
  <li>エスケープ処理のために使用されたエスケープ文字は、出力の一部にならないようにします。</li>
</ul>

関数が以下のテストケースを満たしていることを示してください。

以下の文字列が与えられました。

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

ここで、`|` を区切り文字として `^` をエスケープ文字として使用します。関数は次の配列を出力しなければなりません。

<pre>  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>

# --hints--

`tokenize` は関数とします。

```js
assert(typeof tokenize === 'function');
```

`tokenize` は配列を返す必要があります。

```js
assert(typeof tokenize('a', 'b', 'c') === 'object');
```

`tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^')` は `['one|uno', '', 'three^^', 'four^|cuatro', '']` を返す必要があります。

```js
assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
```

`tokenize('a@&bcd&ef&&@@hi', '&', '@')` は `['a&bcd', 'ef', '', '@hi']` を返す必要があります。

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
