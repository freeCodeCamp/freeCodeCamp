---
id: 587d7fa5367417b2b2512bbd
title: Extend One Set of CSS Styles to Another Element
challengeType: 0
videoUrl: ''
localeTitle: 将一组CSS样式扩展到另一个元素
---

## Description
<section id="description"> Sass有一个名为<code>extend</code>的功能，可以很容易地从一个元素中借用CSS规则并在另一个元素上构建它们。例如，下面的CSS规则块会设置一个<code>.panel</code>类。它有<code>background-color</code> ， <code>height</code>和<code>border</code> 。 <blockquote> 。面板{ <br>背景颜色：红色; <br>身高：70px; <br>边框：2px纯绿色; <br> } </blockquote>现在你想要另一个名为<code>.big-panel</code> 。它具有与<code>.panel</code>相同的基本属性，但也需要<code>width</code>和<code>font-size</code> 。可以从<code>.panel</code>复制并粘贴初始CSS规则，但是当您添加更多类型的面板时，代码会变得重复。 <code>extend</code>指令是一种重用为一个元素编写的规则的简单方法，然后为另一个元素添加更多： <blockquote> 。大面板{ <br> @extend .panel; <br>宽度：150px; <br> font-size：2em; <br> } </blockquote>除了新样式之外， <code>.big-panel</code>还具有与<code>.panel</code>相同的属性。 </section>

## Instructions
<section id="instructions">创建一个扩展<code>.info</code>的类<code>.info-important</code> ，并将<code>background-color</code>设置为洋红色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>info-important</code>类应该将<code>background-color</code>设置为<code>magenta</code> 。
    testString: assert(code.match(/\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi));
  - text: 您的<code>info-important</code>类应使用<code>@extend</code>从<code>info</code>类继承样式。
    testString: assert(code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
