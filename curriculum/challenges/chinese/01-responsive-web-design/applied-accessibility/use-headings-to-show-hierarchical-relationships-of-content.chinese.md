---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
challengeType: 0
videoUrl: 'https://scrimba.com/c/cqVEktm'
forumTopicId: 301026
localeTitle: 使用标题显示内容的层次关系
---

## Description
<section id='description'>
标题标签（包括<code>h1</code>到<code>h6</code>）有很高的使用率，它们用于描述内容的主题。在屏幕阅读器中，用户为更快地了解页面内容，可以设置让阅读器只朗读页面标题。这意味着标题标签之间以及标签本身都应语义化，不应仅仅为了获得不同字号而使用不同级别的标题标签。
<em>语义化</em>：标签名能准确地表达它所含内容的信息类型。
对于一篇含有引言、正文、结论的论文，把结论作为引言的一部分没有任何意义，因为结论应该是独立的章节。类似地，页面中的标题标签也应该是有序的，并且能表明内容的层次关系。
在使用中，相同级别（或者更高级别）的标题标签用于开启新的章节，低一级别的标题标签用于开启上一级标题标签的子小节。
举个例子：一个<code>h2</code>标签后紧跟若干<code>h4</code>标签的页面，会让使用屏幕阅读器的用户感到困惑。尽管在页面中，使用这 6 个标题标签可以控制内容的的视觉样式，但我们应该使用 CSS 来调整。
最后一点，每个页面应该只有一个<code>h1</code>标签，用来说明页面主要内容。<code>h1</code>标签和其他的标题标签可以让搜索引擎获取页面的大纲。
</section>

## Instructions
<section id='instructions'>
Camper Cat 希望他的网站有一个介绍如何成为忍者的页面。请帮助他修改标题标签，使它们语义化且顺序正确。你需要将所有的<code>h5</code>标题标签调整为恰当的级别（即<code>h3</code>标题标签），使它们是<code>h2</code>标题标签的子级。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的代码应该包含 6 个<code>h3</code>标签。'
    testString: assert($("h3").length === 6);
  - text: '你的代码不应包含 <code>h5</code> 标签。'
    testString: assert((code.match(/\/h3/g) || []).length===6);
  - text: '代码不应该包含 <code>h5</code> 标记.'
    testString: assert($("h5").length === 0);
  - text: '代码不应该包含 <code>h5</code> 结束标记。'
    testString: assert(/\/h5/.test(code)===false);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              