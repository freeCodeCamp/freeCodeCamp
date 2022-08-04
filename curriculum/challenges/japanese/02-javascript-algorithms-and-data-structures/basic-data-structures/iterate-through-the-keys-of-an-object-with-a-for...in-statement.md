---
id: 587d7b7d367417b2b2512b1d
title: for...in ステートメントによるオブジェクトのキーの繰り返し処理
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

オブジェクト内のすべてのキーの繰り返し処理を必要とする場合があります。 これには、<dfn>for...in</dfn> ステートメントと呼ばれる JavaScript 固有の構文が必要になります。 `users` オブジェクトの場合は次のように記述できます。

```js
for (let user in users) {
  console.log(user);
}
```

これは `Alan`、`Jeff`、`Sarah` の値を、それぞれ別の行に出力します。

このステートメントでは変数 `user` を定義しました。ご覧のように、for...in ステートメントでオブジェクトがループ処理されるとき、この変数は繰り返し処理ごとにオブジェクトの各キーにリセットされ、それぞれのユーザー名がコンソールに出力されます。

**注:** オブジェクトも配列の場合と同じように、格納されているキーの順序は維持されません。つまり、キーを参照したりキーにアクセスしたりするときは、そのキーのオブジェクト内での位置や、表示される相対的な順序は無関係になります。

# --instructions--

関数 `countOnline` を定義しました。この関数は 1 つの引数 (ユーザーオブジェクト) を受け取ります。 この関数の中で <dfn>for...in</dfn> ステートメントを使用して、関数に渡されたユーザーオブジェクトをループ処理し、`online` プロパティが `true` に設定されているユーザーの数を返してください。 たとえば、`countOnline` には次のようなユーザーオブジェクトが渡されます。 各ユーザーは `true` または `false` のいずれかの値を持つ `online` プロパティを持ちます。

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

# --hints--

関数 `countOnline` では `for in` ステートメントを使用して、渡されたオブジェクトのオブジェクトキーを繰り返し処理する必要があります。

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

関数 `countOnline` は、オブジェクト `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` が渡された場合、`1` を返す必要があります。

```js
assert(countOnline(usersObj1) === 1);
```

関数 `countOnline` は、オブジェクト `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` が渡された場合、`2` を返す必要があります。

```js
assert(countOnline(usersObj2) === 2);
```

関数 `countOnline` は、オブジェクト `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` が渡された場合、`0` を返す必要があります。

```js
assert(countOnline(usersObj3) === 0);
```

# --seed--

## --after-user-code--

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

## --seed-contents--

```js
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}
```
