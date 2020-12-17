---
id: 587d7b85367417b2b2512b39
title: 捕捉函数调用后缺少的左括号和右括号
challengeType: 1
forumTopicId: 301185
---

# --description--

当函数或方法不接受任何参数时，你可能忘记在调用它时加上空的左括号和右括号。通常，函数调用的结果会保存在变量中，供其他代码使用。可以通过将变量值（或其类型）打印到控制台，查看输出究竟是一个函数引用还是函数调用的返回值来检测这类错误。

下面示例中的两个变量是不同的:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
```

# --instructions--

修复代码，把调用函数`getNin​​e`的返回值赋给变量`result`。

# --hints--

你应该修复变量`result`使其为函数`getNine`的返回值。

```js
assert(result == 9);
```

你应该调用`getNine`函数。

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --solutions--

