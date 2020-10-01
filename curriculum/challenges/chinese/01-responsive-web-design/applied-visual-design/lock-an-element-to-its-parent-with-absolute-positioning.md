---
id: 587d781e367417b2b2512acb
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
title: 绝对定位的参照物是元素的父元素
---

## Description
<section id='description'>
接下来要介绍 CSS <code>position</code> 属性的取值选项 <code>absolute</code>，<code>absolute</code> 相对于其包含块定位。和 <code>relative</code> 定位不一样，<code>absolute</code> 定位会将元素从当前的文档流里面移除，周围的元素会忽略它。可以用 CSS 的 top、bottom、left 和 right 属性来调整元素的位置。
<code>absolute</code> 定位比较特殊的一点是元素的定位参照于最近的已定位祖先元素。如果它的父元素没有添加定位规则（默认是 <code>position:relative;</code>）,浏览器会继续寻找直到默认的 body 标签。
</section>

## Instructions
<section id='instructions'>
通过声明 <code>position</code> 为 <code>absolute</code>，固定 <code>#searchbar</code> 元素到它父元素 <code>section</code> 的右上角。即设定其 <code>top</code> 和 <code>right</code> 为 50 像素。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#searchbar</code> 元素应当有一个值为 <code>absolute</code> 的 <code>position</code> CSS 属性。'
    testString: assert($('#searchbar').css('position') == 'absolute');
  - text: '你的 <code>#searchbar</code> 元素应当有值为 <code>50px</code> 的 <code>top</code> CSS 属性。'
    testString: assert($('#searchbar').css('top') == '50px');
  - text: '你的 <code>#searchbar</code> 元素应当有值为 <code>50px</code> 的 <code>right</code> CSS 属性。'
    testString: assert($('#searchbar').css('right') == '50px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #searchbar {
    
    
    
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>欢迎！</h1>
  <section>
    <form id="searchbar">
      <label for="search">搜索：</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
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
              