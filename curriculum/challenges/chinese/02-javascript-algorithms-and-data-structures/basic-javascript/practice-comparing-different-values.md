---
id: 599a789b454f2bbd91a3ff4d
title: 比较不同值
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
---

# --description--

在上两个挑战中，我们学习了相等运算符 (`==`) 和严格相等运算符 (`===`)。现在让我们快速回顾并实践一下。

如果要比较的值不是同一类型，相等运算符会先执行数据类型转换，然后比较值。而严格相等运算符只比较值，不会进行数据类型转换。

由此可见，相等运算符和严格相等运算符的区别是：前者会执行隐式类型转换，后者不会。

**示例**

```js
3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
```

**提示**  
在JavaScript中，你可以使用`typeof`运算符确定变量的类型或值，如下所示：

```js
typeof 3   // returns 'number'
typeof '3' // returns 'string'
```

# --instructions--

编辑器中的`compareEquality`函数使用相等运算符比较两个值。修改函数，使其仅在值严格相等时返回 "Equal" 。

# --hints--

`compareEquality(10, "10")`应该返回 "Not Equal"。

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)`应该返回 "Not Equal"。

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

你应该使用`===`运算符。

```js
assert(code.match(/===/g));
```

# --solutions--

