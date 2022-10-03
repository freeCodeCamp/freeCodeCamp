---
id: 587d7b7d367417b2b2512b1d
title: 使用 for...in 語句遍歷對象
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

如果我們想要遍歷對象中的所有屬性， 只需要使用 JavaScript 中的 <dfn>for...in</dfn> 語句即可。 以遍歷 `users` 對象的屬性爲例：

```js
for (let user in users) {
  console.log(user);
}
```

這將記錄 `Alan`、`Jeff` 和 `Sarah` - 每個值都在自己的行中。

在上面的代碼中，我們定義了一個 `user` 變量。 可以觀察到，這個變量在遍歷對象的語句執行過程中會一直被重置並賦予新值，結果就是不同的用戶名打印到了 console 中。

**注意：**對象中的鍵是無序的，這與數組不同。 因此，一個對象中某個屬性的位置，或者說它出現的相對順序，在引用或訪問該屬性時是不確定的。

# --instructions--

我們已經定義了一個 `countOnline` 函數，它接收一個 users 對象參數。 請在其中使用 <dfn>for...in</dfn> 語句來遍歷傳入函數的 users 對象中的用戶，並返回 `online` 屬性爲 `true` 的用戶數量。 以下是一個傳入 `countOnline` 函數的對象示例， 注意每個用戶都有 `online` 屬性，其屬性值爲 `true` 或 `false`：

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

函數 `countOnline` 中應使用 `for in` 語句遍歷傳入的對象的對象鍵。

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

當傳入 `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` 時，函數 `countOnline` 應該返回 `1`。

```js
assert(countOnline(usersObj1) === 1);
```

當傳入 `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` 時，函數 `countOnline` 應該返回 `2`。

```js
assert(countOnline(usersObj2) === 2);
```

當傳入 `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` 時，函數 `countOnline` 應該返回 `0`。

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
