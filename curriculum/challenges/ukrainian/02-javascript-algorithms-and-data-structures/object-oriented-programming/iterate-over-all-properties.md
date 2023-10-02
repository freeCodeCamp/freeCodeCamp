---
id: 587d7daf367417b2b2512b7d
title: Ітерація через усі властивості
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

Ви бачили два типи властивостей: <dfn>власні властивості</dfn> та <dfn>властивості прототипу</dfn>. Власні властивості визначаються в самому екземплярі об’єкта. А властивості прототипу визначені в `prototype`.

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Ось так ви додаєте власні властивості `duck` до масиву `ownProps` і властивості `prototype` до масиву `prototypeProps`:

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

console.log(ownProps);
console.log(prototypeProps);
```

`console.log(ownProps)` виведе `["name"]` на консолі, а `console.log(prototypeProps)` виведе `["numLegs"]`.

# --instructions--

Додайте всі власні властивості `beagle` до масиву `ownProps`. Додайте всі властивості прототипу `Dog` до масиву `prototypeProps`.

# --hints--

Масив `ownProps` повинен містити лише `name`.

```js
assert.deepEqual(ownProps, ['name']);
```

Масив `prototypeProps` повинен містити лише `numLegs`.

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

Виконайте це завдання, не використовуючи вбудований метод `Object.keys()`.

```js
assert(!/\Object.keys/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```
