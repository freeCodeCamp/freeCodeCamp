---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
localeTitle: 使用 article 元素包裹文章内容
---

## Description
<section id='description'>
<code>article</code>是另一个具有语义化特性的 HTML5 新标签。<code>article</code>是一个分段标签，用于呈现独立及完整的内容。这个标签适用于博客入口、论坛帖子或者新闻文章。
有些技巧可以用来判断内容是否独立，像是如果内容脱离了上下文，是否仍然有意义？类似地，对于 RSS 提要中的文本，它是否有意义？
请牢记，使用辅助设备的用户依赖组织良好的、语义化的标签来获取页面中的信息。
<strong>请注意<code>section</code>和<code>div</code>的区别：</strong><br><code>section</code>也是一个 HTML5 新标签，与<code>article</code>标签的语义含义略有不同。<code>article</code>用于独立的、完整的内容，而<code>section</code>用于对与主题相关的内容进行分组。它们可以根据需要嵌套着使用。举个例子：如果一本书是一个<code>article</code>的话，那么每个章节就是<code>section</code>。当内容组之间没有联系时，可以使用<code>div</code>。

```html
<div> - groups content
<section> - groups related content
<article> - groups independent, self-contained content
```

</section>

## Instructions
<section id='instructions'>
Camper Cat 打算使用<code>article</code>标签来呈现他的博客页面里的帖子，但是他忘记在顶部的帖子上使用它。请使用<code>article</code>标签来代替<code>div</code>标签。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的代码中应该有 3 个<code>article</code>标签。'
    testString: assert($('article').length == 3);
  - text: '你的代码不应包含<code>div</code>标签。'
    testString: assert($('div').length == 0);

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
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
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

```html
// solution required
```

</section>
              