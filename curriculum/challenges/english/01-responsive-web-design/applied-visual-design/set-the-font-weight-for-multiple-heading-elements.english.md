---
id: 587d781c367417b2b2512ac3
title: Set the font-weight for Multiple Heading Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
---

## Description
<section id='description'>
You set the <code>font-size</code> of each heading tag in the last challenge, here you'll adjust the <code>font-weight</code>.
The <code>font-weight</code> property sets how thick or thin characters are in a section of text.
</section>

## Instructions
<section id='instructions'>
<ul><li>Set the <code>font-weight</code> of the <code>h1</code> tag to 800.</li><li>Set the <code>font-weight</code> of the <code>h2</code> tag to 600.</li><li>Set the <code>font-weight</code> of the <code>h3</code> tag to 500.</li><li>Set the <code>font-weight</code> of the <code>h4</code> tag to 400.</li><li>Set the <code>font-weight</code> of the <code>h5</code> tag to 300.</li><li>Set the <code>font-weight</code> of the <code>h6</code> tag to 200.</li></ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should set the <code>font-weight</code> property for the <code>h1</code> tag to 800.
    testString: assert($('h1').css('font-weight') == '800');
  - text: Your code should set the <code>font-weight</code> property for the <code>h2</code> tag to 600.
    testString: assert($('h2').css('font-weight') == '600');
  - text: Your code should set the <code>font-weight</code> property for the <code>h3</code> tag to 500.
    testString: assert($('h3').css('font-weight') == '500');
  - text: Your code should set the <code>font-weight</code> property for the <code>h4</code> tag to 400.
    testString: assert($('h4').css('font-weight') == '400');
  - text: Your code should set the <code>font-weight</code> property for the <code>h5</code> tag to 300.
    testString: assert($('h5').css('font-weight') == '300');
  - text: Your code should set the <code>font-weight</code> property for the <code>h6</code> tag to 200.
    testString: assert($('h6').css('font-weight') == '200');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h1 {
    font-size: 68px;

  }
  h2 {
    font-size: 52px;

  }
  h3 {
    font-size: 40px;

  }
  h4 {
    font-size: 32px;

  }
  h5 {
    font-size: 21px;

  }
  h6 {
    font-size: 14px;

  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  h1 {
    font-size: 68px;
    font-weight: 800;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
  }
  h4 {
    font-size: 32px;
    font-weight: 400;
  }
  h5 {
    font-size: 21px;
    font-weight: 300;
  }
  h6 {
    font-size: 14px;
    font-weight: 200;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

</section>
