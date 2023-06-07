---
id: 599a789b454f2bbd91a3ff4d
title: 比较不同值
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

在上两个挑战中，我们学习了相等运算符 (`==`) 和严格相等运算符 (`===`)。 现在让我们快速回顾并实践一下。

如果要比较的值不是同一类型，相等运算符会先执行数据类型转换，然后比较值。 而严格相等运算符只比较值，不会进行数据类型转换。

**示例**

`3 == '3'` 返回 `true` ，因为 JavaScript 执行了从字符串到数字类型的转换。 `3 === '3'` 返回 `false`，因为类型不同，没有进行类型转换。

**提示** 在 JavaScript 中，你可以使用 `typeof` 运算符确定变量或值的类型，如下所示：

```js
typeof 3
typeof '3'
```

`typeof 3` 返回字符串 `number`，`typeof '3'` 返回字符串 `string`。

# --instructions--

编辑器中的 `compareEquality` 函数使用相等运算符比较两个值。 修改函数，使其仅在值严格相等时返回 `Equal` 。

# --hints--

`compareEquality(10, "10")` 应该返回字符串 `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` 应该返回字符串 `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

你应该使用 `===` 运算符

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
