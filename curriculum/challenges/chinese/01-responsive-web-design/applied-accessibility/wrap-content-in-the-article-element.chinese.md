---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: ''
localeTitle: 在文章元素中包装内容
---

## Description
<section id="description"> <code>article</code>是另一个新的HTML5元素，它为您的标记添加了语义含义。 <code>Article</code>是一个sectioning元素，用于包装独立的，自包含的内容。该标记适用于博客条目，论坛帖子或新闻文章。确定内容是否可以独立通常是一种判断调用，但您可以使用几种简单的测试。问问自己是否删除了所有周围环境，该内容是否仍然有意义？类似地，对于文本，如果它在RSS提要中，内容是否会保留？请记住，使用辅助技术的人们依赖于有组织的，语义上有意义的标记来更好地理解您的工作。 <strong>关于<code>section</code>和<code>div</code>注意事项</strong> <br> <code>section</code>元素也是HTML5的新元素，与<code>article</code>语义含义略有不同。 <code>article</code>适用于独立内容，一个<code>section</code>用于分组与主题相关的内容。根据需要，它们可以在彼此之间使用。例如，如果一本书是<code>article</code> ，那么每章都是一个<code>section</code> 。当内容组之间没有关系时，请使用<code>div</code> 。 <blockquote> &lt;div&gt;  - 分组内容<br> &lt;section&gt;  - 分组相关内容<br> &lt;article&gt;  - 分组独立，自包含的内容<br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat使用<code>article</code>标签将帖子包装在他的博客页面上，但他忘了在最顶层的帖子中使用它们。更改<code>div</code>标签以改为使用<code>article</code>标签。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有三个<code>article</code>标签。
    testString: 'assert($("article").length == 3, "Your code should have three <code>article</code> tags.");'
  - text: 您的代码不应包含任何<code>div</code>标记。
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
