---
id: 587d7dab367417b2b2512b6e
title: every メソッドを使用して、配列内のすべての要素が基準を満たしていることを確認する
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

`every` メソッドは配列で動作し、*すべての*要素が特定のテストを満たすかどうかを調べます。 すべての値が基準を満たしている場合は、ブール値 `true` を返します。そうでない場合は、`false` を返します。

たとえば、次のコードは `numbers` 配列のすべての要素が 10 未満であるかどうかを確認します。

```js
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

この例では `every` メソッドは `false` を返します。

# --instructions--

`checkPositive` 関数の中で `every` メソッドを使用して、`arr` 内のすべての要素が正の値かどうかを調べてください。 関数はブール値を返す必要があります。

# --hints--

コードで `every` メソッドを使用する必要があります。

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` は `false` を返す必要があります。

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` は `true` を返す必要があります。

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` は `false` を返す必要があります。

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.every(num => num > 0);
}
```
