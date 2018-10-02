---
id: 587d7dbd367417b2b2512bb4
title: Store Data with Sass Variables
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.10.9/sass.sync.min.js'
    raw: true
challengeType: 0
---

## Description
<section id='description'>
One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.
In JavaScript, variables are defined using the <code>let</code> and <code>const</code> keywords. In Sass, variables start with a <code>$</code> followed by the variable name.
Here are a couple examples:
<blockquote>$main-fonts: Arial, sans-serif;<br>$headings-color: green;<br><br>//To use variables:<br>h1 {<br>&nbsp;&nbsp;font-family: $main-fonts;<br>&nbsp;&nbsp;color: $headings-color;<br>}</blockquote>
One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.
</section>

## Instructions
<section id='instructions'>
Create a variable <code>$text-color</code> and set it to red. Then change the value of the <code>color</code> property for the <code>.blog-post</code> and <code>h2</code> to the <code>$text-color</code> variable.
</section>

## Tests
<section id='tests'>

```yml
- text: Your code should have a Sass variable declared for <code>$text-color</code> with a value of red.
  testString: 'assert(code.match(/\$text-color:\s*?red;/g), ''Your code should have a Sass variable declared for <code>$text-color</code> with a value of red.'');'
- text: Your code should use the <code>$text-color</code> variable to change the <code>color</code> for the <code>.blog-post</code> and <code>h2</code> items.
  testString: 'assert(code.match(/color:\s*?\$text-color;/g), ''Your code should use the <code>$text-color</code> variable to change the <code>color</code> for the <code>.blog-post</code> and <code>h2</code> items.'');'
- text: Your <code>.blog-post</code> element should have a </code>color</code> of red.
  testString: 'assert($(''.blog-post'').css(''color'') == ''rgb(255, 0, 0)'', ''Your <code>.blog-post</code> element should have a </code>color</code> of red.'');'
- text: Your <code>h2</code> elements should have a </code>color</code> of red.
  testString: 'assert($(''h2'').css(''color'') == ''rgb(255, 0, 0)'', ''Your <code>h2</code> elements should have a </code>color</code> of red.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>
  
  
  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
