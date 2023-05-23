---
id: a2f1d72d9b908d0bd72bb9f6
title: Eine Person erstellen
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

Fülle den Objekt-Konstruktor mit den folgenden Methoden aus:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

Führe die Tests durch, um die erwartete Ausgabe für jede Methode zu sehen. Die Methoden, die ein Argument annehmen, dürfen nur ein Argument akzeptieren, welches ein String sein muss. Diese Methoden müssen die einzigen verfügbaren Möglichkeiten sein, um mit dem Objekt zu interagieren.

# --hints--

Es sollten keine Eigenschaften hinzugefügt werden. `Object.keys(bob).length` sollte immer 6 zurückgeben.

```js
assert.strictEqual(
  Object.keys((function () {
    let bob = new Person('Bob Ross');
    bob.setFirstName('Haskell');
    bob.setLastName('Curry');
    bob.setFullName('John Smith');
    return bob;
  })()).length,
  6
 );
```

`bob instanceof Person` sollte `true` zurückgeben.

```js
assert.deepEqual(_test_bob instanceof Person, true);
```

`bob.firstName` sollte `undefined` zurückgeben.

```js
assert.deepEqual(_test_bob.firstName, undefined);
```

`bob.lastName` sollte `undefined` zurückgeben.

```js
assert.deepEqual(_test_bob.lastName, undefined);
```

`bob.getFirstName()` sollte den String `Bob` zurückgeben.

```js
assert.deepEqual(_test_bob.getFirstName(), 'Bob');
```

`bob.getLastName()` sollte den String `Ross` zurückgeben.

```js
assert.deepEqual(_test_bob.getLastName(), 'Ross');
```

`bob.getFullName()` sollte den String `Bob Ross` zurückgeben.

```js
assert.deepEqual(_test_bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` sollte den String `Haskell Ross` nach `bob.setFirstName("Haskell")` zurückgeben.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFirstName('Haskell');
    return _test_bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` sollte den String `Haskell Curry` nach `bob.setLastName("Curry")` zurückgeben.

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

`bob.getFullName()` sollte den String `Haskell Curry` nach `bob.setFullName("Haskell Curry")` zurückgeben.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFullName('Haskell Curry');
    return _test_bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` sollte den String `Haskell` nach `bob.setFullName("Haskell Curry")` zurückgeben.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFullName('Haskell Curry');
    return _test_bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` sollte den String `Curry` nach `bob.setFullName("Haskell Curry")` zurückgeben.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFullName('Haskell Curry');
    return _test_bob.getLastName();
  })(),
  'Curry'
);
```

# --seed--

## --after-user-code--

```js
const _test_bob = new Person('Bob Ross');
```

## --seed-contents--

```js
const Person = function(firstAndLast) {
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
```

# --solutions--

```js
const Person = function(firstAndLast) {

  let firstName, lastName;

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

const bob = new Person('Bob Ross');
bob.getFullName();
```
