---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
---

## Description
<section id='description'>
It's likely that you've seen an <code>alt</code> attribute on an <code>img</code> tag in other challenges. <code>Alt</code> text describes the content of the image and provides a text-alternative for it. This helps in cases where the image fails to load or can't be seen by a user. It's also used by search engines to understand what an image contains to include it in search results. Here's an example:
<code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code>
People with visual impairments rely on screen readers to convert web content to an audio interface. They won't get information if it's only presented visually. For images, screen readers can access the <code>alt</code> attribute and read its contents to deliver key information.
Good <code>alt</code> text provides the reader a brief description of the image. You should always include an <code>alt</code> attribute on your image. Per HTML5 specification, this is now considered mandatory.
</section>

## Instructions
<section id='instructions'>

Camper Cat happens to be both a coding ninja and an actual ninja, who is building a website to share his knowledge. The profile picture he wants to use shows his skills and should be appreciated by all site visitors. Add an <code>alt</code> attribute in the <code>img</code> tag, that explains Camper Cat is doing karate. (The image <code>src</code> doesn't link to an actual file, so you should see the <code>alt</code> text in the display.)

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> tag should have an <code>alt</code> attribute and it should not be empty.
    testString: assert($('img').attr('alt'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">
```

</div>



</section>

## Solution
<section id='solution'>

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```

</section>
