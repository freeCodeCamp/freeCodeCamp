---
id: 587d7b8c367417b2b2512b58
challengeType: 1
forumTopicId: 301199
title: 用 export default 创建一个默认导出
---

## Description
<section id='description'>
在<code>export</code>的课程中，学习了<dfn>命名导出</dfn>语法。这可以在其他文件中引用一些函数或者变量。
还需要了解另外一种被称为<dfn>默认导出</dfn>的<code>export</code>的语法。在文件中只有一个值需要导出的时候，通常会使用这种语法。它也常常用于给文件或者模块创建返回值。
下面是一个简单的<code>export default</code>例子：

```js
// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}
```

注意：当使用<code>export default</code>去声明一个文件或者模块的返回值时，在每个文件或者模块中应当只默认导出一个值。特别地，能将<code>export deafult</code>与<code>var</code>，<code>let</code>与<code>const</code>一起使用。
</section>

## Instructions
<section id='instructions'>
下面的函数应该在这个模块中返回一个值。请添加需要的代码：
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 正确的使用<code>export</code>进行返回。
    testString: assert(code.match(/export\s+default\s+function(\s+subtract\s*|\s*)\(\s*x,\s*y\s*\)\s*{/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function subtract(x, y) {
  return x - y;
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
export default function subtract(x, y) {
  return x - y;
}
```

</section>
