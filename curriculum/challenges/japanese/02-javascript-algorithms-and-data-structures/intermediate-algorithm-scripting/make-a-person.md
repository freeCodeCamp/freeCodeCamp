---
id: a2f1d72d9b908d0bd72bb9f6
title: 人を作成する
challengeType: 1
forumTopicId: 16020
dashedName: make-a-person
---

# --description--

次のメソッドを持つオブジェクトコンストラクターを記述してください。

```js
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```

テストを実行して、各メソッドに対して期待される出力を確認してください。 引数を取るメソッドは 1 つの引数のみを受け取る必要があり、それは文字列でなければなりません。 これらのメソッドのみをオブジェクトとやり取りする手段とする必要があります。

# --hints--

プロパティを追加しないでください。 `Object.keys(bob).length` は常に 6 を返す必要があります。

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

`bob instanceof Person` は `true` を返す必要があります。

```js
assert.deepEqual(bob instanceof Person, true);
```

`bob.firstName` は `undefined` を返す必要があります。

```js
assert.deepEqual(bob.firstName, undefined);
```

`bob.lastName` は `undefined` を返す必要があります。

```js
assert.deepEqual(bob.lastName, undefined);
```

`bob.getFirstName()` は文字列 `Bob` を返す必要があります。

```js
assert.deepEqual(bob.getFirstName(), 'Bob');
```

`bob.getLastName()` は文字列 `Ross` を返す必要があります。

```js
assert.deepEqual(bob.getLastName(), 'Ross');
```

`bob.getFullName()` は文字列 `Bob Ross` を返す必要があります。

```js
assert.deepEqual(bob.getFullName(), 'Bob Ross');
```

`bob.getFullName()` は、`bob.setFirstName("Haskell")` の後に文字列 `Haskell Ross` を返す必要があります。

```js
assert.strictEqual(
  (function () {
    bob.setFirstName('Haskell');
    return bob.getFullName();
  })(),
  'Haskell Ross'
);
```

`bob.getFullName()` は、`bob.setLastName("Curry")` の後に文字列 `Haskell Curry` を返す必要があります。

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

`bob.getFullName()` は、`bob.setFullName("Haskell Curry")` の後に文字列 `Haskell Curry` を返す必要があります。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFullName();
  })(),
  'Haskell Curry'
);
```

`bob.getFirstName()` は、`bob.setFullName("Haskell Curry")` の後に文字列 `Haskell` を返す必要があります。

```js
assert.strictEqual(
  (function () {
    bob.setFullName('Haskell Curry');
    return bob.getFirstName();
  })(),
  'Haskell'
);
```

`bob.getLastName()` は、`bob.setFullName("Haskell Curry")` の後に文字列 `Curry` を返す必要があります。

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
