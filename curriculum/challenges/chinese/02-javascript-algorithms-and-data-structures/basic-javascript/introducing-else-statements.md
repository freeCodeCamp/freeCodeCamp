---
id: 56533eb9ac21ba0edf2244da
title: 介绍 else 语句
challengeType: 1
videoUrl: 'https://scrimba.com/c/cek4Efq'
forumTopicId: 18207
---

# --description--

当`if`语句的条件为真，大括号里的代码执行，那如果条件为假呢？正常情况下什么也不会发生。使用else语句，可以执行当条件为假时相应的代码。

```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

# --instructions--

请把多个`if`语句合并为一个`if/else`语句。

# --hints--

你应该只有一个`if`表达式。

```js
assert(code.match(/if/g).length === 1);
```

你应该使用一个`else`表达式。

```js
assert(/else/g.test(code));
```

`testElse(4)`应该返回 "5 or Smaller"。

```js
assert(testElse(4) === '5 or Smaller');
```

`testElse(5)`应该返回 "5 or Smaller"。

```js
assert(testElse(5) === '5 or Smaller');
```

`testElse(6)`应该返回 "Bigger than 5"。

```js
assert(testElse(6) === 'Bigger than 5');
```

`testElse(10)`应该返回 "Bigger than 5"。

```js
assert(testElse(10) === 'Bigger than 5');
```

不要修改上面和下面的代码。

```js
assert(/var result = "";/.test(code) && /return result;/.test(code));
```

# --solutions--

