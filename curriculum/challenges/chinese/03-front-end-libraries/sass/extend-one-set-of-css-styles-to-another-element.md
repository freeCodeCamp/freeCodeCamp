---
id: 587d7fa5367417b2b2512bbd
challengeType: 0
forumTopicId: 301456
title: 将一组CSS样式扩展到另一个元素
---

## Description
<section id='description'>
Sass 有一个名为<code>extend</code>的功能，可以很容易地从一个元素中借用 CSS 规则并在另一个元素上重用它们。
例如，下面的 CSS 规则块设置了<code>.panel</code>class 的样式。它有<code>background-color</code>，<code>height</code>和<code>border</code>。

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

现在你需要另一个名为<code>.big-panel</code>的面板。它具有与<code>.panel</code>相同的基本属性，但还需要<code>width</code>和<code>font-size</code>。
可以从<code>.panel</code>复制并粘贴初始 CSS 规则，但是当你添加更多类型的面板时，代码会变得重复。
<code>extend</code>指令是一种重用为一个元素编写的规则的简单方法，然后为另一个元素添加更多：

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

除了新样式之外，<code>.big-panel</code>将具有与<code>.panel</code>相同的属性。
</section>

## Instructions
<section id='instructions'>
创建一个扩展<code>.info</code>的 class<code>.info-important</code>，并将<code>background-color</code>设置为洋红色。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>info-important</code>class 应该将<code>background-color</code>设置为<code>magenta</code>。
    testString: assert(code.match(/\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi));
  - text: <code>info-important</code>class 应使用<code>@extend</code>继承<code>info</code>class 的样式。
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
  .info-important{
    @extend .info;
    background-color: magenta;
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

</section>
