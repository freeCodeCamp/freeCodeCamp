---
id: 587d7b7c367417b2b2512b19
title: 修改嵌套在對象中的對象
challengeType: 1
forumTopicId: 301164
dashedName: modify-an-object-nested-within-an-object
---

# --description--

現在我們來看一個稍複雜的對象。 在對象中，我們也可以嵌套任意層數的對象，對象的屬性值可以是 JavaScript 支持的任意類型，包括數組和其他對象。 請看以下例子：

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

`nestedObject` 有 3 個屬性：`id`（屬性值爲數字）、`date`（屬性值爲字符串）、`data`（屬性值爲嵌套的對象）。 雖然對象中的數據可能很複雜，我們仍能使用上一個挑戰中講到的寫法來訪問我們需要的信息。 如果我們想把嵌套在 `onlineStatus` 中 `busy` 的屬性值改爲 `10`，可以用點號表示法來這樣實現：

```js
nestedObject.data.onlineStatus.busy = 10;
```

# --instructions--

我們已經定義了一個 `userActivity` 對象，它包含了另一個對象。 請將 `online` 的屬性值改爲 `45`。

# --hints--

`userActivity` 應包含 `id`、`date` 和 `data` 屬性。

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

`userActivity` 應包含 `data` 屬性，其屬性值應爲包含 `totalUsers` 和 `online` 屬性的對象。

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

`userActivity` 的 `data` 屬性值中的 `online` 屬性值應被改爲 `45`。

```js
assert(userActivity.data.online === 45);
```

應使用點號表示法或方括號表示法來修改 `online` 屬性值。

```js
assert.strictEqual(code.search(/online: 45/), -1);
```

# --seed--

## --seed-contents--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);
```

# --solutions--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```
