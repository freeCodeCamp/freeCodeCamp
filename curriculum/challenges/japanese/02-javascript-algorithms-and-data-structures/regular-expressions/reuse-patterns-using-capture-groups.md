---
id: 587d7dbb367417b2b2512baa
title: キャプチャグループを使用してパターンを再利用する
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

次のように複数回出現する単語にマッチさせたいとします。

```js
let repeatStr = "row row row your boat";
```

`/row row row/` を使用することもできますが、繰り返される具体的な言葉がわからない場合はどうしますか？ <dfn>キャプチャグループ</dfn>を使用すると、繰り返される部分文字列を見つけることができます。

キャプチャグループは、キャプチャする正規表現パターンを丸括弧で囲んで構成します。 この例では、英数字で構成される単語をキャプチャすることが目的なので、キャプチャグループは `\w+` を丸括弧で囲んだ `/(\w+)/` になります。

グループにマッチした部分文字列は一時的な「変数」に保存されます。 これには同じ正規表現の中で、バックスラッシュ (または円記号) とキャプチャグループの番号を使用してアクセスできます (例: `\1`)。 キャプチャグループは、開始括弧の位置に応じて (左から右の順で) 自動的に 1 から番号付けされます。

次の例は、スペースで 3 つに区切られた単語にマッチします。

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

文字列に `.match()` メソッドを使用すると、キャプチャグループとともに、一致した部分文字列を持つ配列が返されます。


# --instructions--

`reRegex` でキャプチャグループを使用して、単一のスペースで区切られ、同じ数字のみが正確に 3 回繰り返される構成の文字列にマッチさせてください。

# --hints--

正規表現で数字の略記文字クラスを使用する必要があります。

```js
assert(reRegex.source.match(/\\d/));
```

正規表現でキャプチャグループを 2 回再利用する必要があります。

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

正規表現は文字列 `42 42 42` にマッチする必要があります。

```js
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

正規表現は文字列 `100 100 100` にマッチする必要があります。

```js
reRegex.lastIndex = 0;
assert(reRegex.test('100 100 100'));
```

正規表現は文字列 `42 42 42 42` にマッチしない必要があります。

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

正規表現は文字列 `42 42` にマッチしない必要があります。

```js
assert.equal('42 42'.match(reRegex.source), null);
```

正規表現は文字列 `101 102 103` にマッチしない必要があります。

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

正規表現は文字列 `1 2 3` にマッチしない必要があります。

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

正規表現は文字列 `10 10 10` にマッチする必要があります。

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

Your regex should not match the string `42\t42\t42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42\t42\t42'));
```

Your regex should not match the string `42  42  42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42  42  42'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
```
