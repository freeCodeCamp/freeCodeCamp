---
id: 9d7123c8c441eeafaeb5bdef
title: 使用 slice 而不是 splice 從數組中移除元素
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

使用數組時經常遇到要刪除一些元素並保留數組剩餘部分的情況。 爲此，JavaScript 提供了 `splice` 方法，它接收兩個參數：從哪裏開始刪除項目的索引，和要刪除的項目數。 如果沒有提供第二個參數，默認情況下是移除一直到結尾的所有元素。 但 `splice` 方法會改變調用它的原始數組。 舉個例子：

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

在這裏 `splice` 返回字符串 `London` 並從城市數組中刪除它。 `cities` 將有值 `["Chicago", "Delhi", "Islamabad", "Berlin"]`。

正如我們在上一次挑戰中看到的那樣，`slice` 方法不會改變原始數組，而是返回一個可以保存到變量中的新數組。 回想一下，`slice` 方法接收兩個參數，從開始索引開始選取到結束（不包括該元素），並在新數組中返回這些元素。 使用 `slice` 方法替代 `splice` 有助於避免數組變化產生的副作用。

# --instructions--

用 `slice` 代替 `splice` 重寫 `nonMutatingSplice` 函數。 將 `cities` 數組長度限制爲 3，並返回一個僅包含前 3 項的新數組。

不要改變提供給函數的原始數組。

# --hints--

你的代碼中應使用 `slice` 方法。

```js
assert(code.match(/\.slice/g));
```

不能使用 `splice` 方法。

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

不能改變 `inputCities` 數組。

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` 應返回 `["Chicago", "Delhi", "Islamabad"]`。

```js
assert(
  JSON.stringify(
    nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
  ) === JSON.stringify(['Chicago', 'Delhi', 'Islamabad'])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
```
