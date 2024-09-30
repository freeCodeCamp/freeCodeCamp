---
id: a2f1d72d9b908d0bd72bb9f6
title: Make a Person
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

Fill in the object constructor with the following methods below:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
```

Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new `Person` instance as `new Person('Bob', 'Ross')`.

# --hints--

You should not change the function signature.

```js
assert.match(code, /const\s+Person\s*=\s*function\s*\(\s*first\s*,\s*last\s*\)\s*{/);
```

You should not reassign the `first` parameter.

```js
assert.notMatch(code, /\bfirst\s*=\s*/);
```

You should not reassign the `last` parameter.

```js
assert.notMatch(code, /\blast\s*=\s*/);
```

No properties should be added. `Object.keys(Person).length` should always return 6.

```js
const _person = new Person('Bob', 'Ross');
_person.setFirstName('Haskell');
_person.setLastName('Curry');
_person.setFullName('John', 'Smith');
assert.lengthOf(Object.keys(_person), 6);
```

You should be able to instantiate your `Person` object.

```js
const _person = new Person('Bob', 'Ross');
assert.instanceOf(_person, Person);
```

Your `Person` object should not have a `firstName` property.

```js
const _person = new Person('Bob', 'Ross');
assert.notProperty(_person, 'firstName');
```

Your `Person` object should not have a `lastName` property.

```js
const _person = new Person('Bob', 'Ross');
assert.notProperty(_person, 'lastName');
```

The `.getFirstName()` method should return the string `Bob`.

```js
const _person = new Person('Bob', 'Ross');
assert.strictEqual(_person.getFirstName(), 'Bob');
```

The `.getLastName()` should return the string `Ross`.

```js
const _person = new Person('Bob', 'Ross');
assert.strictEqual(_person.getLastName(), 'Ross');
```

The `.getFullName()` method should return the string `Bob Ross`.

```js
const _person = new Person('Bob', 'Ross');
assert.strictEqual(_person.getFullName(), 'Bob Ross');
```

The `.getFullName()` method should return the string `Haskell Ross` after calling `.setFirstName('Haskell')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFirstName('Haskell');
assert.strictEqual(_person.getFullName(), 'Haskell Ross');
```

The `.getFullName()` method should return the string `Bob Curry` after calling `.setLastName('Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setLastName('Curry');
assert.strictEqual(_person.getFullName(), 'Bob Curry');
```

The `.getFullName()` method should return the string `Haskell Curry` after calling `.setFullName('Haskell', 'Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Haskell', 'Curry');
assert.strictEqual(_person.getFullName(), 'Haskell Curry');
```

The `.getFirstName()` method should return the string `Haskell` after calling `.setFullName('Haskell', 'Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Haskell', 'Curry');
assert.strictEqual(_person.getFirstName(), 'Haskell');
```

The `.getLastName()` method should return the string `Curry` after calling `.setFullName('Haskell', 'Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Haskell', 'Curry');
assert.strictEqual(_person.getLastName(), 'Curry');
```

The `.getFullName()` method should return the string `Emily Martinez de la Rosa` after calling `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(_person.getFullName(), 'Emily Martinez de la Rosa');
```

The `.getFirstName()` property should return the string `Emily Martinez` after calling `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(_person.getFirstName(), 'Emily Martinez');
```

The `.getLastName()` property should return the string `de la Rosa` after calling `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(_person.getLastName(), 'de la Rosa');
```

# --seed--

## --seed-contents--

```js
const Person = function(first, last) {
  this.getFullName = function() {
    return "";
  };
  return "";
};
```

# --solutions--

```js
const Person = function(first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function(){
    return firstName;
  };

  this.getLastName = function(){
    return lastName;
  };

  this.getFullName = function(){
    return firstName + " " + lastName;
  };

  this.setFirstName = function(str){
    firstName = str;
  };


  this.setLastName = function(str){
    lastName = str;
  };

  this.setFullName = function(first, last){
    firstName = first;
    lastName = last;
  };
};
```
