---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
isHidden: false
forumTopicId: 301454
---

## Description
<section id='description'>
The <code>@while</code> directive is an option with similar functionality to the JavaScript <code>while</code> loop. It creates CSS rules until a condition is met.
The <code>@for</code> challenge gave an example to create a simple grid system. This can also work with <code>@while</code>.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

First, define a variable <code>$x</code> and set it to 1. Next, use the <code>@while</code> directive to create the grid system <i>while</i> <code>$x</code> is less than 13.
After setting the CSS rule for <code>width</code>, <code>$x</code> is incremented by 1 to avoid an infinite loop.
</section>

## Instructions
<section id='instructions'>
Use <code>@while</code> to create a series of classes with different <code>font-sizes</code>.
There should be 5 different classes from <code>text-1</code> to <code>text-5</code>. Then set <code>font-size</code> to <code>15px</code> multiplied by the current index number. Make sure to avoid an infinite loop!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>@while</code> directive.
    testString: assert(code.match(/@while /g));
  - text: Your code should use an index variable which starts at an index of 1.
    testString: assert(code.match(/\$.*:\s*?1;/gi));
  - text: Your code should increment the counter variable.
    testString: assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
  - text: Your <code>.text-1</code> class should have a <code>font-size</code> of 15px.
    testString: assert($('.text-1').css('font-size') == '15px');
  - text: Your <code>.text-2</code> class should have a <code>font-size</code> of 30px.
    testString: assert($('.text-2').css('font-size') == '30px');
  - text: Your <code>.text-3</code> class should have a <code>font-size</code> of 45px.
    testString: assert($('.text-3').css('font-size') == '45px');
  - text: Your <code>.text-4</code> class should have a <code>font-size</code> of 60px.
    testString: assert($('.text-4').css('font-size') == '60px');
  - text: Your <code>.text-5</code> class should have a <code>font-size</code> of 75px.
    testString: assert($('.text-5').css('font-size') == '75px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

</div>

</section>

## Solution
<section id='solution'>

```html
<style type='text/scss'>
  $x: 1;
  @while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

</section>
