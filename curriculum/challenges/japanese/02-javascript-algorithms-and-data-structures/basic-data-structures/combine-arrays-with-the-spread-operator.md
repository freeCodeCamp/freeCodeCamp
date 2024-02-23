---
id: 587d7b7b367417b2b2512b17
title: スプレッド演算子による配列の結合
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

<dfn>スプレッド</dfn>演算子のもう一つの大きな利点は、配列を結合できること、つまり、ある配列のすべての要素を別の配列の任意のインデックスに挿入できることです。 従来の古い構文でも配列を結合できますが、その場合は、一方の末尾ともう一方の先頭の位置のみで結合が可能です。 スプレッド構文を使用すれば次のような操作が非常に簡単になります。

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

これで `thatArray` の値は `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']` になります。

スプレッド構文を使用することで、従来のメソッドでは複雑で冗長だった操作を、より簡単に行えるようになりました。

# --instructions--

変数 `sentence` を返す関数 `spreadOut` を定義しました。 <dfn>スプレッド</dfn>演算子を使用して関数を変更し、配列 `['learning', 'to', 'code', 'is', 'fun']` を返すようにしてください。

# --hints--

`spreadOut` は `["learning", "to", "code", "is", "fun"]` を返す必要があります。

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

`spreadOut` 関数ではスプレッド構文を使用する必要があります。

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
```

# --solutions--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```
