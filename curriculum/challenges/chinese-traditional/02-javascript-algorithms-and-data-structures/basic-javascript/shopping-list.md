---
id: 56533eb9ac21ba0edf2244bc
title: 購物清單
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

創建一個名叫 `myList` 的購物清單。 清單的數據格式就是多維數組。

每個子數組中的第一個元素應該是購買的物品名稱。 第二個元素應該是物品的數量，類似於：

```js
["Chocolate Bar", 15]
```

列表中應至少有 5 個子數組。

# --hints--

`myList` 應該是一個數組。

```js
assert(isArray);
```

每個子數組的第一個元素都應該是字符串。

```js
assert(hasString);
```

每個子數組的第二個元素都應該是數字。

```js
assert(hasNumber);
```

列表中至少要包含 5 個元素。

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
