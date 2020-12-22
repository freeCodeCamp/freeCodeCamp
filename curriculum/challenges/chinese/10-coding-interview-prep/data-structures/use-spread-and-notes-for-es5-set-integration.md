---
id: 587d8255367417b2b2512c73
title: 使用Spread和Notes进行ES5 Set（）集成
challengeType: 1
videoUrl: ''
---

# --description--

你还记得ES6传播运营商`...` ？ `...`可以在ES6中获取可迭代对象并将它们转换为数组。让我们创建一个Set，并检查传播函数。

> var set = new Set（\[1,2,3]）;  
> var setToArr = \[... set]  
> console.log（setToArr）//返回\[1,2,3]

# --instructions--

在本练习中，我们将set对象传递给`checkSet`函数。它应该返回一个包含Set值的数组。现在你已经成功学会了如何使用ES6 `Set()`对象，干得好！

# --hints--

您的套装已正确退回！

```js
assert(
  (function () {
    var test = checkSet(new Set([1, 2, 3, 4, 5, 6, 7]));
    return DeepEqual(test, [1, 2, 3, 4, 5, 6, 7]);
  })()
);
```

# --solutions--

