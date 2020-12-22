---
id: 587d7b8a367417b2b2512b4e
title: 使用模板字面量创建字符串
challengeType: 1
forumTopicId: 301200
---

# --description--

模板字符串是 ES6 的另外一项新的功能。这是一种可以轻松构建复杂字符串的方法。

模板字符串可以使用多行字符串和字符串插值功能。

请看以下代码：

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

```

这段代码有许多的不同： 首先，上面的例子使用了反引号（`` ` ``）而不是引号（`'` 或者 `"`）定义字符串。 其次，注意字符串是多行的，不管是代码还是输出。这是因为在字符串内插入了 `\n`。 上面使用的`${variable}`语法是一个占位符。这样一来，你将不再需要使用`+`运算符来连接字符串。当需要在字符串里增加变量的时候，你只需要在变量的外面括上`${`和`}`，并将其放在字符串里就可以了。 这个新的方式使你可以更灵活的创建复杂的字符串。

# --instructions--

使用模板字符串的反引号的语法来展示`result`对象的`failure`数组内的每个条目。每个条目应该括在带有`text-warning`类属性的`li`标签中，并赋值给`resultDisplayArray`。

使用遍历方法（可以是任意形式的循环）输出指定值。

# --hints--

`resultDisplayArray` 是一个包含了 `result failure` 内的消息的数组。

```js
assert(
  typeof makeList(result.failure) === 'object' &&
    resultDisplayArray.length === 3
);
```

`resultDisplayArray` 要有正确的输出。

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

应使用模板字符串。

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

应该遍历。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --solutions--

