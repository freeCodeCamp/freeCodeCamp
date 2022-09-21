---
id: 587d7b7d367417b2b2512b1d
title: 使用 for...in 语句遍历对象
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

如果我们想要遍历对象中的所有属性， 只需要使用 JavaScript 中的 <dfn>for...in</dfn> 语句即可。 以遍历 `users` 对象的属性为例：

```js
for (let user in users) {
  console.log(user);
}
```

这将记录 `Alan`、`Jeff` 和 `Sarah` - 每个值都在自己的行中。

在上面的代码中，我们定义了一个 `user` 变量。 可以观察到，这个变量在遍历对象的语句执行过程中会一直被重置并赋予新值，结果就是不同的用户名打印到了 console 中。

**注意：**对象中的键是无序的，这与数组不同。 因此，一个对象中某个属性的位置，或者说它出现的相对顺序，在引用或访问该属性时是不确定的。

# --instructions--

我们已经定义了一个 `countOnline` 函数，它接收一个 users 对象参数。 请在其中使用 <dfn>for...in</dfn> 语句来遍历传入函数的 users 对象中的用户，并返回 `online` 属性为 `true` 的用户数量。 以下是一个传入 `countOnline` 函数的对象示例， 注意每个用户都有 `online` 属性，其属性值为 `true` 或 `false`：

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

函数 `countOnline` 中应使用 `for in` 语句遍历传入的对象的对象键。

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

当传入 `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` 时，函数 `countOnline` 应该返回 `1`。

```js
assert(countOnline(usersObj1) === 1);
```

当传入 `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` 时，函数 `countOnline` 应该返回 `2`。

```js
assert(countOnline(usersObj2) === 2);
```

当传入 `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` 时，函数 `countOnline` 应该返回 `0`。

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
