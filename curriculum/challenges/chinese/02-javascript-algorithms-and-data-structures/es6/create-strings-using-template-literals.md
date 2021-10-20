---
id: 587d7b8a367417b2b2512b4e
title: 使用模板字面量创建字符串
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

模板字符串是 ES6 的另外一项新的功能。 这是一种可以轻松构建复杂字符串的方法。

模板字符串可以使用多行字符串和字符串插值功能。

请看以下代码：

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

控制台将显示字符串 `Hello, my name is Zodiac Hasbro!` 和 `I am 56 years old.`。

这里发生了许多事情。 首先，这个例子使用反引号（`` ` ``），而不是引号（`'` 或者 `"`）将字符串括起来。 其次，注意代码和输出中的字符串都是多行的。 不需要在字符串中插入 `\n`。 上面使用的 `${variable}` 语法是一个占位符。 这样一来，你将不再需要使用 `+` 运算符来连接字符串。 当需要在字符串里增加变量的时候，你只需要在变量的外面括上 `${` 和 `}`，并将其放在模板字符串里就可以了。 同样，你可以在字符串中包含其他表达式，例如 `${a + b}`。 这个新的方式使你可以更灵活地创建复杂的字符串。

# --instructions--

使用模板字符串的反引号的语法创建一个包含条目（`li`）字符串的数组。 每个条目应该是 `result` 对象 `failure` 属性的数组内的元素，并具有 `class` 属性，值为 `text-warning`。 `makeList` 函数应该返回列表项字符串的数组。

使用遍历方法（可以是任意形式的循环）输出指定值（如下）。

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` 应该是一个包含了 `result failure` 信息的数组。

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` 应该输出指定的值。

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

应使用模板字符串和表达式内插。

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

应该使用遍历。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
