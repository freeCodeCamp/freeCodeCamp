---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
---

## Description
<section id='description'>
There is a shortcut available to set several flex properties at once. The <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code> properties can all be set together by using the <code>flex</code> property.
For example, <code>flex: 1 0 10px;</code> will set the item to <code>flex-grow: 1;</code>, <code>flex-shrink: 0;</code>, and <code>flex-basis: 10px;</code>.
The default property settings are <code>flex: 0 1 auto;</code>.
</section>

## Instructions
<section id='instructions'>
Add the CSS property <code>flex</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> the values so its <code>flex-grow</code> is <code>2</code>, its <code>flex-shrink</code> is <code>2</code>, and its <code>flex-basis</code> is <code>150px</code>. Give <code>#box-2</code> the values so its <code>flex-grow</code> is <code>1</code>, its <code>flex-shrink</code> is <code>1</code>, and its <code>flex-basis</code> is <code>150px</code>.
These values will cause <code>#box-1</code> to grow to fill the extra space at twice the rate of <code>#box-2</code> when the container is greater than 300px and shrink at twice the rate of <code>#box-2</code> when the container is less than 300px. 300px is the combined size of the <code>flex-basis</code> values of the two boxes.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-1</code> element should have the <code>flex</code> property set to a value of <code>2 2 150px</code>.
    testString: assert($('#box-1').css('flex-grow') == '2' && $('#box-1').css('flex-shrink') == '2' && $('#box-1').css('flex-basis') == '150px');
  - text: The <code>#box-2</code> element should have the <code>flex</code> property set to a value of <code>1 1 150px</code>.
    testString: assert($('#box-2').css('flex-grow') == '1' && $('#box-2').css('flex-shrink') == '1' && $('#box-2').css('flex-basis') == '150px');
  - text: Your code should use the <code>flex</code> property for <code>#box-1</code> and <code>#box-2</code>.
    testString: assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
