---
id: 587d7dbe367417b2b2512bb9
title: Use @for to Create a Sass Loop
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js'
    raw: true
challengeType: 0
---

## Description
<section id='description'>
The <code>@for</code> directive adds styles in a loop, very similar to a <code>for</code> loop in JavaScript.
<code>@for</code> is used in two ways: "start through end" or "start to end". The main difference is that the "start <b>to</b> end" <em>excludes</em> the end number as part of the count, and "start <b>through</b> end" <em>includes</em> the end number as part of the count.
Here's a start <b>through</b> end example:
<blockquote>@for $i from 1 through 12 {<br>&nbsp;&nbsp;.col-#{$i} { width: 100%/12 * $i; }<br>}</blockquote>
The <code>#{$i}</code> part is the syntax to combine a variable (<code>i</code>) with text to make a string. When the Sass file is converted to CSS, it looks like this:
<blockquote>.col-1 {<br>&nbsp;&nbsp;width: 8.33333%;<br>}<br><br>.col-2 {<br>&nbsp;&nbsp;width: 16.66667%;<br>}<br><br>...<br><br>.col-12 {<br>&nbsp;&nbsp;width: 100%;<br>}</blockquote>
This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.
</section>

## Instructions
<section id='instructions'>
Write a <code>@for</code> directive that takes a variable <code>$j</code> that goes from 1 <b>to</b> 6.
It should create 5 classes called <code>.text-1</code> to <code>.text-5</code> where each has a <code>font-size</code> set to 10px multiplied by the index.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>@for</code> directive.
    testString: assert(code.match(/@for /g), 'Your code should use the <code>@for</code> directive.');
  - text: Your <code>.text-1</code> class should have a <code>font-size</code> of 10px.
    testString: assert($('.text-1').css('font-size') == '10px', 'Your <code>.text-1</code> class should have a <code>font-size</code> of 10px.');
  - text: Your <code>.text-2</code> class should have a <code>font-size</code> of 20px.
    testString: assert($('.text-2').css('font-size') == '20px', 'Your <code>.text-2</code> class should have a <code>font-size</code> of 20px.');
  - text: Your <code>.text-3</code> class should have a <code>font-size</code> of 30px.
    testString: assert($('.text-3').css('font-size') == '30px', 'Your <code>.text-3</code> class should have a <code>font-size</code> of 30px.');
  - text: Your <code>.text-4</code> class should have a <code>font-size</code> of 40px.
    testString: assert($('.text-4').css('font-size') == '40px', 'Your <code>.text-4</code> class should have a <code>font-size</code> of 40px.');
  - text: Your <code>.text-5</code> class should have a <code>font-size</code> of 50px.
    testString: assert($('.text-5').css('font-size') == '50px', 'Your <code>.text-5</code> class should have a <code>font-size</code> of 50px.');

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
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style type='text/sass'>

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 10px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

```html
<style type='text/sass'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 10px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
</section>
