---
id: a2f1d72d9b908d0bd72bb9f6
title: Creare una persona
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

Riempi il costruttore dell'oggetto con i seguenti metodi:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

Esegui i test per vedere l'output atteso per ogni metodo. I metodi che prendono un argomento devono accettare un solo argomento ed esso deve essere una stringa. Questi metodi devono essere gli unici mezzi disponibili per interagire con l'oggetto.

# --hints--

Nessuna proprietà dovrebbe essere aggiunta. `Object.keys(bob).length` dovrebbe sempre restituire 6.

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

`bob instanceof Person` dovrebbe restituire `true`.

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` dovrebbe restituire `undefined`.

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` dovrebbe restituire `undefined`.

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` dovrebbe restituire la stringa `Bob`.

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` dovrebbe restituire la stringa `Ross`.

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` dovrebbe restituire la stringa `Bob Ross`.

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` dovrebbe restituire la stringa `Haskell Ross` dopo `bob.setFirstName("Haskell")`.

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` dovrebbe restituire la stringa `Haskell Curry` dopo `bob.setLastName("Curry")`.

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

`bob.getFullName()` dovrebbe restituire la stringa `Haskell Curry` dopo `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` dovrebbe restituire la stringa `Haskell` dopo `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` dovrebbe restituire la stringa `Curry` dopo `bob.setFullName("Haskell Curry")`.

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
