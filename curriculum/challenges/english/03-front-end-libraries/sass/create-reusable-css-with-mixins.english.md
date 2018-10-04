---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js'
    raw: true
challengeType: 0
---

## Description
<section id='description'>
In Sass, a <code>mixin</code> is a group of CSS declarations that can be reused throughout the style sheet.
Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider "box-shadow":
<blockquote>div {<br>&nbsp;&nbsp;-webkit-box-shadow: 0px 0px 4px #fff;<br>&nbsp;&nbsp;-moz-box-shadow: 0px 0px 4px #fff;<br>&nbsp;&nbsp;-ms-box-shadow: 0px 0px 4px #fff;<br>&nbsp;&nbsp;box-shadow: 0px 0px 4px #fff;<br>}</blockquote>
It's a lot of typing to re-write this rule for all the elements that have a <code>box-shadow</code>, or to change each value to test different effects.
<code>Mixins</code> are like functions for CSS. Here is how to write one:
<blockquote>@mixin box-shadow($x, $y, $blur, $c){ <br>&nbsp;&nbsp;-webkit-box-shadow: $x, $y, $blur, $c;<br>&nbsp;&nbsp;-moz-box-shadow: $x, $y, $blur, $c;<br>&nbsp;&nbsp;-ms-box-shadow: $x, $y, $blur, $c;<br>&nbsp;&nbsp;box-shadow: $x, $y, $blur, $c;<br>}</blockquote>
The definition starts with <code>@mixin</code> followed by a custom name. The parameters (the <code>$x</code>, <code>$y</code>, <code>$blur</code>, and <code>$c</code> in the example above) are optional.
Now any time a <code>box-shadow</code> rule is needed, only a single line calling the <code>mixin</code> replaces having to type all the vendor prefixes. A <code>mixin</code> is called with the <code>@include</code> directive:
<blockquote>div {<br>&nbsp;&nbsp;@include box-shadow(0px, 0px, 4px, #fff);<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Write a <code>mixin</code> for <code>border-radius</code> and give it a <code>$radius</code> parameter. It should use all the vendor prefixes from the example. Then use the <code>border-radius</code> <code>mixin</code> to give the <code>#awesome</code> element a border radius of 15px.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should declare a <code>mixin</code> named <code>border-radius</code> which has a parameter named <code>$radius</code>.
    testString: 'assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi), ''Your code should declare a <code>mixin</code> named <code>border-radius</code> which has a parameter named <code>$radius</code>.'');'
  - text: Your code should include the <code>-webkit-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.
    testString: 'assert(code.match(/-webkit-border-radius:\s*?\$radius;/gi), ''Your code should include the <code>-webkit-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.'');'
  - text: Your code should include the <code>-moz-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.
    testString: 'assert(code.match(/-moz-border-radius:\s*?\$radius;/gi), ''Your code should include the <code>-moz-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.'');'
  - text: Your code should include the <code>-ms-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.
    testString: 'assert(code.match(/-ms-border-radius:\s*?\$radius;/gi), ''Your code should include the <code>-ms-border-radius</code> vender prefix that uses the <code>$radius</code> parameter.'');'
  - text: Your code should include the general <code>border-radius</code> rule that uses the <code>$radius</code> parameter.
    testString: 'assert(code.match(/border-radius:\s*?\$radius;/gi).length == 4, ''Your code should include the general <code>border-radius</code> rule that uses the <code>$radius</code> parameter.'');'
  - text: 'Your code should call the <code>border-radius mixin</code> using the <code>@include</code> keyword, setting it to 15px.'
    testString: 'assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\);/gi), ''Your code should call the <code>border-radius mixin</code> using the <code>@include</code> keyword, setting it to 15px.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>
  
  
  
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

```js
// solution required
```
</section>
