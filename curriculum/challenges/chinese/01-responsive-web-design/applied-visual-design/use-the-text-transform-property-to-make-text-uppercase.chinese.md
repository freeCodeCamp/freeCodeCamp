---
id: 587d781c367417b2b2512ac0
title: Use the text-transform Property to Make Text Uppercase
challengeType: 0
videoUrl: ''
localeTitle: 使用text-transform属性使文本为大写
---

## Description
<section id="description"> CSS中的<code>text-transform</code>属性用于更改文本的外观。这是一种方便的方法，可确保网页上的文字始终如一，而无需更改实际HTML元素的文本内容。下表显示了不同的<code>text-transform</code>值如何更改示例文本“转换我”。 <table class="table table-striped"><thead><tr><th>值</th><th>结果</th></tr></thead><tbody><tr><td> <code>lowercase</code> </td> <td> “改变我” </td></tr><tr><td> <code>uppercase</code> </td> <td> “改变我” </td></tr><tr><td> <code>capitalize</code> </td> <td> “改变我” </td></tr><tr><td> <code>initial</code> </td> <td>使用默认值</td></tr><tr><td> <code>inherit</code> </td> <td>使用父元素的<code>text-transform</code>值</td></tr><tr><td> <code>none</code> </td> <td> <strong>默认值：</strong>使用原始文本</td></tr></tbody></table></section>

## Instructions
<section id="instructions">使用<code>text-transform</code>属性将<code>h4</code>的<code>text-transform</code>为大写。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h4</code>文本应为大写。
    testString: 'assert($("h4").css("text-transform") === "uppercase", "The <code>h4</code> text should be uppercase.");'
  - text: 不应更改h4的原始文本。
    testString: 'assert(($("h4").text() !== $("h4").text().toUpperCase()), "The original text of the h4 should not be changed.");'

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
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
