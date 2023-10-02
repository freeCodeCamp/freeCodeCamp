---
id: cf1111c1c12feddfaeb3bdef
title: 用 if 语句来表达条件逻辑
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

`if` 语句用于在代码中做出决定。 关键字 `if` 告诉 JavaScript 在小括号中的条件为真的情况下去执行定义在大括号里面的代码。 这种条件被称为 `Boolean` 条件，因为他们只可能是 `true`（真）或 `false`（假）。

当条件的计算结果为 `true`，程序执行大括号内的语句。 当布尔条件的计算结果为 `false`，大括号内的代码将不会执行。

**伪代码**

<blockquote>if（<i>条件为真</i>）{<br> <i>语句被执行</i><br>}</blockquote>

**示例**

```js
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` 返回字符串 `It was true`，`test(false)` 返回字符串 `It was false`。

当 `test` 被调用，并且传递进来的参数值为 `true` 时，`if` 语句会计算 `myCondition` 的结果，看它是否为 `true`。 如果条件为 `true`，函数会返回 `It was true`。 当 `test` 被调用，并且传递进来的参数值为 `false` 时，`myCondition` *不* 为 `true`，并且不执行大括号后面的语句，函数返回 `It was false`。

# --instructions--

在函数内部创建一个 `if` 语句，如果该参数 `wasThatTrue` 值为 `true`，返回 `Yes, that was true`，否则，返回`No, that was false`。

# --hints--

`trueOrFalse` 应该是一个函数

```js
assert(typeof trueOrFalse === 'function');
```

`trueOrFalse(true)` 应该返回一个字符串

```js
assert(typeof trueOrFalse(true) === 'string');
```

`trueOrFalse(false)` 应该返回一个字符串

```js
assert(typeof trueOrFalse(false) === 'string');
```

`trueOrFalse(true)` 应该返回 `Yes, that was true`

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

`trueOrFalse(false)`应该返回 `No, that was false`

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
