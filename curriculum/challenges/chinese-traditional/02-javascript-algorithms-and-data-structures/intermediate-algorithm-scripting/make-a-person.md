---
id: a2f1d72d9b908d0bd72bb9f6
title: 創建一個人員對象
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

用以下方法填充對象構造函數：

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

運行測試以查看每個方法的預期輸出。 方法接收一個參數，因此必須要有一個參數，並且其類型應該爲字符串。 這些方法必須是與對象交互的唯一可用方法。

# --hints--

不應添加屬性。 `Object.keys(bob).length` 應返回 6。

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

`bob instanceof Person` 應返回 `true`。

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` 應該返回 `undefined`。

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` 應該返回 `undefined`。

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` 應該返回字符串 `Bob`.

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` 應該返回字符串 `Ross`.

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` 應該返回字符串 `Bob Ross`.

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` 應該在 `bob.setFirstName("Haskell")` 之後返回字符串 `Haskell Ross`。

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` 應該在 `bob.setLastName("Curry")` 之後返回字符串 `Haskell Curry`。

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

`bob.getFullName()` 應該返回字符串 `Haskell Curry` 之後的 `bob.setFullName("Haskell Curry")`。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` 應該返回字符串 `Haskell` 之後的 `bob.setFullName("Haskell Curry")`。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` 應該返回字符串 `Curry` 之後 `bob.setFullName("Haskell Curry")`。

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
