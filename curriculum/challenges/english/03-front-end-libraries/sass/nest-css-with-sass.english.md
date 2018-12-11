---
id: 587d7dbd367417b2b2512bb5
title: Nest CSS with Sass
challengeType: 0
---

## Description
<section id='description'>
Sass allows <code>nesting</code> of CSS rules, which is a useful way of organizing a style sheet.
Normally, each element is targeted on a different line to style it, like so:
<blockquote>nav {<br>&nbsp;&nbsp;background-color: red;<br>}<br><br>nav ul {<br>&nbsp;&nbsp;list-style: none;<br>}<br><br>nav ul li {<br>&nbsp;&nbsp;display: inline-block;<br>}</blockquote>
For a large project, the CSS file will have many lines and rules. This is where <code>nesting</code> can help organize your code by placing child style rules within the respective parent elements:
<blockquote>nav {<br>&nbsp;&nbsp;background-color: red;<br><br>&nbsp;&nbsp;ul {<br>&nbsp;&nbsp;&nbsp;&nbsp;list-style: none;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;li {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: inline-block;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}<br></blockquote>
</section>

## Instructions
<section id='instructions'>
Use the <code>nesting</code> technique shown above to re-organize the CSS rules for both children of <code>.blog-post</code> element. For testing purposes, the <code>h1</code> should come before the <code>p</code> element.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should re-organize the CSS rules so the <code>h1</code> and <code>p</code> are nested in the <code>.blog-post</code> parent element.
    testString: assert(code.match(/\.blog-post\s*?{\s*?h1\s*?{\s*?text-align:\s*?center;\s*?color:\s*?blue;\s*?}\s*?p\s*?{\s*?font-size:\s*?20px;\s*?}\s*?}/gi), 'Your code should re-organize the CSS rules so the <code>h1</code> and <code>p</code> are nested in the <code>.blog-post</code> parent element.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>
  .blog-post {

  }
  h1 {
    text-align: center;
    color: blue;
  }
  p {
    font-size: 20px;
  }
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
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
