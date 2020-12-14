---
id: 587d781e367417b2b2512acc
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
title: 固定定位的参照物是浏览器的窗口
---

## Description
<section id='description'>
接下来要介绍的是 <code>fixed</code> 定位，它是一种特殊的绝对（absolute）定位，区别是其包含块是浏览器窗口。和绝对定位类似，<code>fixed</code> 定位使用 top、bottom、left 和 right 属性来调整元素的位置，并且会将元素从当前的文档流里面移除，其它元素会忽略它的存在。
<code>fixed</code> 定位和 <code>absolute</code> 定位的最明显的区别是 <code>fixed</code> 定位元素不会随着屏幕滚动而移动。
</section>

## Instructions
<section id='instructions'>
代码里的导航栏已经添加了值为 <code>navbar</code> 的 id。把它的 <code>position</code> 设置成<code>fixed</code>，设定其 <code>top</code >和 <code>left</code> 为 0 像素。添加代码之后，滑动预览窗口，观察导航栏的位置。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>>#navbar</code> 元素应当有一个值为 <code>fixed</code> 的 <code>position</code> CSS 属性'
    testString: assert($('#navbar').css('position') == 'fixed');
  - text: '你的 <code>#navbar</code> 元素应当有值为 <code>0px</code> 的 <code>top</code> CSS 属性。'
    testString: assert($('#navbar').css('top') == '0px');
  - text: '你的 <code>#navbar</code> 元素应当有值为 <code>0px</code> 的 <code>left</code> CSS 属性。'
    testString: assert($('#navbar').css('left') == '0px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #navbar {
    
    
    
    width: 100%;
    background-color: #767676;
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
  }
</style>
<body>
  <header>
    <h1>欢迎!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">网站首页</a></li>
        <li><a href="">联系我们</a></li>
      </ul>
    </nav>
  </header>
  <p>当导航条固定在浏览器窗口上时，我会上移。</p>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              