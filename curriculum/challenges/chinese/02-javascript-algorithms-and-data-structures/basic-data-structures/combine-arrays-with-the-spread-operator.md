---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1
forumTopicId: 301156
localeTitle: 组合使用数组和扩展运算符
---

## Description
<section id='description'>
<dfn>展开运算符</dfn>的另一个大用处是合并数组，或者将某个数组的所有元素插入到另一个数组的任意位置。用传统的语法我们也可以连接两个数组，但只能两个数组首尾相接。而展开语法能使下面的操作变得极其简单：

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray 现在是 ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```

使用展开语法，我们这样就实现了一个用传统方法要写得很复杂冗长的操作。
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个返回<code>sentence</code>变量的<code>spreadOut</code>函数，请修改该函数，利用<dfn>展开运算符</dfn>使该函数返回数组<code>['learning', 'to', 'code', 'is', 'fun']</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>spreadOut</code>应该返回<code>[&quot;learning&quot;, &quot;to&quot;, &quot;code&quot;, &quot;is&quot;, &quot;fun&quot;]</code>'
    testString: assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
  - text: <code>spreadOut</code>函数里应该用到展开语法
    testString: assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

```

</section>
