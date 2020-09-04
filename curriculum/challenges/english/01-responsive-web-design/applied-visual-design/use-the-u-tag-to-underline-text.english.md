---
id: 587d781a367417b2b2512ab8
title: Use the u Tag to Underline Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6aQCL'
forumTopicId: 301082
---

## Description
<section id='description'>
To underline text, you can use the <code>u</code> tag. This is often used to signify that a section of text is important, or something to remember. With the <code>u</code> tag, the browser applies the CSS of <code>text-decoration: underline;</code> to the element.
</section>

## Instructions
<section id='instructions'>
Wrap the <code>u</code> tag only around the text "Ph.D. students".
<strong>Note:</strong> Try to avoid using the <code>u</code> tag when it could be confused for a link. Anchor tags also have a default underlined formatting.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add a <code>u</code> tag to the markup.
    testString: assert($('u').length === 1);
  - text: The <code>u</code> tag should wrap around the text <code>Ph.D. students</code>.
    testString: assert($('u').text() === 'Ph.D. students');

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
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
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

</section>
