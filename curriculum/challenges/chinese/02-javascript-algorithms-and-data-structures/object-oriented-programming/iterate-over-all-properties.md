---
id: 587d7daf367417b2b2512b7d
title: 迭代所有属性
challengeType: 1
forumTopicId: 301320
---

# --description--

现在你已经了解了两种属性: `自身`属性和`原型`属性。`自身`属性是直接在对象上定义的。而`原型`属性是定义在`prototype`上的：

```js
function Bird(name) {
  this.name = name;  // 自身属性
}

Bird.prototype.numLegs = 2; // 原型属性

let duck = new Bird("Donald");
```

这个示例会告诉你如何将`duck`的`自身`属性和`原型`属性分别添加到`ownProps`数组和`prototypeProps`数组里面：

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

# --instructions--

将`beagle`的自身属性都添加到`ownProps`数组里面去。将`Dog`的所有`原型`属性添加到`prototypeProps`数组中。

# --hints--

这个`ownProps`数组应该包含`'name'`这个值。

```js
assert(ownProps.indexOf('name') !== -1);
```

这个`prototypeProps`数组应该包含`'numLegs'`这个值。

```js
assert(prototypeProps.indexOf('numLegs') !== -1);
```

在不使用内置方法`Object.keys()`的情况下完成这个挑战。

```js
assert(!/\Object.keys/.test(code));
```

# --solutions--

