---
id: 587d78a5367417b2b2512ada
title: Use the CSS Transform scale Property to Scale an Element on Hover
challengeType: 0

videoUrl: ''
localeTitle: Use the CSS Transform scale Property to Scale an Element on Hover
---

## Description
<section id='description'>
<code>transform</code>属性有很多函数，可以对元素进行调整大小、移动、旋转、翻转等操作。当使用伪类描述元素的指定状态如<code>:hover</code>时，<code>transform</code>属性可以方便的给元素添加交互。
下面是当用户悬停段落元素时，段落大小缩放到原始大小 2.1 倍的例子：
<blockquote>p:hover {<br>&nbsp;&nbsp;transform: scale(2.1);<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
给<code>div</code>伪类<code>hover</code>添加<code>transform</code>属性，使其当鼠标悬停时大小缩放到原始大小的 1.1 倍。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>div</code>元素在悬停时大小应该缩放到原始大小的 1.1 倍。
    testString: 'assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi), "<code>div</code>元素在悬停时大小应该缩放到原始大小的 1.1 倍。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  div { ,    width: 70%;,    height: 100px;,    margin:  50px auto;,    background: linear-gradient(,      53deg,,      #ccfffc,,      #ffcccf,    );,  },  ,  ,  ,</style>,,<div></div>
```





</div>





</section>

              