---
id: 587d7791367417b2b2512ab3
title: Create Visual Balance Using the text-align Property
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
---

## Description
<section id='description'>
This section of the curriculum focuses on Applied Visual Design. The first group of challenges build on the given card layout to show a number of core principles.
Text is often a large part of web content. CSS has several options for how to align it with the <code>text-align</code> property.
<code>text-align: justify;</code> causes all lines of text except the last line to meet the left and right edges of the line box.
<code>text-align: center;</code> centers the text
<code>text-align: right;</code> right-aligns the text
And <code>text-align: left;</code> (the default) left-aligns the text.
</section>

## Instructions
<section id='instructions'>
Align the <code>h4</code> tag's text, which says "Google", to the center. Then justify the paragraph tag which contains information about how Google was founded.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the text-align property on the <code>h4</code> tag to set it to center.
    testString: assert($('h4').css('text-align') == 'center');
  - text: Your code should use the text-align property on the <code>p</code> tag to set it to justify.
    testString: assert($('p').css('text-align') == 'justify');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
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
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</section>
