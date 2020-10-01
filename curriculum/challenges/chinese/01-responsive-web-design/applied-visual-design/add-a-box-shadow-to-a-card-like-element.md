---
id: 587d781b367417b2b2512abe
title: Add a box-shadow to a Card-like Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZdUd'
forumTopicId: 301031
localeTitle: 给卡片元素添加 box-shadow
---

## Description
<section id='description'>
<code>box-shadow</code> 属性用来给元素添加阴影，该属性值是由逗号分隔的一个或多个阴影列表。
<code>box-shadow</code> 属性的阴影依次由下面这些值描述：
<ul>
  <li><code>offset-x</code> 阴影的水平偏移量；</li>
  <li><code>offset-y</code> 阴影的垂直偏移量；</li>
  <li><code>blur-radius</code> 模糊半径；</li>
  <li><code>spread-radius</code> 阴影扩展半径；</li>
  <li>颜色。</li>
</ul>
其中 <code>blur-radius</code> 和 <code>spread-radius</code> 是可选的。
可以通过逗号分隔每个 <code>box-shadow</code> 元素的属性来添加多个 box-shadow。
如下为添加了模糊效果的例子，它使用了透明度较高的黑色作为阴影：

```css
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```

</section>

## Instructions
<section id='instructions'>
现在该卡片添加了值为 <code>thumbnail</code> 的 id 属性。把上面的 <code>box-shadow</code> 值赋给卡片。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该给 id 为 <code>thumbnail</code> 的元素添加 <code>box-shadow</code> 属性。'
    testString: assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g));
  - text: '<code>box-shadow</code> 值应该是指定的 CSS 值。'
    testString: assert(code.match(/box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\)\s*?,\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  
  
  
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google 由在<strong>斯坦福大学</strong>攻读<u>理工博士</u>的拉里·佩奇和谢尔盖·布林共同创建。</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">拉里·佩奇</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">谢尔盖·布林</a>
    </div>
  </div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
// solution required
```

</section>
              