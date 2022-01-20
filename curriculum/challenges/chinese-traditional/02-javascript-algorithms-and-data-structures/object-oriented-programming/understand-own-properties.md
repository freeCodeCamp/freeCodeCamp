---
id: 587d7dae367417b2b2512b7b
title: 瞭解自有屬性
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

請看下面的實例，`Bird` 構造函數定義了兩個屬性：`name` 和 `numLegs`：

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` 和 `numLegs` 被叫做 <dfn>自身屬性</dfn>，因爲它們是直接在實例對象上定義的。 這就意味着 `duck` 和 `canary` 這兩個對象分別擁有這些屬性的獨立副本。 事實上，`Bird` 的所有實例都將擁有這些屬性的獨立副本。 下面的代碼將 `duck` 的所有自身屬性都存到一個叫作 `ownProps` 的數組裏面：

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

控制檯將顯示值 `["name", "numLegs"]`。

# --instructions--

將 `canary` 的自身屬性添加到 `ownProps` 數組裏面。

# --hints--

`ownProps` 應該包含 `numLegs` 和 `name` 兩個屬性的值。

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

在不使用內置方法 `Object.keys()` 的前提下完成這個挑戰。

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

你應該解決這個挑戰，而不是硬編碼 `ownProps` 數組。

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
