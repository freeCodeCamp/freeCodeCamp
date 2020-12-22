---
id: 587d7b8f367417b2b2512b60
title: 在函数中重构全局变量
challengeType: 1
forumTopicId: 301235
---

# --description--

目前为止，我们已经看到了函数式编程的两个原则：

1) 不要更改变量或对象——创建新变量和对象，并在需要时从函数返回它们。

2) 声明函数参数——函数内的任何计算仅取决于参数，而不取决于任何全局对象或变量。

给数字增加 1 不够刺激，我们可以在处理数组或更复杂的对象时应用这些原则。

# --instructions--

重构代码，使全局数组`bookList`在函数内部不会被改变。`add`函数可以将指定的`bookName`增加到数组末尾。`remove`函数可以从数组中移除指定`bookName`。两个函数都返回数组，并且任何参数都应该添加到`bookName`前面。

# --hints--

`bookList`不应该改变，应等于`['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']`.

```js
assert(
  JSON.stringify(bookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`newBookList`应等于`['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time']`.

```js
assert(
  JSON.stringify(newBookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'On The Electrodynamics of Moving Bodies',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

`newerBookList`应等于`['The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']`.

```js
assert(
  JSON.stringify(newerBookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae'
    ])
);
```

`newestBookList`应等于`['The Hound of the Baskervilles', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae', 'A Brief History of Time']`.

```js
assert(
  JSON.stringify(newestBookList) ===
    JSON.stringify([
      'The Hound of the Baskervilles',
      'Philosophiæ Naturalis Principia Mathematica',
      'Disquisitiones Arithmeticae',
      'A Brief History of Time'
    ])
);
```

# --solutions--

