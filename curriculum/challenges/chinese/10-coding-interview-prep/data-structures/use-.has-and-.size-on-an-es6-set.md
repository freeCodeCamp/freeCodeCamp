---
id: 587d8255367417b2b2512c72
title: 在ES6集上使用.has和.size
challengeType: 1
videoUrl: ''
dashedName: use--has-and--size-on-an-es6-set
---

# --description--

让我们看一下ES6 Set对象上可用的.has和.size方法。首先，创建一个ES6 Set `var set = new Set([1,2,3]);` .has方法将检查该值是否包含在集合中。 `var hasTwo = set.has(2);` .size方法将返回一个表示Set `var howBig = set.size;`大小的整数`var howBig = set.size;`

# --instructions--

在本练习中，我们将数组和值传递给checkSet（）函数。您的函数应该从数组参数创建ES6集。查找该集是否包含value参数。找到集合的大小。并在数组中返回这两个值。

# --hints--

`checkSet([4, 5, 6], 3)`应该返回[false，3]

```js
assert(
  (function () {
    var test = checkSet([4, 5, 6], 3);
    return DeepEqual(test, [false, 3]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(arrToBeSet, checkValue){

   // Only change code below this line

   // Only change code above this line

}
```

# --solutions--

```js
function checkSet(arrToBeSet, checkValue){
var set = new Set(arrToBeSet);
var result = [
set.has(checkValue),
set.size
];
return result;
}
```
