---
id: 56533eb9ac21ba0edf2244bc
title: 购物清单
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

创建一个名叫 `myList` 的购物清单。 清单的数据格式就是多维数组。

每个子数组中的第一个元素应该是购买的物品名称。 第二个元素应该是物品的数量，类似于：

```js
["Chocolate Bar", 15]
```

列表中应至少有 5 个子数组。

# --hints--

`myList` 应该是一个数组。

```js
assert(isArray);
```

每个子数组的第一个元素都应该是字符串。

```js
assert(hasString);
```

每个子数组的第二个元素都应该是数字。

```js
assert(hasNumber);
```

列表中至少要包含 5 个元素。

```js
assert(count > 4);
```

# --seed--

## --after-user-code--

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(myList)) {
    isArray = true;
    if(myList.length > 0) {
      hasString = true;
      hasNumber = true;
      for (var elem of myList) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
    }
    count = myList.length;
    return JSON.stringify(myList);
  } else {
    return "myList is not an array";
  }

})(myList);
```

## --seed-contents--

```js
const myList = [];
```

# --solutions--

```js
const myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```
