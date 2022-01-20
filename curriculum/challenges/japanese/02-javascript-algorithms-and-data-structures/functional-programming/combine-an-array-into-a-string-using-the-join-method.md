---
id: 587d7daa367417b2b2512b6c
title: join メソッドを使用して配列を文字列に結合する
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

`join` メソッドは、配列の要素を結合して文字列を作成するのに使用します。 このメソッドは、文字列内の配列要素の分割に使用される区切り文字の引数を取ります。

例を示します。

```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

`str` の値は文字列 `Hello World` になります。
# --instructions--

`sentensify` 関数の中で、(特に) `join` メソッドを使用して、文字列 `str` 内の単語から文章を作成してください。 この関数は文字列を返す必要があります。 たとえば、`I-like-Star-Wars` は `I like Star Wars` に変換されます。 このチャレンジでは `replace` メソッドを使用しないでください。

# --hints--

コードでは `join` メソッドを使用する必要があります。

```js
assert(code.match(/\.join/g));
```

`replace` メソッドを使用しないでください。

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` は文字列を返す必要があります。

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` は文字列 `May the force be with you` を返す必要があります。

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` は文字列 `The force is strong with this one` を返す必要があります。

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` は文字列 `There has been an awakening` を返す必要があります。

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
```
