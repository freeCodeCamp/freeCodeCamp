---
id: 587d7b7b367417b2b2512b14
title: 使用 indexOf() 檢查元素是否存在
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

由於數組隨時都可以修改或發生 *mutated*，我們很難保證某個數據始終處於數組中的特定位置，甚至不能保證該元素是否還存在於該數組中。 好消息是，JavaScript 爲我們提供了內置方法 `indexOf()`。 這個方法讓我們可以方便地檢查某個元素是否存在於數組中。 `indexOf()` 方法接受一個元素作爲輸入參數，並返回該元素在數組中的位置（索引）；若該元素不存在於數組中則返回 `-1`。

例如：

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` 返回 `-1`，`indexOf('oranges')` 返回 `2`，`indexOf('pears')` 返回 `1` (每個元素存在的第一個索引)。

# --instructions--

`indexOf()` 在快速檢查一個數組中是否存在某個元素時非常有用。 我們已經定義了一個 `quickCheck` 函數，它接受一個數組和一個元素作爲輸入參數。 請通過 `indexOf()` 方法修改這個函數，使得當傳入的參數在數組中存在時返回 `true`，否則返回 `false`。

# --hints--

`quickCheck` 函數應返回一個布爾值（`true` 或 `false`），而不是一個字符串（`"true"` 或 `"false"`）。

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` 應返回 `false`。

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` 應返回 `true`。

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` 應返回 `true`。

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` 應返回 `false`。

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

`quickCheck` 函數中應使用 `indexOf()` 方法。

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
