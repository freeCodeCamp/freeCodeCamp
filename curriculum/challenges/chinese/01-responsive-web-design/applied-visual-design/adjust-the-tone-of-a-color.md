---
id: 587d78a4367417b2b2512ad5
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
title: 调整颜色的色调
---

## Description
<section id='description'>
<code>hsl()</code> 使 CSS 更改色调更方便。给纯色添加白色可以创造更浅的色调，添加黑色可以创造更深的色调。另外，还可以通过给纯色添加灰色来同时改变颜色的深浅和明暗。回忆下 <code>hsl()</code> 里面的 ‘s’ 和 ‘l’ 分辨代表饱和度和亮度。饱和度代表灰色的占比，亮度代表白色和黑色的占比。这在当你有了一个基色调却需要微调时非常有用。
</section>

## Instructions
<section id='instructions'>
页面的导航栏目前继承了 <code>header</code> 的 <code>background-color</code>。改变 <code>nav</code> 元素的 <code>background-color</code>，保留基色蓝绿色，调整它的色调和明暗使它具有 80% 的饱和度以及 25% 的亮度。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>nav</code> 元素应该有一个使用 <code>hsl()</code> 属性调节蓝绿色调的 <code>background-color</code> CSS 属性。'
    testString: assert(code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }
  
  nav {
  
  }
  
  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }
  
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  
  nav li {
    display: inline;
    margin-right: 20px;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
  
<header>
  <h1>FCC 中国</h1>
  <nav>
    <ul>
      <li><a href="">首页</a></li>
      <li><a href="">课程</a></li>
      <li><a href="">论坛</a></li>
      <li><a href="">新闻</a></li>
      <li><a href="">设置</a></li>
    </ul>
  </nav>
</header>
```

</div>



</section>

## Solution
<section id='solution'>


```html
// solution required
```

</section>
              