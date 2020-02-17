---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
localeTitle: 用 h2 元素代表副标题
---

## Description
<section id='description'>
在接下来的几节课里，我们将会由浅入深地制作一个 CatPhotoApp。
这节课将会引入<code>h2</code>元素。
这些元素用来告诉浏览器，网站的结构是什么样子。<code>h1</code>元素通常被用作主标题，<code>h2</code>元素通常被用作副标题，还有<code>h3</code>、<code>h4</code>、<code>h5</code>、<code>h6</code>元素，它们分别用作不同级别的标题。
</section>

## Instructions
<section id='instructions'>
在<code>h1</code>元素下面创建一个<code>h2</code>元素，元素内容为：<code>CatPhotoApp</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '创建一个<code>h2</code>元素。'
    testString: assert(($("h2").length > 0));
  - text: '<code>h2</code>元素应该有结束标记。'
    testString: assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length);
  - text: '<code>h2</code>元素的内容应为：<code>CatPhotoApp</code>。'
    testString: assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()));
  - text: '<code>h1</code>元素的内容应为：<code>Hello World</code>。'
    testString: assert.isTrue((/hello(\s)+world/gi).test($("h1").text()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>
```

</div>



</section>

## Solution
<section id='solution'>
</section>
              