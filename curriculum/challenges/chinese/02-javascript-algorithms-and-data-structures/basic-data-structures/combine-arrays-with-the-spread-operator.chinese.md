---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1

videoUrl: ''
localeTitle: Combine Arrays with the Spread Operator
---

## Description
<section id='description'>
<dfn>展开运算符</dfn>的另一个大用处是合并数组，或者将某个数组的所有元素插入到另一个数组的任意位置。用传统的语法我们也可以连接两个数组，但只能两个数组首尾相接。而展开语法能使下面的操作变得极其简单：
<blockquote>let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];<br><br>let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];<br>// thatArray 现在等于 ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']</blockquote>
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
  - text: "<code>spreadOut</code>应该返回<code>['learning', 'to', 'code', 'is', 'fun']</code>。"
    testString: assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun'], '<code>spreadOut</code>应该返回<code>["learning", "to", "code", "is", "fun"]</code>。');
  - text: <code>spreadOut</code>函数里应该用到展开语法。
    testString: assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1, '<code>spreadOut</code>函数里应该用到展开语法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              