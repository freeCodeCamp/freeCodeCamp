---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

Up until now you have been adding properties to the `prototype` individually:

```js
Bird.prototype.numLegs = 2;
```

This becomes tedious after more than a few properties.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

A more efficient way is to set the `prototype` to a new object that already contains the properties. This way, the properties are added all at once:

```js
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --instructions--

Add the property `numLegs` and the two methods `eat()` and `describe()` to the `prototype` of `Dog` by setting the `prototype` to a new object.

# --hints--

`Dog.prototype` should be set to a new object.

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(__helpers.removeJSComments(code)));
```

`Dog.prototype` should have the property `numLegs`.

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` should have the method `eat()`.

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` should have the method `describe()`.

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```
