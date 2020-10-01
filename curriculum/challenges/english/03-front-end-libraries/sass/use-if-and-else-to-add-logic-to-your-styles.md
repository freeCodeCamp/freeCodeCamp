---
id: 587d7dbe367417b2b2512bb8
title: Use @if and @else to Add Logic To Your Styles
challengeType: 0
forumTopicId: 301463
---

## Description
<section id='description'>
The <code>@if</code> directive in Sass is useful to test for a specific case - it works just like the <code>if</code> statement in JavaScript</code>.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

And just like in JavaScript, <code>@else if</code> and <code>@else</code> test for more conditions:

```scss
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

</section>

## Instructions
<section id='instructions'>
Create a mixin called <code>border-stroke</code> that takes a parameter <code>$val</code>. The mixin should check for the following conditions using <code>@if</code>, <code>@else if</code>, and <code>@else</code>:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

If <code>$val</code> is not <code>light</code>, <code>medium</code>, or <code>heavy</code>, the border should be set to <code>none</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should declare a mixin named <code>border-stroke</code> which has a parameter named <code>$val</code>.
    testString: assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
  - text: Your mixin should have an <code>@if</code> statement to check if <code>$val</code> is light, and to set the <code>border</code> to 1px solid black.
    testString: assert(code.match(/@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: Your mixin should have an <code>@else if</code> statement to check if <code>$val</code> is medium, and to set the <code>border</code> to 3px solid black.
    testString: assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: Your mixin should have an <code>@else if</code> statement to check if <code>$val</code> is heavy, and to set the <code>border</code> to 6px solid black.
    testString: assert(code.match(/@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi));
  - text: Your mixin should have an <code>@else</code> statement to set the <code>border</code> to none.
    testString: assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/scss'>



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

```html
<style type='text/scss'>
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

</section>
