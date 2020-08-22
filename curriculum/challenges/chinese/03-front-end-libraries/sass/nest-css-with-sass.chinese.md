---
id: 587d7dbd367417b2b2512bb5
title: Nest CSS with Sass
challengeType: 0
videoUrl: ''
localeTitle: 使用Sass嵌套CSS
---

## Description
<section id="description"> Sass允许<code>nesting</code> CSS规则，这是组织样式表的有用方法。通常，每个元素都定位在不同的行上以对其进行样式设置，如下所示： <blockquote> nav { <br>背景颜色：红色; <br> } <br><br> nav ul { <br> list-style：none; <br> } <br><br> nav ul li { <br> display：inline-block; <br> } </blockquote>对于大型项目，CSS文件将包含许多行和规则。这是<code>nesting</code>可以通过在相应的父元素中放置子样式规则来帮助组织代码的地方： <blockquote> nav { <br>背景颜色：红色; <br><br> ul { <br> list-style：none; <br><br> li { <br> display：inline-block; <br> } <br> } <br> } <br></blockquote></section>

## Instructions
<section id="instructions">使用上面显示的<code>nesting</code>技术为<code>.blog-post</code>元素的两个子元素重新组织CSS规则。出于测试目的， <code>h1</code>应该位于<code>p</code>元素之前。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该重新组织CSS规则，以便<code>h1</code>和<code>p</code>嵌套在<code>.blog-post</code>父元素中。
    testString: assert(code.match(/\.blog-post\s*?{\s*?h1\s*?{\s*?text-align:\s*?center;\s*?color:\s*?blue;\s*?}\s*?p\s*?{\s*?font-size:\s*?20px;\s*?}\s*?}/gi));

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

/section>
