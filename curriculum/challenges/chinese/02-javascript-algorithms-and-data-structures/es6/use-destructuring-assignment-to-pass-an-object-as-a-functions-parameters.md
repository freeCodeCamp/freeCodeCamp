---
id: 587d7b8a367417b2b2512b4d
title: 使用解构赋值将对象作为函数的参数传递
challengeType: 1
forumTopicId: 301217
---

# --description--

在某些情况下，你可以在函数的参数里直接解构对象。

请看以下代码：

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```

上面的操作解构了传给函数的对象。这样的操作也可以直接在参数里完成：

```js
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
```

这样的操作去除了多余的代码，使代码更加整洁。 这样做还有个额外的好处：函数不需要再去操作整个对象，而仅仅是操作复制到函数作用域内部的参数。

# --instructions--

对`half`的参数进行解构赋值，使得仅仅将`max`与`min`的值传进函数。

# --hints--

`stats`的类型应该是一个`object`。

```js
assert(typeof stats === 'object');
```

`half(stats)`应该等于`28.015`

```js
assert(half(stats) === 28.015);
```

应该使用解构赋值。

```js
assert(code.replace(/\s/g, '').match(/half=\({\w+,\w+}\)/));
```

应该使用解构参数。

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --solutions--

