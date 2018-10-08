---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js'
    raw: true
challengeType: 0
---

## Description
<section id='description'>
The <code>@if</code> directive in Sass is useful to test for a specific case - it works just like the <code>if</code> statement in JavaScript</code>.
<blockquote>@mixin make-bold($bool) {<br>&nbsp;&nbsp;@if $bool == true {<br>&nbsp;&nbsp;&nbsp;&nbsp;font-weight: bold;<br>&nbsp;&nbsp;}<br>}</blockquote>
And just like in JavaScript, <code>@else if</code> and <code>@else</code> test for more conditions:
<blockquote>@mixin text-effect($val) {<br>&nbsp;&nbsp;@if $val == danger {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: red;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;@else if $val == alert {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: yellow;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;@else if $val == success {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: green;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;@else {<br>&nbsp;&nbsp;&nbsp;&nbsp;color: black;<br>&nbsp;&nbsp;}<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Create a <code>mixin</code> called <code>border-stroke</code> that takes a parameter <code>$val</code>. The <code>mixin</code> should check for the following conditions using <code>@if</code>, <code>@else if</code>, and <code>@else</code>:
<blockquote>light - 1px solid black<br>medium - 3px solid black<br>heavy - 6px solid black<br>none - no border</blockquote>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should declare a <code>mixin</code> named <code>border-stroke</code> which has a parameter named <code>$val</code>.
    testString: 'assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi), "Your code should declare a <code>mixin</code> named <code>border-stroke</code> which has a parameter named <code>$val</code>.");'
  - text: 'Your <code>mixin</code> should have an <code>@if</code> statement to check if <code>$val</code> is light, and to set the <code>border</code> to 1px solid black.'
    testString: 'assert(code.match(/@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@if</code> statement to check if <code>$val</code> is light, and to set the <code>border</code> to 1px solid black.");'
  - text: 'Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is medium, and to set the <code>border</code> to 3px solid black.'
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is medium, and to set the <code>border</code> to 3px solid black.");'
  - text: 'Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is heavy, and to set the <code>border</code> to 6px solid black.'
    testString: 'assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else if</code> statement to check if <code>$val</code> is heavy, and to set the <code>border</code> to 6px solid black.");'
  - text: Your <code>mixin</code> should have an <code>@else</code> statement to set the <code>border</code> to none.
    testString: 'assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi), "Your <code>mixin</code> should have an <code>@else</code> statement to set the <code>border</code> to none.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
