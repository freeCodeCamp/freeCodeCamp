---
id: a2f1d72d9b908d0bd72bb9f6
title: 创建一个人员对象
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

用以下方法填充对象构造函数：

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

运行测试以查看每个方法的预期输出。 方法接收一个参数，因此必须要有一个参数，并且其类型应该为字符串。 这些方法必须是与对象交互的唯一可用方法。

# --hints--

不应添加属性。 `Object.keys(bob).length` 应返回 6。

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

`bob instanceof Person` 应返回 `true`。

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` 应该返回 `undefined`。

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` 应该返回 `undefined`。

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` 应该返回字符串 `Bob`.

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` 应该返回字符串 `Ross`.

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` 应该返回字符串 `Bob Ross`.

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` 应该在 `bob.setFirstName("Haskell")` 之后返回字符串 `Haskell Ross`。

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` 应该在 `bob.setLastName("Curry")` 之后返回字符串 `Haskell Curry`。

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

`bob.getFullName()` 应该返回字符串 `Haskell Curry` 之后的 `bob.setFullName("Haskell Curry")`。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` 应该返回字符串 `Haskell` 之后的 `bob.setFullName("Haskell Curry")`。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` 应该返回字符串 `Curry` 之后 `bob.setFullName("Haskell Curry")`。

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
