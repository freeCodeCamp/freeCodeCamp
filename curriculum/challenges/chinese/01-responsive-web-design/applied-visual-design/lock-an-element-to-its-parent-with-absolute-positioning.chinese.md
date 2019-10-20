---
id: 587d781e367417b2b2512acb
title: Lock an Element to its Parent with Absolute Positioning
challengeType: 0
videoUrl: ''
localeTitle: 使用绝对定位将元素锁定到其父级
---

## Description
<section id="description"> CSS <code>position</code>属性的下一个选项是<code>absolute</code> ，它将元素相对于其父容器锁定到位。与<code>relative</code>位置不同，这会从文档的正常流中移除元素，因此周围的项会忽略它。 CSS偏移属性（顶部或底部和左侧或右侧）用于调整位置。具有绝对定位的一个细微差别在于它将相对于其最近<em>定位的</em>祖先被锁定。如果您忘记向父项添加位置规则（通常使用<code>position: relative;</code> ），浏览器将继续查找链并最终默认为body标记。 </section>

## Instructions
<section id="instructions">通过将其<code>position</code>声明为<code>absolute</code>将<code>#searchbar</code>元素锁定到其<code>section</code>的右上角。给它每个50像素的<code>top</code>和<code>right</code>偏移。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#searchbar</code>元素的<code>position</code>应设置为<code>absolute</code> 。'
    testString: 'assert($("#searchbar").css("position") == "absolute", "The <code>#searchbar</code> element should have a <code>position</code> set to <code>absolute</code>.");'
  - text: '您的代码应该在<code>#searchbar</code>元素上使用50像素的<code>top</code> CSS偏移量。'
    testString: 'assert($("#searchbar").css("top") == "50px", "Your code should use the <code>top</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'
  - text: '您的代码应该在<code>#searchbar</code>元素上使用50像素的<code>right</code> CSS偏移量。'
    testString: 'assert($("#searchbar").css("right") == "50px", "Your code should use the <code>right</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'

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
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
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

```js
// solution required
```
</section>
