---
id: 587d774d367417b2b2512a9e
title: 使用标题显示内容的层次关系
challengeType: 0
videoUrl: 'https://scrimba.com/c/cqVEktm'
forumTopicId: 301026
dashedName: use-headings-to-show-hierarchical-relationships-of-content
---

# --description--

标题标签（包括 `h1` 到 `h6`）有很高的使用率，它们用于描述内容的主题。 在屏幕阅读器中，用户为了快速了解页面纲要，可以设置让阅读器只朗读页面标题。 这意味着我们不应仅仅为了设置不同字号而使用标题，而应让标签本身具有语义化和实质性的含义，同时不同标题之间也应关联（具有层级关系）。

*语义化*的意思是，标签名能准确地表达它所含内容的信息类型。

如果你正在撰写带有导言、主体和结论的论文，在你的概要中把结论作为主体的一部分是没有意义的。 结论应该是单独的一个部分。 类似地，页面中的标题标签也应该是有序的，并且能表明内容的层次关系。

在使用中，相同级别（或者更高级别）的标题标签用于开启新的章节，低一级别的标题标签用于开启上一级标题标签的子小节。

例如，一个页面带有一个 `h2` 元素，后面跟着几个用 `h4` 元素标记的小节，这会使屏幕阅读器用户感到困惑。 尽管在浏览器所显示的页面中，错误地使用这六个标题标签依然可以让它们在视觉效果上看起来很合理。 但此时，我们应该按照层级正确地使用标签，然后用 CSS 来调整样式。

最后一点，每个页面应只有一个 `h1` 标签，用来概括说明页面的主题。 另外，这六个标题标签可以让搜索引擎获取页面的大纲。

# --instructions--

Camper Cat 希望他的网站有一个介绍如何成为忍者的页面。 帮助他修改好标题，以便他的标记使内容具有语义意义，并显示其章节的父级与子级的关系。 你需要将所有的 `h5` 标题标签调整为恰当的级别，来说明它们是 `h2` 标题标签的子级。 调整为 `h3` 标签即可。

# --hints--

你的代码应该有 6 个 `h3` 元素。

```js
assert($('h3').length === 6);
```

确保 `h3` 有结束标签

```js
assert((code.match(/\/h3/g) || []).length === 6);
```

你的代码不应包含任何 `h5` 元素。

```js
assert($('h5').length === 0);
```

不应该存在 `h5` 的结束标签。

```js
assert(/\/h5/.test(code) === false);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```
