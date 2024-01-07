---
id: 587d7daf367417b2b2512b7d
title: التكرار علي جميعع العناصر (Iterate Over All Properties)
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

لقد رأيت الآن نوعين من الخواص: <dfn>own properties</dfn> و `prototype`. Own properties يتم تعريفها مباشرة في iinstance الـ object نفسه. ويتم تعريف خصائص الـ prototype على الـ `prototype`.

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

إليك كيفية إضافة خصائص `duck` الخاصة إلى الـ array الآتية `ownProps` و خصائص `prototype` إلى الـ array الآتية `prototypeProps`:

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

`console.log(ownProps)` يعرض `["name"]` في وحدة التحكم و `console.log(prototypeProps)` يعرض `["numLegs"]`.

# --instructions--

أضف جميع الخصائص الخاصة بـ `beagle` إلى الـ array الآتية `ownProps`. أضف جميع خصائص `prototype` لـ `Dog` إلى الـ array الآتية `prototypeProps`.

# --hints--

يجب أن تحتوي array الـ `ownProps` فقط على `name`.

```js
assert.deepEqual(ownProps, ['name']);
```

يجب أن تحتوي array الـ `prototypeProps` فقط على `numLegs`.

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

يجب عليك حل هذا التحدي دون استخدام الوظيفة المدمجة في `Object.keys()`.

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
