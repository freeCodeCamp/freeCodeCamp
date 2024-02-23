---
id: 587d7b7b367417b2b2512b14
title: indexOf() で要素の存在をチェックする
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

配列はいつでも変更、つまり*ミューテート*が可能であるため、 特定のデータが配列内のどこにあるのかや、その要素がまだ存在するかどうかについては何も保証されません。 幸い、JavaScript には組み込みメソッド `indexOf()` があり、配列内の要素の存在を素早く簡単に確認することができます。 `indexOf()` は要素をパラメーターとして取り、呼び出すと要素の位置 (インデックス) を返します。要素が配列内に存在しない場合には `-1` を返します。

例:

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` は `-1` を返します。`indexOf('oranges')` は `2` を、`indexOf('pears')` は `1` を返します (それぞれの要素が出現する最初のインデックス)。

# --instructions--

`indexOf()` は、配列内の要素の存在を素早くチェックするのに非常に便利です。 関数 `quickCheck` を定義しました。この関数は配列と要素を引数として取ります。 `indexOf()` を使用してこの関数を変更し、渡した要素が配列内に存在する場合は `true` を、存在しない場合は `false` を返すようにしてください。

# --hints--

`quickCheck` 関数は文字列 (`"true"` または `"false"`) ではなく、ブール型 (`true` または `false`) を返す必要があります。

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` は `false` を返す必要があります。

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` は `true` を返す必要があります。

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` は `true` を返す必要があります。

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` は `false` を返す必要があります。

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

`quickCheck` 関数では `indexOf()` メソッドを使用する必要があります。

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
