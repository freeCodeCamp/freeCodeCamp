---
id: 587d781e367417b2b2512acc
title: Lock an Element to the Browser Window with Fixed Positioning
challengeType: 0
videoUrl: ''
localeTitle: 使用固定定位将元素锁定到浏览器窗口
---

## Description
<section id="description"> CSS提供的下一个布局方案是<code>fixed</code>位置，这是一种绝对定位，可以相对于浏览器窗口锁定元素。与绝对定位类似，它与CSS偏移属性一起使用，并且还从文档的正常流中移除元素。其他项目不再“实现”它所处的位置，这可能需要在其他地方进行一些布局调整。 <code>fixed</code>位置和<code>absolute</code>位置之间的一个关键区别是，当用户滚动时，具有固定位置的元素将不会移动。 </section>

## Instructions
<section id="instructions">在代码导航栏标有的一个id <code>navbar</code> 。将其<code>position</code>更改为<code>fixed</code> ，并将其偏离<code>top</code> 0像素和<code>left</code> 0像素。注意到（没有）对<code>h1</code>位置的影响，它没有被按下以容纳导航栏并且需要单独调整。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#navbar</code>元素的<code>position</code>应设置为<code>fixed</code> 。'
    testString: 'assert($("#navbar").css("position") == "fixed", "The <code>#navbar</code> element should have a <code>position</code> set to <code>fixed</code>.");'
  - text: '您的代码应该使用<code>#navbar</code>元素上0像素的<code>top</code> CSS偏移量。'
    testString: 'assert($("#navbar").css("top") == "0px", "Your code should use the <code>top</code> CSS offset of 0 pixels on the <code>#navbar</code> element.");'
  - text: '您的代码应使用<code>#navbar</code>元素上0像素的<code>left</code> CSS偏移量。'
    testString: 'assert($("#navbar").css("left") == "0px", "Your code should use the <code>left</code> CSS offset of 0 pixels on the <code>#navbar</code> element.");'

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
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
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
