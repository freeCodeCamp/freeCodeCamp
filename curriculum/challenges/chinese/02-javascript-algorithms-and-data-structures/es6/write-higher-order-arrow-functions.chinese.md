---
id: 587d7b88367417b2b2512b45
title: Write Higher Order Arrow Functions
challengeType: 1

videoUrl: ''
localeTitle: Write Higher Order Arrow Functions
---

## Description
<section id='description'>
我们已经见识到了箭头函数在处理数据时候的强大之处。
箭头函数在类似<code>map()</code>，<code>filter()</code>，<code>reduce()</code>等需要其他函数作为参数来处理数据的高阶函数里会很好用。
阅读以下代码：
<blockquote>FBPosts.filter(function(post) {<br>&nbsp;&nbsp;return post.thumbnail !== null && post.shares > 100 && post.likes > 500;<br>})</blockquote>
我们写下了<code>filter</code>函数，并尽量保证可读性。现在让我们用箭头函数来写同样的代码看看：
<blockquote>FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)</blockquote>
这段代码完成了同样的任务，却变得更加简短易懂了。
</section>

## Instructions
<section id='instructions'>
使用箭头函数的语法来计算<code>squaredIntegers</code>数组里正整数的平方（分数不是整数）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 替换掉所有的<code>var</code>关键字。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g), '替换掉所有的<code>var</code>关键字。');
  - text: <code>squaredIntegers</code>应该是一个常量 (使用<code>const</code>)。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+squaredIntegers/g), '<code>squaredIntegers</code>应该是一个常量 (使用<code>const</code>)。');
  - text: <code>squaredIntegers</code>应该是一个<code>array</code>。
    testString: assert(Array.isArray(squaredIntegers), '<code>squaredIntegers</code>应该是一个<code>array</code>');
  - text: <code>squaredIntegers</code> 应该是<code>[16, 1764, 36]</code>
    testString: assert(squaredIntegers[0] === 16 && squaredIntegers[1] === 1764 && squaredIntegers[2] === 36, '<code>squaredIntegers</code> 应该是<code>[16, 1764, 36]</code>');
  - text: 不要使用<code>function</code>关键字。
    testString: getUserInput => assert(!getUserInput('index').match(/function/g), '不要使用<code>function</code>关键字。');
  - text: 不要使用循环
    testString: getUserInput => assert(!getUserInput('index').match(/(for)|(while)/g), '不要使用循环');
  - text: 请使用<code>map</code>,<code>filter</code>, 或者<code>reduce</code>。
    testString: getUserInput => assert(getUserInput('index').match(/map|filter|reduce/g), '请使用<code>map</code>,<code>filter</code>, 或者<code>reduce</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              