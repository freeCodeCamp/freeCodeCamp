---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
forumTopicId: 301320
---

# --description--

You have now seen two kinds of properties: `own` properties and `prototype` properties. `Own` properties are defined directly on the object instance itself. And `prototype` properties are defined on the `prototype`.

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

Here is how you add `duck`'s `own` properties to the array `ownProps` and `prototype` properties to the array `prototypeProps`:

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

Add all of the `own` properties of `beagle` to the array `ownProps`. Add all of the `prototype` properties of `Dog` to the array `prototypeProps`.

# --hints--

The `ownProps` array should include `"name"`.

```js
assert(ownProps.indexOf('name') !== -1);
```

The `prototypeProps` array should include `"numLegs"`.

```js
assert(prototypeProps.indexOf('numLegs') !== -1);
```

You should solve this challenge without using the built in method `Object.keys()`.

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
