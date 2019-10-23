---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
challengeType: 0
videoUrl: ''
localeTitle: 使用标题显示内容的层次关系
---

## Description
<section id="description">标题（ <code>h1</code>到<code>h6</code>元素）是主力标签，有助于为您的内容提供结构和标签。可以将屏幕阅读器设置为只读取页面上的标题，以便用户获得摘要。这意味着标记中的标题标记具有语义含义并且彼此相关，而不仅仅是因为它们的大小值而被选中是很重要的。 <em>语义</em>意味着您在内容周围使用的标记表示它包含的信息类型。如果你正在撰写一篇带有介绍，正文和结论的论文，那么将结论作为你纲要中正文的一个小节是没有多大意义的。它应该是它自己的部分。同样，网页中的标题标签需要按顺序排列，并指明内容的层次关系。具有相同（或更高）等级的标题开始新的隐含部分，具有较低等级的标题从前一部分的开始子部分开始。例如，带有<code>h2</code>元素的页面后跟几个标有<code>h4</code>标签的子部分会使屏幕阅读器用户<code>h4</code>困惑。有六种选择，使用标签很有吸引力，因为它在浏览器中看起来更好，但您可以使用CSS编辑相对大小。最后一点，每个页面应始终有一个（并且只有一个） <code>h1</code>元素，这是您内容的主要主题。此搜索引擎和其他标题部分由搜索引擎用于理解页面主题。 </section>

## Instructions
<section id="instructions"> Camper Cat希望他的网站上有一个致力于成为忍者的页面。帮助他修复标题，以便他的标记为内容提供语义含义，并显示其部分的正确父子关系。将所有<code>h5</code>标签更改为正确的标题级别，以指示它们是<code>h2</code>标签的子部分。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有六个<code>h3</code>标签。
    testString: 'assert($("h3").length === 6, "Your code should have six <code>h3</code> tags.");'
  - text: 您的代码不应包含任何<code>h5</code>标记。
    testString: 'assert($("h5").length === 0, "Your code should not have any <code>h5</code> tags.");'

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

```js
// solution required
```
</section>
