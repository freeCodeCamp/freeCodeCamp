---
id: 587d774e367417b2b2512a9f
title: 使用 main 元素包裹主题内容
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

HTML5 引入了一些新元素，其中包括无障碍特性，给予开发者更多的选择。 HTML5 引入了诸如 `main`、`header`、`footer`、`nav`、`article`、`section` 等大量新标签。

默认情况下，浏览器呈现这些新标签的方式与 `div` 相似。 但是，在适当的地方使用它们，会给标签额外的意义。 仅标签名称就可以表示它所包含的信息类型，这给内容增加了语义含义。 辅助技术可以获取这种信息，为用户提供更好的页面摘要或导航选项。

`main` 标签用于呈现网页的主体内容，且每个页面应只有一个。 这意味着它只应包含与页面中心主题相关的信息， 而不应包含如导航连接、网页横幅等需要在多个页面中重复出现的内容。

`main` 标签的语义化特性可以让辅助工具快速定位到页面的主体。 如果你在页面的顶部看到“跳转到主要内容”的链接，使用 `main` 标签可以自动让辅助设备提供那个功能。

# --instructions--

Camper Cat 对他的忍者武器页面有一些新的想法。 请帮他在 `header` 标签和 `footer` 标签（在接下来的挑战中会详细介绍）之间添加一个有开始和结束标记的 `main` 标签。 现在保持 `main` 标签为空。

# --hints--

应存在一个 `main` 标签。

```js
assert($('main').length == 1);
```

`main` 标签应位于 `header` 标签与 `footer` 标签之间。

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```
