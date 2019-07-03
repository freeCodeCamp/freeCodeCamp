---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1

videoUrl: ''
localeTitle: Use Destructuring Assignment to Assign Variables from Objects
---

## Description
<section id='description'>
我们之前看到了展开操作符是如何展开数组的内容的。
对于对象，我们也可以做同样的操作。<dfn>解构赋值</dfn> 就是可以从对象中直接获取对应值的语法。
看看以下 ES5 的代码：
<blockquote>var voxel = {x: 3.6, y: 7.4, z: 6.54 };<br>var x = voxel.x; // x = 3.6<br>var y = voxel.y; // y = 7.4<br>var z = voxel.z; // z = 6.54</blockquote>
使用 ES6 的解构语法可以完成同样的赋值语句：
<blockquote>const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54</blockquote>
如果你想将<code>voxel.x</code>,<code>voxel.y</code>,<code>voxel.z</code>的值分别赋给<code>a</code>,<code>b</code>,<code>c</code>，可以用以下这种很棒的方式：
<blockquote>const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54</blockquote>
你可以这样理解：“将<code>x</code>地址中的值拷贝到<code>a</code>当中去。”，等等。
</section>

## Instructions
<section id='instructions'>
使用解构语法去得到输入的<code>str</code>字符串的长度，并将长度赋值给<code>len</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 函数<code>getLength()</code>返回一个数字。
    testString: assert(typeof getLength('') === 'number', '函数<code>getLength()</code>返回一个数字。');
  - text: "<code>getLength('FreeCodeCamp')</code>应该返回<code>12</code>。"
    testString: assert(getLength("FreeCodeCamp") === 12, '<code>getLength("FreeCodeCamp")</code>应该返回<code>12</code>。');
  - text: 使用解构语法来重新赋值。
    testString: 'getUserInput => assert(getUserInput("index").match(/\{\s*length\s*:\s*len\s*}\s*=\s*str/g),"使用解构语法来重新赋值。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              