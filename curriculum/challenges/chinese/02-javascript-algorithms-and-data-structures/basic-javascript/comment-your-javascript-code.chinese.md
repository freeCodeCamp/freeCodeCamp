---
id: bd7123c9c441eddfaeb4bdef
title: Comment Your JavaScript Code
challengeType: 1
videoUrl: ''
localeTitle: 评论您的JavaScript代码
---

## Description
<section id="description">注释是JavaScript有意忽略的代码行。注释是一种很好的方式，可以将注释留给自己和其他人，这些人稍后需要弄清楚代码的作用。在JavaScript中编写注释有两种方法：使用<code>//</code>将告诉JavaScript忽略当前行上的其余文本： <blockquote> //这是一个内嵌评论。 </blockquote>您可以使用<code>/*</code>开头并以<code>*/</code>结尾的多行注释： <blockquote> /* 这是一个<br>多行评论* / </blockquote> <strong>最佳实践</strong> <br>在编写代码时，应定期添加注释以阐明代码部分的功能。良好的评论可以帮助传达您的代码的意图 - 包括他人<em>和</em>未来的自我。 </section>

## Instructions
<section id="instructions">尝试创建每种评论类型之一。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个包含至少五个字母的<code>//</code>样式注释。
    testString: 'assert(code.match(/(\/\/)...../g), "Create a <code>//</code> style comment that contains at least five letters.");'
  - text: 创建包含至少五个字母的<code>/* */</code>样式注释。
    testString: 'assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm), "Create a <code>/* */</code> style comment that contains at least five letters.");'

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
// solution required
```
</section>
