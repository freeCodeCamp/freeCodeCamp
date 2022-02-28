---
id: 587d7dae367417b2b2512b7b
title: 了解自有属性
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

请看下面的实例，`Bird` 构造函数定义了两个属性：`name` 和 `numLegs`：

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` 和 `numLegs` 被叫做 <dfn>自身属性</dfn>，因为它们是直接在实例对象上定义的。 这就意味着 `duck` 和 `canary` 这两个对象分别拥有这些属性的独立副本。 事实上，`Bird` 的所有实例都将拥有这些属性的独立副本。 下面的代码将 `duck` 的所有自身属性都存到一个叫作 `ownProps` 的数组里面：

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

控制台将显示值 `["name", "numLegs"]`。

# --instructions--

将 `canary` 的自身属性添加到 `ownProps` 数组里面。

# --hints--

`ownProps` 应该包含 `numLegs` 和 `name` 两个属性的值。

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

在不使用内置方法 `Object.keys()` 的前提下完成这个挑战。

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

你应该解决这个挑战，而不是硬编码 `ownProps` 数组。

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
```

# --solutions--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);
```
