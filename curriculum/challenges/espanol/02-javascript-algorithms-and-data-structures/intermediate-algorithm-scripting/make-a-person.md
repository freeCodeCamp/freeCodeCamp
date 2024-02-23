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
setFullName(first, last)
```

Ejecuta las pruebas para ver el resultado esperado para cada método. Estos métodos deben ser el único medio disponible para interaccionar con el objeto. Cada método declarará una nueva instancia de `Person` como `new Person('Bob', 'Ross')`.

# --hints--

No debes cambiiar la signatura de la función.

```js
assert.match(code, /const\s+Person\s*=\s*function\s*\(\s*first\s*,\s*last\s*\)\s*{/);
```

No debes reasignar el parámetro `first`.

```js
assert.notMatch(code, /\bfirst\s*=\s*/);
```

No debes reasignar el parámetro `last`.

```js
assert.notMatch(code, /\blast\s*=\s*/);
```

No deben añadirse propiedades. `Object.keys(Person).length` siempre debe devolver 6.

```js
const _person = new Person('Bob', 'Ross');
_person.setFirstName('Haskell');
_person.setLastName('Curry');
_person.setFullName('John', 'Smith');
assert.lengthOf(Object.keys(_person), 6);
```

Deberías poder instanciar un objeto `Person`.

```js
const _person = new Person('Bob', 'Ross');
assert.instanceOf(_person, Person);
```

El objeto `Person` no debe tener la propiedad `firstName`.

```js
const _person = new Person('Bob', 'Ross');
assert.notProperty(_person, 'firstName');
```

El objeto `Person` no debe tener la propiedad `lastName`.

```js
const _person = new Person('Bob', 'Ross');
assert.notProperty(_person, 'lastName');
```

El método `.getFirstName()` debe devolver la cadena `Bob`.

```js
const _person = new Person('Bob', 'Ross');
assert.strictEqual(_person.getFirstName(), 'Bob');
```

El método `.getLastName()` debe devolver la cadena `Ross`.

```js
const _person = new Person('Bob', 'Ross');
assert.strictEqual(_person.getLastName(), 'Ross');
```

El método `.getFullName()` debe devolver la cadena `Bob Ross`.

```js
const _person = new Person('Bob', 'Ross');
assert.strictEqual(_person.getFullName(), 'Bob Ross');
```

El método `.getFullName()` debe devolver la cadena `Haskell Ross` después de invocar `.setFirstName('Haskell')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFirstName('Haskell');
assert.strictEqual(_person.getFullName(), 'Haskell Ross');
```

El método `.getFullName()` debe devolver la cadena `Bob Curry` después de invocar `.setLastName('Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setLastName('Curry');
assert.strictEqual(_person.getFullName(), 'Bob Curry');
```

El método `.getFullName()` debe devolver la cadena `Haskell Curry` después de invocar `.setFullName('Haskell', 'Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Haskell', 'Curry');
assert.strictEqual(_person.getFullName(), 'Haskell Curry');
```

El método `.getFirstName()` debe devolver la cadena `Haskell` después de invocar `.setFullName('Haskell', 'Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Haskell', 'Curry');
assert.strictEqual(_person.getFirstName(), 'Haskell');
```

El método `.getLastName()` debe devolver la cadena `Curry` después de invocar `.setFullName('Haskell', 'Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Haskell', 'Curry');
assert.strictEqual(_person.getLastName(), 'Curry');
```

El método `.getFullName()` debe devolver la cadena `Emily Martinez de la Rosa` después de invocar `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(_person.getFullName(), 'Emily Martinez de la Rosa');
```

El método `.getFirstName()` debe devolver la cadena `Emily Martinez` tras invocar `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(_person.getFirstName(), 'Emily Martinez');
```

El método `.getLastName()` debe devolver la cadena `de la Rosa` tras invocar `.setFullName('Emily Martinez', 'de la Rosa')`.

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
