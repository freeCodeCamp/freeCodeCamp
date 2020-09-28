---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
---

## Description
<section id='description'>
<code>article</code> is another one of the new HTML5 elements that adds semantic meaning to your markup. <code>article</code> is a sectioning element, and is used to wrap independent, self-contained content. The tag works well with blog entries, forum posts, or news articles.
Determining whether content can stand alone is usually a judgement call, but there are a couple simple tests you can use. Ask yourself if you removed all surrounding context, would that content still make sense? Similarly for text, would the content hold up if it were in an RSS feed?
Remember that folks using assistive technologies rely on organized, semantically meaningful markup to better understand your work.
<strong>Note about <code>section</code> and <code>div</code></strong><br>The <code>section</code> element is also new with HTML5, and has a slightly different semantic meaning than <code>article</code>. An <code>article</code> is for standalone content, and a <code>section</code> is for grouping thematically related content. They can be used within each other, as needed. For example, if a book is the <code>article</code>, then each chapter is a <code>section</code>. When there's no relationship between groups of content, then use a <code>div</code>.

```html
<div> - groups content
<section> - groups related content
<article> - groups independent, self-contained content
```

</section>

## Instructions
<section id='instructions'>
Camper Cat used <code>article</code> tags to wrap the posts on his blog page, but he forgot to use them around the top one. Change the <code>div</code> tag to use an <code>article</code> tag instead.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have three <code>article</code> tags.
    testString: assert($('article').length == 3);
  - text: Your code should not have any <code>div</code> tags.
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
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>

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

</section>
