---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

In the last challenge, you learned that including an `alt` attribute when using `img` tags is mandatory. However, sometimes images are grouped with a caption already describing them, or are used for decoration only. In these cases, `alt` text may seem redundant or unnecessary.

When an image is already explained with text content or does not add meaning to a page, the `img` still needs an `alt` attribute, but it can be set to an empty string. Here's an example:

```html
<img src="visualDecoration.jpeg" alt="">
```

Background images usually fall under the 'decorative' label as well. However, they are typically applied with CSS rules, and therefore not part of the markup screen readers process.

**Note:** For images with a caption, you may still want to include `alt` text since it helps search engines catalog the image's content.

# --instructions--

Camper Cat has coded a skeleton page for the blog part of his website. He's planning to add a visual break between his two articles with a decorative image of a samurai sword. Add an `alt` attribute to the `img` tag and set it to an empty string. (Note that the image `src` doesn't link to an actual file - don't worry that there are no swords showing in the display.)

# --hints--

Your `img` tag should have an `alt` attribute.

```js
assert.isTrue(document.querySelector('img')?.hasAttribute('alt'));
```

The `alt` attribute should be set to an empty string.

```js
assert.isEmpty(document.querySelector('img')?.getAttribute('alt'));
```

# --seed--

## --seed-contents--

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

# --solutions--

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
