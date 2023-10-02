---
id: 587d7b7d367417b2b2512b1e
title: Object.keys() による全オブジェクトキーの配列の生成
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

`Object.keys()` メソッドで、オブジェクトにあるすべてのキーを含む配列を生成することも可能です。 このメソッドはオブジェクトを引数として取り、オブジェクト内の各プロパティを表す文字列の配列を返します。 ここでも、配列内のエントリに対する特定の順序はありません。

# --instructions--

`getArrayOfUsers` 関数の記述を完成させて、引数として受け取ったオブジェクトのすべてのプロパティを含む配列を返してください。

# --hints--

`users` オブジェクトには `Alan`、`Jeff`、`Sarah`、`Ryan` のキーのみを含めます。

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

`getArrayOfUsers` 関数は、`users` オブジェクト内のすべてのキーを含む配列を返す必要があります。

```js
assert(
  (function () {
    users.Sam = {};
    users.Lewis = {};
    let R = getArrayOfUsers(users);
    return (
      R.indexOf('Alan') !== -1 &&
      R.indexOf('Jeff') !== -1 &&
      R.indexOf('Sarah') !== -1 &&
      R.indexOf('Ryan') !== -1 &&
      R.indexOf('Sam') !== -1 &&
      R.indexOf('Lewis') !== -1
    );
  })() === true
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(getArrayOfUsers(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```
