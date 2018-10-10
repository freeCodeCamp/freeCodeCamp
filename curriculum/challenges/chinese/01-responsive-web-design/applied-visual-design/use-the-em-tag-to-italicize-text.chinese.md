---
id: 587d781a367417b2b2512ab9
title: Use the em Tag to Italicize Text
challengeType: 0
videoUrl: ''
localeTitle: 使用em标记来显示文本
---

## Description
<section id="description">要强调文本，您可以使用<code>em</code>标记。这显示文本为斜体，因为浏览器应用了<code>font-style: italic;</code>的CSS <code>font-style: italic;</code>对元素。 </section>

## Instructions
<section id="instructions">围绕段落标记的内容包装<code>em</code>标记以强调它。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该在标记中添加<code>em</code>标记。
    testString: 'assert($("em").length == 1, "Your code should add an <code>em</code> tag to the markup.");'
  - text: <code>em</code>标签应该环绕<code>p</code>标签的内容，而不是<code>p</code>标签本身。
    testString: 'assert($("p").children().length == 1 && $("em").children().length == 2, "The <code>em</code> tag should wrap around the contents of the <code>p</code> tag but not the <code>p</code> tag itself.");'

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
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</p>
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
