---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: ''
localeTitle: 使用主元素直接跳转到内容
---

## Description
<section id="description"> HTML5引入了许多新元素，为开发人员提供了更多选项，同时还包含了辅助功能。这些标签包括<code>main</code> ， <code>header</code> ， <code>footer</code> ， <code>nav</code> ， <code>article</code>和<code>section</code>等。默认情况下，浏览器渲染这些元素与简单的<code>div</code>类似。但是，在适当的地方使用它们会在标记中提供额外的含义。标记名称本身可以指示它包含的信息类型，这为该内容添加了语义含义。辅助技术可以访问此信息，以便为其用户提供更好的页面摘要或导航选项。 <code>main</code>元素用于包装（您猜对了）主要内容，每页应该只有一个。它旨在包含与页面中心主题相关的信息。它并不意味着包含跨页面重复的项目，例如导航链接或横幅。 <code>main</code>标签还具有嵌入式地标功能，辅助技术可用于快速导航到主要内容。如果您曾在页面顶部看到“跳转到主要内容”链接，则使用主标签会自动为辅助设备提供该功能。 </section>

## Instructions
<section id="instructions"> Camper Cat对他的忍者武器页面有一些重要的想法。通过在<code>header</code>和<code>footer</code>之间添加打开和关闭<code>main</code>标记来帮助他设置标记（在其他挑战中涵盖）。暂时保持<code>main</code>标签为空。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有一个<code>main</code>标记。
    testString: 'assert($("main").length == 1, "Your code should have one <code>main</code> tag.");'
  - text: <code>main</code>标记应位于结束<code>header</code>标记和开放<code>footer</code>标记之间。
    testString: 'assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi), "The <code>main</code> tags should be between the closing <code>header</code> tag and the opening <code>footer</code> tag.");'

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

```js
// solution required
```
</section>
