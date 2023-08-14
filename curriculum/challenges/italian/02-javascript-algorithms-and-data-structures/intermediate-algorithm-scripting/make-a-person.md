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
setFullName(first, last)
```

Esegui i test per vedere l'output atteso per ogni metodo. Questi metodi devono essere gli unici mezzi disponibili per interagire con l'oggetto. Ogni test dichiarerà una nuova istanza `Person` come `new Person('Bob', 'Ross')`.

# --hints--

Non dovresti cambiare la riga della dichiarazione della funzione.

```js
assert.match(code, /const\s+Person\s*=\s*function\s*\(\s*first\s*,\s*last\s*\)\s*{/);
```

Non dovresti riassegnare il parametro `first`.

```js
assert.notMatch(code, /first\s*=\s*/);
```

Non dovresti riassegnare il parametro `last`.

```js
assert.notMatch(code, /last\s*=\s*/);
```

Nessuna proprietà dovrebbe essere aggiunta. `Object.keys(Person).length` dovrebbe sempre restituire 6.

```js
const person = new Person('Bob', 'Ross');
person.setFirstName('Haskell');
person.setLastName('Curry');
person.setFullName('John', 'Smith');
assert.lengthOf(Object.keys(person), 6);
```

Dovresti essere in grado di istanziare il tuo oggetto `Person`.

```js
const person = new Person('Bob', 'Ross');
assert.instanceOf(person, Person);
```

L'oggetto `Person` non dovrebbe avere una proprietà `firstName`.

```js
const person = new Person('Bob', 'Ross');
assert.notProperty(person, 'firstName');
```

L'oggetto `Person` non dovrebbe avere una proprietà `lastName`.

```js
const person = new Person('Bob', 'Ross');
assert.notProperty(person, 'lastName');
```

Il metodo `.getFirstName()` dovrebbe restituire la stringa `Bob`.

```js
const person = new Person('Bob', 'Ross');
assert.strictEqual(person.getFirstName(), 'Bob');
```

`.getLastName()` dovrebbe restituire la stringa `Ross`.

```js
const person = new Person('Bob', 'Ross');
assert.strictEqual(person.getLastName(), 'Ross');
```

Il metodo `.getFullName()` dovrebbe restituire la stringa `Bob Ross`.

```js
const person = new Person('Bob', 'Ross');
assert.strictEqual(person.getFullName(), 'Bob Ross');
```

Il metodo `.getFullName()` dovrebbe restituire la stringa `Haskell Ross` dopo aver chiamato `.setFirstName('Haskell')`.

```js
const person = new Person('Bob', 'Ross');
person.setFirstName('Haskell');
assert.strictEqual(person.getFullName(), 'Haskell Ross');
```

Il metodo `.getFullName()` dovrebbe restituire la stringa `Bob Curry` dopo aver chiamato `.setLastName('Curry')`.

```js
const person = new Person('Bob', 'Ross');
person.setLastName('Curry');
assert.strictEqual(person.getFullName(), 'Bob Curry');
```

Il metodo `.getFullName()` dovrebbe restituire la stringa `Haskell Curry` dopo aver chiamato `.setFullName('Haskell', 'Curry')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Haskell', 'Curry');
assert.strictEqual(person.getFullName(), 'Haskell Curry');
```

Il metodo `.getFirstName()` deve restituire la stringa `Haskell` dopo aver chiamato `.setFullName('Haskell', 'Curry')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Haskell', 'Curry');
assert.strictEqual(person.getFirstName(), 'Haskell');
```

Il metodo `.getLastName()` dovrebbe restituire la stringa `Curry` dopo aver chiamato `.setFullName('Haskell', 'Curry')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Haskell', 'Curry');
assert.strictEqual(person.getLastName(), 'Curry');
```

Il metodo `.getFullName()` dovrebbe restituire la stringa `Emily Martinez de la Rosa` dopo aver chiamato `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(person.getFullName(), 'Emily Martinez de la Rosa');
```

La proprietà `.getFirstName()` dovrebbe restituire la stringa `Emily Martinez` dopo aver chiamato `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(person.getFirstName(), 'Emily Martinez');
```

La proprietà `.getLastName()` dovrebbe restituire la stringa `de la Rosa` dopo aver chiamato `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(person.getLastName(), 'de la Rosa');
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
