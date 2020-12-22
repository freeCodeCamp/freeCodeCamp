---
id: 5cfa550e84205a357704ccb6
title: 使用解构赋值来获取对象的值
challengeType: 1
forumTopicId: 301216
---

# --description--

<dfn>解构赋值</dfn> 是 ES6 引入的新语法，用来从数组和对象中提取值，并优雅的对变量进行赋值。

有如下 ES5 代码：

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
```

下面是使用 ES6 解构赋值的等价语句：

```js
const { name, age } = user;
// name = 'John Doe', age = 34
```

在这里，`name` 和 `age` 被自动创建并赋予 `user` 对象相应属性的值。一目了然。

解构赋值的参数数量可以任意。

# --instructions--

把两个赋值语句替换成等价的解构赋值。`today` 和 `tomorrow` 的值应该还为 `HIGH_TEMPERATURES` 对象的 `today` 和 `tomorrow` 属性的值。

# --hints--

应该移除 ES5 赋值语句。

```js
assert(
  !code.match(/today = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/tomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

应该解构创建 `today` 变量。

```js
assert(
  code.match(
    /(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

应该解构创建 `tomorrow` 变量。

```js
assert(
  code.match(
    /(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

# --solutions--

