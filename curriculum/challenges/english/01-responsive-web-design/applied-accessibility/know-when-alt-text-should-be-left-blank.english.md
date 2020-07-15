---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
---

## Description
<section id='description'>
In the last challenge, you learned that including an <code>alt</code> attribute when using <code>img</code> tags is mandatory. However, sometimes images are grouped with a caption already describing them, or are used for decoration only. In these cases <code>alt</code> text may seem redundant or unnecessary.
In situations when an image is already explained with text content, or does not add meaning to a page, the <code>img</code> still needs an <code>alt</code> attribute, but it can be set to an empty string. Here's an example:
<code>&lt;img src=&quot;visualDecoration.jpeg&quot; alt=&quot;&quot;&gt;</code>
Background images usually fall under the 'decorative' label as well. However, they are typically applied with CSS rules, and therefore not part of the markup screen readers process.
<strong>Note:</strong> For images with a caption, you may still want to include <code>alt</code> text, since it helps search engines catalog the content of the image.
</section>

## Instructions
<section id='instructions'>
Camper Cat has coded a skeleton page for the blog part of his website. He's planning to add a visual break between his two articles with a decorative image of a samurai sword. Add an <code>alt</code> attribute to the <code>img</code> tag and set it to an empty string. (Note that the image <code>src</code> doesn't link to an actual file - don't worry that there are no swords showing in the display.)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> tag should have an <code>alt</code> attribute.
    testString: assert(!($('img').attr('alt') == undefined));
  - text: The <code>alt</code> attribute should be set to an empty string.
    testString: assert($('img').attr('alt') == '');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

</section>
