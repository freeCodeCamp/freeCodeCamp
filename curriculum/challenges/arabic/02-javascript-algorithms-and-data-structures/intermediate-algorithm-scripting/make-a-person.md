---
id: a2f1d72d9b908d0bd72bb9f6
title: اصنع شخصا (Make a Person)
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

املأ الـ object constructor بالـ methods التالية أدناه:

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

قم بتشغيل الاختبارات لرؤية المخرجات المتوقعة لكل method. الـ methods التي تأخذ argument يجب أن تقبل argument واحدة فقط ويجب أن تكون string. يجب أن تكون هذه الـ methods هي الوسيلة الوحيدة المتاحة للتفاعل مع الـ object.

# --hints--

لا يجب إضافة أي خواص. `Object.keys(bob).length` يجب دائما أن يرجع 6.

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

`bob instanceof Person` يجب أن يرجع `true`.

```js
assert.deepEqual(_test_bob instanceof Person, true);
```

`bob.firstName` يجب أن يرجع `undefined`.

```js
assert.deepEqual(_test_bob.firstName, undefined);
```

`bob.lastName` يجب أن يرجع `undefined`.

```js
assert.deepEqual(_test_bob.lastName, undefined);
```

`bob.getFirstName()` يجب أن يرجع السلسلة `Bob`.

```js
assert.deepEqual(_test_bob.getFirstName(), 'Bob');
```

`bob.getLastName()` يجب أن يعيد السلسلة `Ross`.

```js
assert.deepEqual(_test_bob.getLastName(), 'Ross');
```

`bob.getFullName()` يجب أن يعيد السلسلة `Bob Ross`.

```js
assert.deepEqual(_test_bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` يجب أن يعيد السلسلة `Haskell Ross` بعد `bob.setFirstName("Haskell")`.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFirstName('Haskell');
    return _test_bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` يجب أن يعيد السلسلة `Haskell Curry` بعد `bob.setLastName("Curry")`.

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

`bob.getFullName()` يجب أن يعيد السلسلة `Haskell Curry` بعد `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFullName('Haskell Curry');
    return _test_bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` يجب أن يعيد السلسلة `Haskell` بعد `bob.setFullName("Haskell Curry")`.

```js
assert.strictEqual(
  (function () {
    _test_bob.setFullName('Haskell Curry');
    return _test_bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` يجب أن يعيد السلسلة `Curry` بعد `bob.setFullName("Haskell Curry")`.

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
