---
id: 587d7b7c367417b2b2512b18
title: 将键值对添加到对象中
challengeType: 1
forumTopicId: 301153
---

# --description--

对象（object）本质上是<dfn>键值对（key-value pair）</dfn>的集合，或者说，一系列被映射到唯一标识符（叫做<dfn>属性（property）</dfn>或者<dfn>键（key）</dfn>）的数据。让我们来看一个很简单的例子：

```js
let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};
```

上面的代码定义了一个叫做`FCC_User`的对象，它有 4 个<dfn>属性</dfn>，每个属性映射一个特定的值。如果我们想知道`FCC_User`有多少`followers`，我们可以这样访问其`followers`属性：

```js
let userData = FCC_User.followers;
// userData 等于 572
```

这叫做<dfn>点符号（dot notation）</dfn>。我们还可以用方括号符号来访问对象中的属性：

```js
let userData = FCC_User['followers'];
// userData 等于 572
```

注意，在用<dfn>方括号符号</dfn>时，我们在括号里写的是字符串`followers`（用引号括起）。方括号符号让我们能用一个变量作为属性名来访问对象的属性（请记住）。若我们在方括号中不写引号而直接写`followers`，JavaScript 引擎会将其看作一个变量，并抛出一个`ReferenceError: followers is not defined`的错误。

# --instructions--

用这样的语法，我们还可以向对象中***新增***键值对。我们已经创建了一个有 3 个属性的`foods`对象，请为其新增 3 项：值为`13`的`bananas`属性、值为`35`的`grapes`属性和值为`27`的`strawberries`属性。

# --hints--

`foods`应该是一个对象。

```js
assert(typeof foods === 'object');
```

`foods`应该有一个值为`13`的`"bananas"`属性。

```js
assert(foods.bananas === 13);
```

`foods`应该有一个值为`35`的`"grapes"`属性。

```js
assert(foods.grapes === 35);
```

`foods`应该有一个值为`27`的`"strawberries"`属性。

```js
assert(foods.strawberries === 27);
```

你应该用点符号或者方括号符号来设置对象的属性。

```js
assert(
  code.search(/bananas:/) === -1 &&
    code.search(/grapes:/) === -1 &&
    code.search(/strawberries:/) === -1
);
```

# --solutions--

