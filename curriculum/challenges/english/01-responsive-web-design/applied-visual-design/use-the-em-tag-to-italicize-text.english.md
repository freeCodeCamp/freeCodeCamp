---
id: 587d781a367417b2b2512ab9
title: Use the em Tag to Italicize Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJRBtp'
forumTopicId: 301078
---

## Description
<section id='description'>
To emphasize text, you can use the <code>em</code> tag. This displays text as italicized, as the browser applies the CSS of <code>font-style: italic;</code> to the element.
</section>

## Instructions
<section id='instructions'>
Wrap an <code>em</code> tag around the contents of the paragraph tag to give it emphasis.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add an <code>em</code> tag to the markup.
    testString: assert($('em').length == 1);
  - text: The <code>em</code> tag should wrap around the contents of the <code>p</code> tag but not the <code>p</code> tag itself.
    testString: assert($('p').children().length == 1 && $('em').children().length == 2);

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
