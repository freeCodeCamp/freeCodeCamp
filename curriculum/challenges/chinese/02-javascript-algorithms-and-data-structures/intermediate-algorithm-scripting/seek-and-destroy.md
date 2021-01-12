---
id: a39963a4c10bc8b4d4f06d7e
title: 过滤数组元素
challengeType: 5
forumTopicId: 16046
---

# --description--

在这道题目中，我们要写一个叫 `destroyer` 的函数。传入的第一个参数是一个数组，我们称他为初始数组。后续的参数数量是不确定的，可能有一个或多个。你需要做的是，从初始数组中移除所有与后续参数相等的元素，并返回移除元素后的数组。

**注意：**  
你可以使用 `arguments` 对象，也可以使用 `...`，即“剩余参数”（Rest Parameters）语法。

# --hints--

`destroyer([1, 2, 3, 1, 2, 3], 2, 3)` 应返回 `[1, 1]`。

```js
assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
```

`destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)` 应返回 `[1, 5, 1]`。

```js
assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
```

`destroyer([3, 5, 1, 2, 2], 2, 3, 5)` 应返回 `[1]`。

```js
assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
```

`destroyer([2, 3, 2, 3], 2, 3)` 应返回 `[]`。

```js
assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
```

`destroyer(["tree", "hamburger", 53], "tree", 53)` 应返回 `["hamburger"]`。

```js
assert.deepEqual(destroyer(['tree', 'hamburger', 53], 'tree', 53), [
  'hamburger'
]);
```

`destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")` 应返回 `[12,92,65]`。

```js
assert.deepEqual(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht'
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  ),
  [12, 92, 65]
);
```

# --solutions--

