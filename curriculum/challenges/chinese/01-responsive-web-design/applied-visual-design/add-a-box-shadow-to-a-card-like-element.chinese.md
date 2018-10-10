---
id: 587d781b367417b2b2512abe
title: Add a box-shadow to a Card-like Element
challengeType: 0
videoUrl: ''
localeTitle: 将盒子阴影添加到类似卡片的元素
---

## Description
<section id="description"> <code>box-shadow</code>属性将一个或多个阴影应用于元素。 <code>box-shadow</code>属性采用<code>offset-x</code>值（从元素水平推动阴影的距离）， <code>offset-y</code> （从元素垂直推动阴影的距离）， <code>blur-radius</code> ， <code>spread-radius</code>和颜色价值，按此顺序。 <code>blur-radius</code>和<code>spread-radius</code>值是可选的。这是一个用于创建具有一些模糊的多个阴影的CSS的示例，大多数是透明的黑色： <blockquote> box-shadow：0 10px 20px rgba（0,0,0,0.19），0 6px 6px rgba（0,0,0,0.23）; </blockquote></section>

## Instructions
<section id="instructions">该元素现在具有<code>thumbnail</code> ID。使用此选择器，使用上面的示例CSS值在卡上放置一个<code>box-shadow</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应为<code>thumbnail</code> ID添加<code>box-shadow</code>属性。
    testString: 'assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g), "Your code should add a <code>box-shadow</code> property for the <code>thumbnail</code> id.");'
  - text: 您应该使用给定的CSS作为<code>box-shadow</code>值。
    testString: 'assert(code.match(/box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\),\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi), "You should use the given CSS for the <code>box-shadow</code> value.");'

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
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
