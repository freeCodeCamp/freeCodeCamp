---
id: 587d8254367417b2b2512c71
title: 从ES6中的集中删除项目
challengeType: 1
videoUrl: ''
dashedName: remove-items-from-a-set-in-es6
---

# --description--

让我们使用`delete`方法练习从ES6集中`delete` 。首先，创建一个ES6 Set `var set = new Set([1,2,3]);`现在使用`delete`方法从Set中删除一个项目。

> set.delete（1）;  
> console.log（\[... set]）//应该返回\[2,3]
>
> >

# --instructions--

现在，创建一个整数为1,2,3,4和5的集合。删除值2和5，然后返回集合。

# --hints--

您的集应包含值1,3和4

```js
assert(
  (function () {
    var test = checkSet();
    return test.has(1) && test.has(3) && test.has(4) && test.size === 3;
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(){
   var set = null;
   return set;
}
```

# --solutions--

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```
