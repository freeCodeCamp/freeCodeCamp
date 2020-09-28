---
id: bad82fee1322bd9aedf08721
title: Understand Absolute versus Relative Units
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
---

## Description
<section id='description'>
The last several challenges all set an element's margin or padding with pixels (<code>px</code>). Pixels are a type of length unit, which is what tells the browser how to size or space an item. In addition to <code>px</code>, CSS has a number of different length unit options that you can use.
The two main types of length units are absolute and relative. Absolute units tie to physical units of length. For example, <code>in</code> and <code>mm</code> refer to inches and millimeters, respectively. Absolute length units approximate the actual measurement on a screen, but there are some differences depending on a screen's resolution.
Relative units, such as <code>em</code> or <code>rem</code>, are relative to another length value. For example, <code>em</code> is based on the size of an element's font. If you use it to set the <code>font-size</code> property itself, it's relative to the parent's <code>font-size</code>.
<strong>Note:</strong> There are several relative unit options that are tied to the size of the viewport. They are covered in the Responsive Web Design Principles section.
</section>

## Instructions
<section id='instructions'>
Add a <code>padding</code> property to the element with class <code>red-box</code> and set it to <code>1.5em</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>red-box</code> class should have a <code>padding</code> property.
    testString: assert($('.red-box').css('padding-top') != '0px' && $('.red-box').css('padding-right') != '0px' && $('.red-box').css('padding-bottom') != '0px' && $('.red-box').css('padding-left') != '0px');
  - text: Your <code>red-box</code> class should give elements 1.5em of <code>padding</code>.
    testString: assert(code.match(/\.red-box\s*?{[\s\S]*padding:\s*?1\.5em/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```

</section>
