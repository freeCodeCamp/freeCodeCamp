---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

Objects can have a special type of property, called a <dfn>method</dfn>.

Methods are properties that are functions. This adds different behavior to an object. Here is the `duck` example with a method:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

The example adds the `sayName` method, which is a function that returns a sentence giving the name of the `duck`. Notice that the method accessed the `name` property in the return statement using `duck.name`. The next challenge will cover another way to do this.

# --instructions--

Using the `dog` object, give it a method called `sayLegs`. The method should return the sentence `This dog has 4 legs.`

# --hints--

`dog.sayLegs()` should be a function.

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` should return the given string - note that punctuation and spacing matter.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
