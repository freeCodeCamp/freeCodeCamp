---
id: 587d7b7e367417b2b2512b20
title: 使用数组存储不同类型的数据
challengeType: 1
forumTopicId: 301167
---

# --description--

以下是最简单的<dfn>数组（Array）</dfn>示例：这是一个<dfn>一维数组（one-dimensional array）</dfn>，它只有一层，或者说它里面没有包含其它数组。可以观察到，这个数组中只包含了<dfn>布尔值（booleans）</dfn>、<dfn>字符串（strings）</dfn>、<dfn>数字（numbers）</dfn>以及 JavaScript 中的其他数据类型：

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// 输出 7
```

所有数组都有一个表示长度的属性，我们可以通过 `Array.length` 来访问它。接下来是一个稍复杂的数组示例：这是一个<dfn>多维数组（multi-dimensional Array）</dfn>，或者说是一个包含了其他数组的数组。可以观察到，在这个数组内部还包含了 JavaScript 的<dfn>对象（objects）</dfn>，我们会在后面的挑战中详细讨论该数据结构。现在，你只需要知道数组能够存储复杂的对象数据。

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

我们已经定义了一个名为 `yourArray` 的变量。请修改代码，将一个含有至少 5 个元素的数组赋值给 `yourArray` 变量。你的数组中应包含至少一个 <dfn>string</dfn> 类型的数据、一个 <dfn>number</dfn> 类型的数据和一个 <dfn>boolean</dfn> 类型的数据。

# --hints--

yourArray 应为数组。

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` 应包含至少 5 个元素。

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` 应包含至少一个 `boolean`。

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` 应包含至少一个 `number`。

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` 应包含至少一个 `string`。

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --solutions--

