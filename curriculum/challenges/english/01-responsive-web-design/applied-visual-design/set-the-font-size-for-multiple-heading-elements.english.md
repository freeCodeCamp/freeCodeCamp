---
id: 587d781c367417b2b2512ac2
title: Set the font-size for Multiple Heading Elements
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
---

## Description
<section id='description'>
The <code>font-size</code> property is used to specify how large the text is in a given element. This rule can be used for multiple elements to create visual consistency of text on a page. In this challenge, you'll set the values for all <code>h1</code> through <code>h6</code> tags to balance the heading sizes.
</section>

## Instructions
<section id='instructions'>
<ul><li>Set the <code>font-size</code> of the <code>h1</code> tag to 68px.</li><li>Set the <code>font-size</code> of the <code>h2</code> tag to 52px.</li><li>Set the <code>font-size</code> of the <code>h3</code> tag to 40px.</li><li>Set the <code>font-size</code> of the <code>h4</code> tag to 32px.</li><li>Set the <code>font-size</code> of the <code>h5</code> tag to 21px.</li><li>Set the <code>font-size</code> of the <code>h6</code> tag to 14px.</li></ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should set the <code>font-size</code> property for the <code>h1</code> tag to 68 pixels.
    testString: assert($('h1').css('font-size') == '68px');
  - text: Your code should set the <code>font-size</code> property for the <code>h2</code> tag to 52 pixels.
    testString: assert($('h2').css('font-size') == '52px');
  - text: Your code should set the <code>font-size</code> property for the <code>h3</code> tag to 40 pixels.
    testString: assert($('h3').css('font-size') == '40px');
  - text: Your code should set the <code>font-size</code> property for the <code>h4</code> tag to 32 pixels.
    testString: assert($('h4').css('font-size') == '32px');
  - text: Your code should set the <code>font-size</code> property for the <code>h5</code> tag to 21 pixels.
    testString: assert($('h5').css('font-size') == '21px');
  - text: Your code should set the <code>font-size</code> property for the <code>h6</code> tag to 14 pixels.
    testString: const regex = /h6\s*\{\s*font-size\s*:\s*14px\s*(;\s*\}|\})/i; assert.strictEqual(true, regex.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>






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

</section>
