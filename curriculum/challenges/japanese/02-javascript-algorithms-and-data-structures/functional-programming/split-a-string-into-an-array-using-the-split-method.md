---
id: 587d7daa367417b2b2512b6b
title: split メソッドを使用して文字列を配列に分割する
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

`split` メソッドは、文字列を文字列の配列に分割します。 このメソッドは、文字列や正規表現の分割に使用できる区切り文字の引数を取ります。 たとえば、区切り文字が空白の場合は、単語の配列を取得します。 区切り文字が空文字列の場合は、文字列内の各文字で構成される配列を取得します。

2 つの例を次に示します。1 つ目は文字列をスペースで分割し、2 つ目は正規表現を使用して文字列を数字で分割します。

```js
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
```

`bySpace` の値は `["Hello", "World"]` になり、`byDigits` の値は `["How", "are", "you", "today"]` になります。

文字列はイミュータブル (不変) なので、`split` メソッドを使用すると文字列を簡単に操作できます。

# --instructions--

`splitify` 関数の中で `split` メソッドを使用して、`str` を単語の配列に分割してください。 この関数は配列を返す必要があります。 単語は必ずしもスペースで区切られているとは限らず、配列に句読点を含めてはならないことに注意してください。

# --hints--

コードで `split` メソッドを使用する必要があります。

```js
assert(code.match(/\.split/g));
```

`splitify("Hello World,I-am code")` は `["Hello", "World", "I", "am", "code"]` を返す必要があります。

```js
assert(
  JSON.stringify(splitify('Hello World,I-am code')) ===
    JSON.stringify(['Hello', 'World', 'I', 'am', 'code'])
);
```

`splitify("Earth-is-our home")` は `["Earth", "is", "our", "home"]` を返す必要があります。

```js
assert(
  JSON.stringify(splitify('Earth-is-our home')) ===
    JSON.stringify(['Earth', 'is', 'our', 'home'])
);
```

`splitify("This.is.a-sentence")` は `["This", "is", "a", "sentence"]` を返す必要があります。

```js
assert(
  JSON.stringify(splitify('This.is.a-sentence')) ===
    JSON.stringify(['This', 'is', 'a', 'sentence'])
);
```

# --seed--

## --seed-contents--

```js
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}

splitify("Hello World,I-am code");
```

# --solutions--

```js
function splitify(str) {
  return str.split(/\W/);
}
```
