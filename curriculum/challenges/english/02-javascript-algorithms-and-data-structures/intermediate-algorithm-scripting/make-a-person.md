---
id: a2f1d72d9b908d0bd72bb9f6
title: Make a Person
challengeType: 5
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
setFullName(firstAndLast)
```

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

# --hints--

`Object.keys(bob).length` should return 6.

```js
assert.deepEqual(Object.keys(bob).length, 6);
```

`bob instanceof Person` should return `true`.

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` should return `undefined`.

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` should return `undefined`.

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` should return the string `Bob`.

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` should return the string `Ross`.

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` should return the string `Bob Ross`.

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` should return the string `Haskell Ross` after `bob.setFirstName("Haskell")`.

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` should return the string `Haskell Curry` after `bob.setLastName("Curry")`.

```js
assert.strictEqual(
  (function () {
    var _bob = new Person('Haskell Ross');
    _bob.setLastName('Curry');
    return _bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFullName()` should return the string `Haskell Curry` after `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` should return the string `Haskell` after `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` should return the string `Curry` after `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getLastName();
  })(),
  'Curry'
);
```

# --seed--

## --after-user-code--

```js
if(bob){
  bob = new Person("Bob Ross");
}
```

## --seed-contents--

```js
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

# --solutions--

```js
var Person = function(firstAndLast) {

  var firstName, lastName;

  function updateName(str) {
    firstName = str.split(" ")[0];
    lastName = str.split(" ")[1];
  }

  updateName(firstAndLast);

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

  this.setFullName = function(str){
    updateName(str);
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
```
