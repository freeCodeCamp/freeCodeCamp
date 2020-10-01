---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
localeTitle: 使用 main 元素包裹主题内容
---

## Description
<section id='description'>
HTML5 添加了诸如<code>main</code>、<code>header</code>、<code>footer</code>、<code>nav</code>、<code>article</code>、<code>section</code>等大量新标签，开发人员提供更多的选择，也兼顾了无障碍特性。
默认情况下，浏览器呈现这些新标签的方式与<code>div</code>相似。然而，合理地使用它们，可以使你的标签更加的语义化。辅助技术（如：屏幕阅读器）可以通过这些标签为用户提供更加准确的、易于理解的页面信息。
<code>main</code>标签用于呈现网页的主体内容，且每个页面只能有一个。这意味着它只应包含与页面中心主题相关的信息，而不应包含如导航连接、网页横幅等可以在多个页面中重复出现的内容。
<code>main</code>标签的语义化特性可以使辅助技术快速定位到页面的主体。 如果页面顶部有一个 “跳转到主要内容” 的链接，那么辅助设备会自动识别<code>main</code>标签，实现这个功能。
</section>

## Instructions
<section id='instructions'>
Camper Cat 对他的忍者武器页面有一些新的想法，请帮助他在<code>header</code>标签和<code>footer</code>标签（在接下来的挑战中会详细介绍）之间添加完整<code>main</code>标签来使页面语义化。在这个挑战中，你可以先让<code>main</code>为空。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的代码应该有一个<code>main</code>标签。'
    testString: assert($('main').length == 1);
  - text: '<code>main</code>标签应该在<code>header</code>标签与<code>footer</code>标签之间。'
    testString: assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              