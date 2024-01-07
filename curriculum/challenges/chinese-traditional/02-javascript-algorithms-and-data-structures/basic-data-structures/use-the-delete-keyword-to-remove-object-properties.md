---
id: 587d7b7c367417b2b2512b1b
title: 使用 delete 關鍵字刪除對象屬性
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

現在我們已經學習了什麼是對象以及對象的基本特性和用途。 總之，對象是以鍵值對的形式，靈活、直觀地存儲結構化數據的一種方式，***而且***，通過對象的屬性查找屬性值是速度很快的操作。 在本章餘下的挑戰中，我們來了解一下對象的幾種常用操作，這樣你能更好地在代碼中使用這個十分有用的數據結構：對象。

在之前的挑戰中，我們已經試過添加和修改對象中的鍵值對。 現在我們來看看如何從一個對象中*移除*一個鍵值對。

我們再來回顧一下上一個挑戰中的 `foods` 對象。 如果我們想移除 `apples` 屬性，可以像這樣使用 `delete` 關鍵字：

```js
delete foods.apples;
```

# --instructions--

請使用 delete 關鍵字來移除 `foods` 中的 `oranges`、`plums` 和 `strawberries` 屬性。

# --hints--

`foods` 對象應只包含 3 個屬性：`apples`、`grapes` 和 `bananas`。

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

應使用 `delete` 關鍵字來移除 `oranges`、`plums` 和 `strawberries` 屬性。

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
