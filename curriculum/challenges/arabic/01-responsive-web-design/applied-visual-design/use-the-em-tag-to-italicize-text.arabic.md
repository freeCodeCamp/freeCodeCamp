---
id: 587d781a367417b2b2512ab9
title: Use the em Tag to Italicize Text
challengeType: 0
videoUrl: ''
localeTitle: استخدم علامة em لإضفاء طابع مائل على النص
---

## Description
<section id="description"> للتأكيد على النص ، يمكنك استخدام علامة <code>em</code> . يعرض هذا النص <code>font-style: italic;</code> ، حيث يقوم المستعرض بتطبيق CSS الخاص <code>font-style: italic;</code> إلى العنصر. </section>

## Instructions
<section id="instructions"> التفاف علامة <code>em</code> حول محتويات علامة الفقرة لاعطائها التركيز. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تضيف الشفرة علامة <code>em</code> إلى الترميز.
    testString: 'assert($("em").length == 1, "Your code should add an <code>em</code> tag to the markup.");'
  - text: يجب أن تلتف العلامة <code>em</code> حول محتويات علامة <code>p</code> ولكنها لا تحمل علامة <code>p</code> نفسها.
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
