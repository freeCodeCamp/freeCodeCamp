---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: ''
localeTitle: Обтекание содержимого в статье Элемент
---

## Description
undefined

## Instructions
<section id="instructions"> Camper Cat использовал теги <code>article</code> для обертывания сообщений на своей странице блога, но он забыл использовать их в верхней части. Измените тег <code>div</code> чтобы вместо этого использовать тег <code>article</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен содержать три тега <code>article</code> .
    testString: 'assert($("article").length == 3, "Your code should have three <code>article</code> tags.");'
  - text: У вашего кода не должно быть никаких тегов <code>div</code> .
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
