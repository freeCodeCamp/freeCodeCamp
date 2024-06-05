---
id: 587d7dae367417b2b2512b7b
title: Власні властивості
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

У цьому прикладі конструктор `Bird` визначає властивості `name` та `numLegs`:

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` та `numLegs` називаються <dfn>власними властивостями</dfn>, оскільки їх визначено одразу в екземплярі об’єкта. Це означає, що `duck` та `canary` мають власні копії властивостей. Кожен екземпляр `Bird` матиме власну копію властивостей. Цей код додає всі власні властивості `duck` до масиву `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

Консоль показуватиме значення `["name", "numLegs"]`.

# --instructions--

Додайте власні властивості `canary` до масиву `ownProps`.

# --hints--

`ownProps` має містити значення `numLegs` та `name`.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

Виконайте це завдання, не використовуючи вбудований метод `Object.keys()`.

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(__helpers.removeJSComments(code)));
```

Виконайте це завдання, не закодовуючи масив `ownProps` жорстко.

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    __helpers.removeJSComments(code)
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
