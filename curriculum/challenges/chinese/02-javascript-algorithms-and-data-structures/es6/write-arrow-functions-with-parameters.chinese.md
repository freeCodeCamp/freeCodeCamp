---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
challengeType: 1

videoUrl: ''
localeTitle: Write Arrow Functions with Parameters
---

## Description
<section id='description'>
和一般的函数一样，你也可以给箭头函数传递参数。
<blockquote>// 给传入的数值乘以 2 并返回结果<br>const doubler = (item) => item * 2;</blockquote>
你同样可以给箭头函数传递多个参数。
</section>

## Instructions
<section id='instructions'>
使用箭头函数的语法重写<code>myConcat</code>函数，使其可以将<code>arr2</code>的内容填充在<code>arr1</code>里。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 替换掉所有的<code>var</code>关键字。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g), '替换掉所有的<code>var</code>关键字。');
  - text: <code>myConcat</code>应该是一个常量 (使用<code>const</code>)。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+myConcat/g), '<code>myConcat</code>应该是一个常量 (使用<code>const</code>)。');
  - text: <code>myConcat</code>应该是一个函数。
    testString: assert(typeof myConcat === 'function', '<code>myConcat</code>应该是一个函数。');
  - text: <code>myConcat()</code>返回正确的<code>array</code>。
    testString: assert(() => { const a = myConcat([1], [2]); return a[0] == 1 && a[1] == 2; }, '<code>myConcat()</code>返回正确的<code>array</code>。');
  - text: 不要使用<code>function</code>关键字。
    testString: getUserInput => assert(!getUserInput('index').match(/function/g), '不要使用<code>function</code>关键字。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              