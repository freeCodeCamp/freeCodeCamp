---
id: 567af2437cbaa8c51670a16c
title: 测试对象的属性
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8Q7Ua'
forumTopicId: 18324
---

# --description--

有时检查一个对象属性是否存在是非常有用的，我们可以用`.hasOwnProperty(propname)`方法来检查对象是否有该属性。如果有返回`true`，反之返回`false`。

**示例**

```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
```

# --instructions--

修改函数`checkObj`检查`myObj`是否有`checkProp`属性，如果属性存在，返回属性对应的值，如果不存在，返回`"Not Found"`。

# --hints--

`checkObj("gift")`应该返回`"pony"`。

```js
assert(checkObj('gift') === 'pony');
```

`checkObj("pet")`应该返回`"kitten"`。

```js
assert(checkObj('pet') === 'kitten');
```

`checkObj("house")`应该返回`"Not Found"`。

```js
assert(checkObj('house') === 'Not Found');
```

# --solutions--

