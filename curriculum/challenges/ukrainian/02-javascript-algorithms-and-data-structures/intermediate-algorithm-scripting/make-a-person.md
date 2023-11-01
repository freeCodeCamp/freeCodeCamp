---
id: a2f1d72d9b908d0bd72bb9f6
title: Створіть людину
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

Заповніть конструктор об’єкта, використовуючи наведені нижче методи:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
```

Запустіть тести, щоб побачити очікуваний вивід для кожного методу. Ці методи повинні бути єдиними доступними засобами для взаємодії з об’єктом. Кожен тест оголосить новий екземпляр `Person` як `new Person('Bob', 'Ross')`.

# --hints--

Ви не повинні змінювати сигнатуру функції.

```js
assert.match(code, /const\s+Person\s*=\s*function\s*\(\s*first\s*,\s*last\s*\)\s*{/);
```

Ви не повинні перепризначати параметр `first`.

```js
assert.notMatch(code, /\bfirst\s*=\s*/);
```

Ви не повинні перепризначати параметр `last`.

```js
assert.notMatch(code, /\blast\s*=\s*/);
```

Не треба додавати жодних властивостей. `Object.keys(Person).length` завжди має повертати 6.

```js
const _person = new Person('Bob', 'Ross');
_person.setFirstName('Haskell');
_person.setLastName('Curry');
_person.setFullName('John', 'Smith');
assert.lengthOf(Object.keys(_person), 6);
```

Ви повинні мати можливість створити об’єкт `Person`.

```js
const _person = new Person('Bob', 'Ross');
assert.instanceOf(_person, Person);
```

Об’єкт `Person` не повинен мати властивість `firstName`.

```js
const _person = new Person('Bob', 'Ross');
assert.notProperty(_person, 'firstName');
```

Об’єкт `Person` не повинен мати властивість `lastName`.

```js
const _person = new Person('Bob', 'Ross');
assert.notProperty(_person, 'lastName');
```

Метод `.getFirstName()` має повертати рядок `Bob`.

```js
const _person = new Person('Bob', 'Ross');
assert.strictEqual(_person.getFirstName(), 'Bob');
```

`.getLastName()` має повертати рядок `Ross`.

```js
const _person = new Person('Bob', 'Ross');
assert.strictEqual(_person.getLastName(), 'Ross');
```

Метод `.getFullName()` має повертати рядок `Bob Ross`.

```js
const _person = new Person('Bob', 'Ross');
assert.strictEqual(_person.getFullName(), 'Bob Ross');
```

Метод `.getFullName()` має повертати рядок `Haskell Ross` після виклику `.setFirstName('Haskell')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFirstName('Haskell');
assert.strictEqual(_person.getFullName(), 'Haskell Ross');
```

Метод `.getFullName()` має повертати рядок `Bob Curry` після виклику `.setLastName('Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setLastName('Curry');
assert.strictEqual(_person.getFullName(), 'Bob Curry');
```

Метод `.getFullName()` має повертати рядок `Haskell Curry` після виклику `.setFullName('Haskell', 'Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Haskell', 'Curry');
assert.strictEqual(_person.getFullName(), 'Haskell Curry');
```

Метод `.getFirstName()` має повертати рядок `Haskell` після виклику `.setFullName('Haskell', 'Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Haskell', 'Curry');
assert.strictEqual(_person.getFirstName(), 'Haskell');
```

Метод `.getLastName()` має повертати рядок `Curry` після виклику `.setFullName('Haskell', 'Curry')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Haskell', 'Curry');
assert.strictEqual(_person.getLastName(), 'Curry');
```

Метод `.getFullName()` має повертати рядок `Emily Martinez de la Rosa` після виклику `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(_person.getFullName(), 'Emily Martinez de la Rosa');
```

Властивість `.getFirstName()` має повертати рядок `Emily Martinez` після виклику `.setFullName('Emily Martinez', 'de la Rosa')`.

```js
const _person = new Person('Bob', 'Ross');
_person.setFullName('Emily Martinez', 'de la Rosa');
assert.strictEqual(_person.getFirstName(), 'Emily Martinez');
```

Властивість `.getLastName()` має повертати рядок `de la Rosa` після виклику `.setFullName('Emily Martinez', 'de la Rosa')`.

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
