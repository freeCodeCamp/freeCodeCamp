---
id: 587d781b367417b2b2512abb
title: Create a Horizontal Line Using the hr Element
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/c3bR8t7'
forumTopicId: 301049
---

## Description
<section id='description'>
You can use the <code>hr</code> tag to add a horizontal line across the width of its containing element. This can be used to define a change in topic or to visually separate groups of content.
</section>

## Instructions
<section id='instructions'>
Add an <code>hr</code> tag underneath the <code>h4</code> which contains the card title.
<strong>Note:</strong> In HTML, <code>hr</code> is a self-closing tag, and therefore doesn't need a separate closing tag.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add an <code>hr</code> tag to the markup.
    testString: assert($('hr').length == 1);
  - text: The <code>hr</code> tag should come between the title and the paragraph.
    testString: assert(code.match(/<\/h4>\s*?<hr(>|\s*?\/>)\s*?<p>/gi));

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
      <h4><s>Google</s>Alphabet</h4>

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
      <h4><s>Google</s>Alphabet</h4>
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

</section>
