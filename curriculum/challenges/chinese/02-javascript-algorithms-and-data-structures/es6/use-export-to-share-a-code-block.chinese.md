---
id: 587d7b8c367417b2b2512b56
title: Use export to Share a Code Block
challengeType: 1
forumTopicId: 301219
localeTitle: 用 export 来重用代码块
---

## Description
<section id='description'>
假设有一个文件 <code>math_functions.js</code>，该文件包含了数学运算相关的一些函数。其中一个存储在变量 <code>add</code> 里，该函数接受两个数字做为参数返回它们的和。如果想在其它不同的 JavaScript 文件里使用这个函数，就需要 <code>export</code> 它。

```js
export const add = (x, y) => {
  return x + y;
}
```

上面是导出单个函数常用方法，还可以这样导出：

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

导出变量和函数后，就可以在其它文件里导入使用从而避免了代码冗余。重复第一个例子的代码可以导出多个对象或函数，在第二个例子里面的导出语句中添加更多值也可以导出多项，例子如下：

```js
export { add, subtract };
```

</section>

## Instructions
<section id='instructions'>
下面有两个变量需要在别的文件中可以使用。利用刚才展示的第一种方式，导出两个变量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该导出<code>uppercaseString</code>变量。
    testString: assert(code.match(/(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g));
  - text: 应该导出<code>lowercaseString</code>变量。
    testString: assert(code.match(/(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

</section>
