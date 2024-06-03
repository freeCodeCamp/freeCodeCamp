---
id: 587d7b7d367417b2b2512b1d
title: 使用 for...in 语句遍历对象
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

有时候你需要遍历一个对象中的所有键。 你可以使用 <dfn>for...in</dfn> 循环来做这件事。 for...in 循环是这样的：

```javascript
const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
```

以上代码记录 `milk 1` 和 `eggs 12`，每个键值对单独为一行。

我们在循环头中定义了变量 `food` ，这个变量被设置为每次迭代上对象的每个键值，将每个食物的名称打印到控制台。

**注意：**对象中的键是无序的，这与数组不同。 因此，一个对象中某个属性的位置，或者说它出现的相对顺序，在引用或访问该属性时是不确定的。

# --instructions--

我们定义了一个函数 `countOnline`，它接收一个参数 `allUsers`。 在这个函数中使用 <dfn>for...in</dfn> 语句来遍历 `allUsers` 对象，并返回 `online` 属性为 `true` 的用户数量。 一个可以传递给 `countOnline` 的对象的例子显示如下。 每个用户都有 `online` 属性，其属性值为 `true` 或 `false`。

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
  __helpers.removeJSComments(code).match(
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

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(allUsers) {
  let numOnline = 0;
  for(const user in allUsers){
    if(allUsers[user].online) {
      numOnline++;
    }
  }
  return numOnline;
}
```
