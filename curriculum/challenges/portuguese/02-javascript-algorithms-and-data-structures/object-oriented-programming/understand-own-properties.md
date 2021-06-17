---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

In the following example, the `Bird` constructor defines two properties: `name` and `numLegs`:

```js
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` and `numLegs` are called <dfn>own properties</dfn>, because they are defined directly on the instance object. That means that `duck` and `canary` each has its own separate copy of these properties. In fact every instance of `Bird` will have its own copy of these properties. The following code adds all of the own properties of `duck` to the array `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

The console would display the value `["name", "numLegs"]`.

# --instructions--

Add the own properties of `canary` to the array `ownProps`.

# --hints--

`ownProps` should include the values `numLegs` and `name`.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

You should solve this challenge without using the built in method `Object.keys()`.

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
