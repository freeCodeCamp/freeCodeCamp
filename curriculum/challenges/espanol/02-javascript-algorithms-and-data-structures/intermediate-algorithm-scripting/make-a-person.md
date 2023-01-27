---
id: a2f1d72d9b908d0bd72bb9f6
title: Crea una persona
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

Completa el constructor de objetos con los siguientes métodos:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

Ejecuta las pruebas para ver el resultado esperado para cada método. Los métodos que toman un argumento deben aceptar sólo un argumento y tiene que ser una cadena. Estos métodos deben ser el único medio disponible para interactuar con el objeto.

# --hints--

No se deben agregar propiedades. `Object.keys(bob).length` siempre debe devolver 6.

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

`bob instanceof Person` debe devolver `true`.

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` debe devolver `undefined`.

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` debe devolver `undefined`.

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` debe devolver la cadena `Bob`.

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` debe devolver la cadena `Ross`.

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` debe devolver la cadena `Bob Ross`.

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` debe devolver la cadena `Haskell Ross` after `bob.setFirstName("Haskell")`.

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` debe devolver la cadena `Haskell Curry` después de `bob.setLastName("Curry")`.

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

`bob.getFullName()` debe devolver la cadena `Haskell Curry` después de `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` debe devolver la cadena `Haskell` después de `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` debe devolver la cadena `Curry` después de `bob.setFullName("Haskell Curry")`.

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

## --seed-contents--

```js
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
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
