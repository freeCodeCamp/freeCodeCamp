---
id: 587d7dae367417b2b2512b7b
title: 了解自己的属性
challengeType: 1
forumTopicId: 301326
---

# --description--

请看下面的实例，`Bird`构造函数定义了两个属性：`name`和`numLegs`：

```js
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name`和`numLegs`被叫做`自身`属性，因为他们是直接在实例对象上定义的。这就意味着`duck`和`canary`这两个对象分别拥有这些属性的独立副本。 事实上，`Bird`的这些实例都将拥有这些属性的独立副本。 以下的代码将`duck`里面所有的`自身`属性都存到一个叫`ownProps`的数组里面：

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
```

# --instructions--

将`canary`对象里面的`自身`属性添加到`ownProps`数组里面。

# --hints--

`ownProps`应该包含`'numLegs'`和`'name'`两个属性的值。

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

在不使用内置方法`Object.keys()`的情况下完成这个挑战。

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

You should solve this challenge without hardcoding the `ownProps` array.

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    code
  )
);
```

# --solutions--

