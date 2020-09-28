---
id: 587d7dbd367417b2b2512bb4
title: Store Data with Sass Variables
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions"> إنشاء متغير <code>$text-color</code> وتعيينه إلى اللون الأحمر. ثم قم بتغيير قيمة خاصية <code>color</code> أجل <code>.blog-post</code> و <code>h2</code> إلى متغير <code>$text-color</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/\$text-color:\s*?red;/g), "Your code should have a Sass variable declared for <code>$text-color</code> with a value of red.");'
  - text: ''
    testString: 'assert(code.match(/color:\s*?\$text-color;/g), "Your code should use the <code>$text-color</code> variable to change the <code>color</code> for the <code>.blog-post</code> and <code>h2</code> items.");'
  - text: ''
    testString: 'assert($(".blog-post").css("color") == "rgb(255, 0, 0)", "Your <code>.blog-post</code> element should have a </code>color</code> of red.");'
  - text: ''
    testString: 'assert($("h2").css("color") == "rgb(255, 0, 0)", "Your <code>h2</code> elements should have a </code>color</code> of red.");'

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
