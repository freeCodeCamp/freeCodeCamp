---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JRmSg'
forumTopicId: 301181
localeTitle: 使用三元运算符
---

## Description
<section id='description'>
条件运算符（也称为三元运算符）的用处就像写成一行的 if-else 表达式
语法如下所示：
<code>condition ? statement-if-true : statement-if-false;</code>
以下函数使用 if-else 语句来检查条件：

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

上面的函数使用条件运算符写法如下：

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

</section>

## Instructions
<section id='instructions'>
在<code>checkEqual</code>函数中使用条件运算符检查两个数字是否相等，函数应该返回 "Equal" 或 "Not Equal"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkEqual</code>应该使用条件运算符。
    testString: assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
  - text: <code>checkEqual(1, 2)</code>应该返回 "Not Equal"。
    testString: assert(checkEqual(1, 2) === "Not Equal");
  - text: <code>checkEqual(1, 1)</code>应该返回 "Equal"。
    testString: assert(checkEqual(1, 1) === "Equal");
  - text: <code>checkEqual(1, -1)</code>应该返回 "Not Equal"。
    testString: assert(checkEqual(1, -1) === "Not Equal");
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```

</section>
