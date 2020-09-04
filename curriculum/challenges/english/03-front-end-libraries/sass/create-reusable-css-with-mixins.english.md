---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
forumTopicId: 301455
---

## Description
<section id='description'>
In Sass, a <dfn>mixin</dfn> is a group of CSS declarations that can be reused throughout the style sheet.
Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider "box-shadow":

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

It's a lot of typing to re-write this rule for all the elements that have a <code>box-shadow</code>, or to change each value to test different effects.
Mixins are like functions for CSS. Here is how to write one:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

The definition starts with <code>@mixin</code> followed by a custom name. The parameters (the <code>$x</code>, <code>$y</code>, <code>$blur</code>, and <code>$c</code> in the example above) are optional.
Now any time a <code>box-shadow</code> rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the <code>@include</code> directive:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

</section>

## Instructions
<section id='instructions'>
Write a mixin for <code>border-radius</code> and give it a <code>$radius</code> parameter. It should use all the vendor prefixes from the example. Then use the <code>border-radius</code> mixin to give the <code>#awesome</code> element a border radius of 15px.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should declare a mixin named <code>border-radius</code> which has a parameter named <code>$radius</code>.
    testString: assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
  - text: Your code should include the <code>-webkit-border-radius</code> vendor prefix that uses the <code>$radius</code> parameter.
    testString: assert(code.match(/-webkit-border-radius:\s*?\$radius;/gi));
  - text: Your code should include the <code>-moz-border-radius</code> vendor prefix that uses the <code>$radius</code> parameter.
    testString: assert(code.match(/-moz-border-radius:\s*?\$radius;/gi));
  - text: Your code should include the <code>-ms-border-radius</code> vendor prefix that uses the <code>$radius</code> parameter.
    testString: assert(code.match(/-ms-border-radius:\s*?\$radius;/gi));
  - text: Your code should include the general <code>border-radius</code> rule that uses the <code>$radius</code> parameter.
    testString: assert(code.match(/border-radius:\s*?\$radius;/gi).length == 4);
  - text: Your code should call the <code>border-radius mixin</code> using the <code>@include</code> keyword, setting it to 15px.
    testString: assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\);/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/scss'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```html
<style type='text/scss'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```

</section>
