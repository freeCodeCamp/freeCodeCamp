---
id: bd7123c9c441eddfaeb4bdef
challengeType: 1
videoUrl: 'https://scrimba.com/c/c7ynnTp'
forumTopicId: 16783
title: 给代码添加注释
---

## Description
<section id='description'>
被注释的代码块在 JavaScript 之中是不会执行的。在代码中写注释是一个非常好的方式让你自己和其他人理解代码。
JavaScript 中的注释方式有以下两种：
使用<code>//</code>注释掉当前行的代码

```js
// This is an in-line comment.
```

你也可以使用多行注释来注释你的代码，以<code>/*</code>开始，用<code>*/</code>来结束，就像下面这样：

```js
/* This is a
multi-line comment */
```

<strong>最佳实践</strong><br>写代码的时候，要定期添加注释对部分代码块进行解释。适当的注释能让别人和你自己更容易看懂代码。
</section>

## Instructions
<section id='instructions'>
尝试创建这两种类型的注释。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个<code>//</code>样式的注释, 被注释的文本至少要包含 5 个字符。
    testString: assert(code.match(/(\/\/)...../g));
  - text: 创建一个<code>/* */</code>样式的注释, 被注释的文本至少要包含 5 个字符。
    testString: assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>


```js
// Fake Comment
/* Another Comment */
```

</section>
