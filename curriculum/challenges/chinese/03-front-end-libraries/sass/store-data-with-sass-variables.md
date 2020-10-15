---
id: 587d7dbd367417b2b2512bb4
challengeType: 0
forumTopicId: 301460
title: 用 Sass 变量存储数据
---

## Description
<section id='description'>
Sass 不同于 CSS 的一个特点是它允许使用变量。我们可以在 Sass 中声明变量，并为它赋值，就像我们在 JavaScript 中一样。
在 JavaScript 中，变量是使用<code>let</code>和<code>const</code>关键字定义的。在 Sass 中，变量以<code>$</code>开头的，后跟变量名。
这里有几个例子：

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;

//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

当需要把多个元素设置成相同颜色时，变量就会很有用。一旦我们需要更改颜色，只需要改变这个变量的值就好。
</section>

## Instructions
<section id='instructions'>
创建一个变量<code>$text-color</code>并将其设置为红色。然后更改<code>.blog-post</code>和<code>h2</code>的<code>color</code>属性的值为<code>$text-color</code>变量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该为<code>$text-color</code>声明一个值为红色的 Sass 变量。
    testString: assert(code.match(/\$text-color:\s*?red;/g));
  - text: 你应使用<code>$text-color</code>变量来更改<code>.blog-post</code>和<code>h2</code>的<code>颜色</code>。
    testString: assert(code.match(/color:\s*?\$text-color;/g));
  - text: <code>.blog-post</code>元素应为红色。
    testString: assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
  - text: <code>h2</code>元素应为红色。
    testString: assert($('h2').css('color') == 'rgb(255, 0, 0)');

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

```html
<style type='text/sass'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
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

</section>
