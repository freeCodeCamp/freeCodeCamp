---
id: 5cfa550e84205a357704ccb6
title: 使用解构赋值来获取对象的值
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>解构赋值</dfn>是 ES6 引入的新语法，用来从数组和对象中提取值，并优雅地对变量进行赋值。

有如下 ES5 代码：

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` 的值应该是字符串 `John Doe`， `age` 的值应该是数字 `34`。

下面是使用 ES6 解构赋值语句，实现相同效果：

```js
const { name, age } = user;
```

同样，`name` 的值应该是字符串 `John Doe`， `age` 的值应该是数字 `34`。

在这里，自动创建 `name` 和 `age` 变量，并将 `user` 对象相应属性的值赋值给它们。 这个方法简洁多了。

你可以从对象中提取尽可能多或很少的值。

# --instructions--

把两个赋值语句替换成效果相同的解构赋值语句。 `today` 和 `tomorrow` 的值应该还是 `HIGH_TEMPERATURES` 对象中 `today` 和 `tomorrow` 属性的值。

# --hints--

应该移除 ES5 赋值语句。

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

应该使用解构赋值创建 `today` 变量。

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

应该使用解构赋值创建 `tomorrow` 变量。

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` 应该等于 `77`，`tomorrow` 应该等于 `80`。

```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
