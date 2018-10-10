---
id: 587d781b367417b2b2512abc
title: Adjust the background-color Property of Text
challengeType: 0
videoUrl: ''
localeTitle: 调整文本的背景颜色属性
---

## Description
<section id="description">您可以为包含要强调的文本的元素添加<code>background-color</code> ，而不是调整整体背景或文本颜色以使前景易于阅读。此挑战使用<code>rgba()</code>而不是<code>hex</code>代码或普通<code>rgb()</code> 。 <blockquote> rgba代表： <br> r =红色<br> g =绿色<br> b =蓝色<br> a = alpha /不透明度</blockquote> RGB值的范围可以是0到255.α值的范围可以从1（完全不透明或纯色）到0（完全透明或清晰）。 <code>rgba()</code>非常适合在这种情况下使用，因为它允许您调整不透明度。这意味着您不必完全阻挡背景。您将使用<code>background-color: rgba(45, 45, 45, 0.1)</code>来应对此挑战。它产生深灰色，在低不透明度值为0.1时几乎是透明的。 </section>

## Instructions
<section id="instructions">要使文本更突出，请将<code>h4</code>元素的<code>background-color</code>调整为给定的<code>rgba()</code>值。同样对于<code>h4</code> ，删除<code>height</code>属性并添加10px的<code>padding</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '您的代码应该将<code>background-color</code>属性添加到设置为<code>rgba(45, 45, 45, 0.1)</code>的<code>h4</code>元素。'
    testString: 'assert(code.match(/background-color:\s*?rgba\(\s*?45\s*?,\s*?45\s*?,\s*?45\s*?,\s*?0?\.1\s*?\)/gi), "Your code should add a <code>background-color</code> property to the <code>h4</code> element set to <code>rgba(45, 45, 45, 0.1)</code>.");'
  - text: 您的代码应该为<code>h4</code>元素添加<code>padding</code>属性并将其设置为10像素。
    testString: 'assert($("h4").css("padding-top") == "10px" && $("h4").css("padding-right") == "10px" && $("h4").css("padding-bottom") == "10px" && $("h4").css("padding-left") == "10px", "Your code should add a <code>padding</code> property to the <code>h4</code> element and set it to 10 pixels.");'
  - text: 应删除<code>h4</code>元素上的<code>height</code>属性。
    testString: 'assert(!($("h4").css("height") == "25px"), "The <code>height</code> property on the <code>h4</code> element should be removed.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


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
<div class="fullCard">
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
