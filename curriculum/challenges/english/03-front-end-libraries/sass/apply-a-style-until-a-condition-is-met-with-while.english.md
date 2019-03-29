---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
---

## Description
<section id='description'>
The <code>@while</code> directive is an option with similar functionality to the JavaScript <code>while</code> loop. It creates CSS rules until a condition is met.
The <code>@for</code> challenge gave an example to create a simple grid system. This can also work with <code>@while</code>.
<blockquote>$x: 1;<br>@while $x < 13 {<br>&nbsp;&nbsp;.col-#{$x} { width: 100%/12 * $x;}<br>&nbsp;&nbsp;$x: $x + 1;<br>}</blockquote>
First, define a variable <code>$x</code> and set it to 1. Next, use the <code>@while</code> directive to create the grid system <i>while</i> <code>$x</code> is less than 13.
After setting the CSS rule for <code>width</code>, <code>$x</code> is incremented by 1 to avoid an infinite loop.
</section>

## Instructions
<section id='instructions'>
Use <code>@while</code> to create a series of classes with different <code>font-sizes</code>.
There should be 10 different classes from <code>text-1</code> to <code>text-10</code>. Then set <code>font-size</code> to 5px multiplied by the current index number. Make sure to avoid an infinite loop!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>@while</code> directive.
    testString: assert(code.match(/@while /g), 'Your code should use the <code>@while</code> directive.');
  - text: Your code should set an index variable to 1 to start.
    testString: assert(code.match(/\$.*:\s*?1;/gi), 'Your code should set an index variable to 1 to start.');
  - text: Your code should increment the counter variable.
    testString: assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi), 'Your code should increment the counter variable.');
  - text: Your <code>.text-1</code> class should have a <code>font-size</code> of 5px.
    testString: assert($('.text-1').css('font-size') == '5px', 'Your <code>.text-1</code> class should have a <code>font-size</code> of 5px.');
  - text: Your <code>.text-2</code> class should have a <code>font-size</code> of 10px.
    testString: assert($('.text-2').css('font-size') == '10px', 'Your <code>.text-2</code> class should have a <code>font-size</code> of 10px.');
  - text: Your <code>.text-3</code> class should have a <code>font-size</code> of 15px.
    testString: assert($('.text-3').css('font-size') == '15px', 'Your <code>.text-3</code> class should have a <code>font-size</code> of 15px.');
  - text: Your <code>.text-4</code> class should have a <code>font-size</code> of 20px.
    testString: assert($('.text-4').css('font-size') == '20px', 'Your <code>.text-4</code> class should have a <code>font-size</code> of 20px.');
  - text: Your <code>.text-5</code> class should have a <code>font-size</code> of 25px.
    testString: assert($('.text-5').css('font-size') == '25px', 'Your <code>.text-5</code> class should have a <code>font-size</code> of 25px.');
  - text: Your <code>.text-6</code> class should have a <code>font-size</code> of 30px.
    testString: assert($('.text-6').css('font-size') == '30px', 'Your <code>.text-6</code> class should have a <code>font-size</code> of 30px.');
  - text: Your <code>.text-7</code> class should have a <code>font-size</code> of 35px.
    testString: assert($('.text-7').css('font-size') == '35px', 'Your <code>.text-7</code> class should have a <code>font-size</code> of 35px.');
  - text: Your <code>.text-8</code> class should have a <code>font-size</code> of 40px.
    testString: assert($('.text-8').css('font-size') == '40px', 'Your <code>.text-8</code> class should have a <code>font-size</code> of 40px.');
  - text: Your <code>.text-9</code> class should have a <code>font-size</code> of 45px.
    testString: assert($('.text-9').css('font-size') == '45px', 'Your <code>.text-9</code> class should have a <code>font-size</code> of 45px.');
  - text: Your <code>.text-10</code> class should have a <code>font-size</code> of 50px.
    testString: assert($('.text-10').css('font-size') == '50px', 'Your <code>.text-10</code> class should have a <code>font-size</code> of 50px.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
<p class="text-6">Hello</p>
<p class="text-7">Hello</p>
<p class="text-8">Hello</p>
<p class="text-9">Hello</p>
<p class="text-10">Hello</p>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
