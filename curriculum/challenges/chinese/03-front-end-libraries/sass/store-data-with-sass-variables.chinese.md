---
id: 587d7dbd367417b2b2512bb4
title: Store Data with Sass Variables
challengeType: 0
videoUrl: ''
localeTitle: 使用Sass变量存储数据
---

## Description
<section id="description"> Sass的一个与CSS不同的特性是它使用变量。它们被声明并设置为存储数据，类似于JavaScript。在JavaScript中，使用<code>let</code>和<code>const</code>关键字定义变量。在Sass中，变量以<code>$</code>开头，后跟变量名。以下是几个例子： <blockquote> $ main-fonts：Arial，sans-serif; <br> $ headings-color：green; <br><br> //使用变量： <br> h1 { <br> font-family：$ main-fonts; <br>颜色：$ headings-color; <br> } </blockquote>变量有用的一个例子是当许多元素需要是相同的颜色时。如果更改了该颜色，则编辑代码的唯一位置是变量值。 </section>

## Instructions
<section id="instructions">创建一个变量<code>$text-color</code>并将其设置为红色。然后将<code>.blog-post</code>和<code>h2</code>的<code>color</code>属性值更改为<code>$text-color</code>变量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该具有为<code>$text-color</code>声明的Sass变量，其值为red。
    testString: assert(code.match(/\$text-color:\s*?red;/g));
  - text: 您的代码应使用<code>$text-color</code>变量来更改<code>.blog-post</code>和<code>h2</code>项的<code>color</code> 。
    testString: assert(code.match(/color:\s*?\$text-color;/g));
  - text: 您的<code>.blog-post</code>元素应该是红色。
    testString: assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
  - text: 你的<code>h2</code>元素应该是红色。
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

```js
// solution required
```

/section>
