---
id: a2f1d72d9b908d0bd72bb9f6
title: Fazer uma pessoa
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

Preencha o construtor do objeto com os seguintes métodos abaixo:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
```

Execute os testes para ver a saída esperada para cada método. Estes métodos devem constituir o único meio de interação com o objeto. Cada teste declara uma nova instância de `Person` como `new Person('Bob', 'Ross')`.

# --hints--

Você não deve alterar a assinatura da função.

```js
assert.match(code, /const\s+Person\s*=\s*function\s*\(\s*first\s*,\s*last\s*\)\s*{/);
```

Você não deve reatribuir o parâmetro `first`.

```js
assert.notMatch(code, /first\s*=\s*/);
```

Você não deve reatribuir o parâmetro `last`.

```js
assert.notMatch(code, /last\s*=\s*/);
```

Nenhuma propriedade deve ser adicionada. `Object.keys(Person).length` deve sempre retornar 6.

```js
const person = new Person('Bob', 'Ross');
person.setFirstName('Haskell');
person.setLastName('Curry');
person.setFullName('John', 'Smith');
assert.lengthOf(Object.keys(person), 6);
```

Você deve ser capaz de instanciar o objeto `Person`.

```js
const person = new Person('Bob', 'Ross');
assert.instanceOf(person, Person);
```

O objeto `Person` deve ter a propriedade `firstName`.

```js
const person = new Person('Bob', 'Ross');
assert.notProperty(person, 'firstName');
```

O objeto `Person` deve ter a propriedade `lastName`.

```js
const person = new Person('Bob', 'Ross');
assert.notProperty(person, 'lastName');
```

O método `.getFirstName()` deve retornar a string `Bob`.

```js
const person = new Person('Bob', 'Ross');
assert.strictEqual(person.getFirstName(), 'Bob');
```

O método `.getLastName()` deve retornar a string `Ross`.

```js
const person = new Person('Bob', 'Ross');
assert.strictEqual(person.getLastName(), 'Ross');
```

O método `.getFullName()` deve retornar a string `Bob Ross`.

```js
const person = new Person('Bob', 'Ross');
assert.strictEqual(person.getFullName(), 'Bob Ross');
```

O método `.getFullName()` deve retornar a string `Haskell Ross` após a chamada de `.setFirstName('Haskell')`.

```js
const person = new Person('Bob', 'Ross');
person.setFirstName('Haskell');
assert.strictEqual(person.getFullName(), 'Haskell Ross');
```

O método `.getFullName()` deve retornar a string `Bob Curry` após a chamada de `.setLastName('Curry')`.

```js
const person = new Person('Bob', 'Ross');
person.setLastName('Curry');
assert.strictEqual(person.getFullName(), 'Bob Curry');
```

O método `.getFullName()` deve retornar a string `Haskell Curry` após a chamada de `.setFullName('Haskell', 'Curry')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Haskell', 'Curry');
assert.strictEqual(person.getFullName(), 'Haskell Curry');
```

O método `.getFirstName()` deve retornar a string `Haskell` após a chamada de `.setFullName('Haskell', 'Curry')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Haskell', 'Curry');
assert.strictEqual(person.getFirstName(), 'Haskell');
```

O método `.getLastName()` deve retornar a string `Curry` após a chamada de `.setFullName('Haskell', 'Curry')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Haskell', 'Curry');
assert.strictEqual(person.getLastName(), 'Curry');
```

O método `.getFullName()` deve retornar a string `Emily Martinez de la Rosa` após a chamada de `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(person.getFullName(), 'Emily Martinez de la Rosa');
```

O método `.getFirstName()` deve retornar a string `Emily Martinez` após a chamada de `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const person = new Person('Bob', 'Ross');
person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(person.getFirstName(), 'Emily Martinez');
```

O método `.getLastName()` deve retornar a string `de la Rosa` após a chamada de `.setFullName('Emily Martinez', 'de la Rosa')`.

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
