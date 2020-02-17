---
id: 587d78a4367417b2b2512ad3
title: Adjust the Color of Various Elements to Complementary Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
localeTitle: 将各种元素的颜色调整为互补色
---

## Description
<section id='description'>
通过前面关卡的学习，我们知道了补色搭配能形成强列的对比效果，让内容更富生机。但是如果使用不当效果会适得其反，比如如果文字背景色和文字颜色互为补色，文字会很难看清。通常的做法是，一种颜色做为主要颜色，其补色用来装点页面。
</section>

## Instructions
<section id='instructions'>
使用深青色（<code>#09A7A1</code>）做为页面主色，用其补色橙色（<code>#FF790E</code>）来装饰登录按钮。把 <code>header</code> 和 <code>footer</code> 的 <code>background-color</code> 从黑色改成深青色。然后把 <code>h2</code> 的文字 <code>color</code> 也改成深青色。最后，把 <code>button</code> 的 <code>background-color</code> 改成橙色。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>header</code> 元素应该有一个值为 <code>#09A7A1</code> 的 <code>background-color</code> CSS 属性。'
    testString: "assert($('header').css('background-color') == 'rgb(9, 167, 161)');"
  - text: '<code>footer</code> 元素应该有一个值为 <code>#09A7A1</code> 的 <code>background-color</code>CSS 属性。'
    testString: "assert($('footer').css('background-color') == 'rgb(9, 167, 161)');"
  - text: '<code>h2</code> 元素应该有一个值为 <code>#09A7A1</code> 的 <code>color</code> CSS 属性。'
    testString: "assert($('h2').css('color') == 'rgb(9, 167, 161)');"
  - text: '<code>button</code> 元素应该有一个值为 <code>#FF790E</code> 的 <code>background-color</code> CSS 属性。'
    testString: "assert($('button').css('background-color') == 'rgb(255, 121, 14)');"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>freeCodeCamp 中国</h1>
</header>
<main>
  <article>
    <h2>freeCodeCamp 成都社区</h2>
    <p>【freeCodeCamp 成都社区】是一个非营利性的公益性技术社区，由一群编程技术爱好者利用业余时间搭建的一个友好的交流、学习、互助的平台，帮助开发者、技术爱好者提升个人技术能力，同时帮助企业解决人才问题。</p>
    <button><a href="https://freecodecamp-chengdu.github.io/" target="_blank">更多</a></button>
  </article>
  <article>
    <h2>freeCodeCamp 深圳社区</h2>
    <p>【freeCodeCamp 深圳社区】面向深圳所有有意学习编程、热爱编程、甚至想要通过编程找到一份好工作的学生和社会群众，传承 freeCodeCamp 中文社区的主旨思想，倡导人人皆可编程。</p>
    <button><a href="https://freecodecamp-shenzhen.github.io/" target="_blank">更多</a></button>
  </article>
</main>
<br>
<footer>&copy;2020 freeCodeCamp 中国</footer>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              