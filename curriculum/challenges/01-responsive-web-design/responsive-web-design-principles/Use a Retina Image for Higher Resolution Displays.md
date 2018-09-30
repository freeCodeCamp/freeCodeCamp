---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
---

## Description
<section id='description'>
The simplest way to make your images appear "retina" (and optimize them for retina displays) is to define their <code>width</code> and <code>height</code> values as only half of what the original file is.
Here is an example of an image that is only using half of the original height and width:
<blockquote>&lt;style&gt;<br>&nbsp;&nbsp;img { height: 250px; width: 250px; }<br>&lt;/style&gt;<br>&lt;img src=&quot;coolPic500x500&quot; alt=&quot;A most excellent picture&quot;&gt;</blockquote>
</section>

## Instructions
<section id='instructions'>
Set the <code>width</code> and <code>height</code> of the <code>img</code> tag to half of their original values. In this case, both the original <code>height</code> and the original <code>width</code> are 200px.
</section>

## Tests
<section id='tests'>

```yml
- text: Your <code>img</code> tag should have a <code>width</code> of 100 pixels.
  testString: 'assert($("img").css("width") == "100px", "Your <code>img</code> tag should have a <code>width</code> of 100 pixels.");'
- text: Your <code>img</code> tag should have a <code>height</code> of 100 pixels.
  testString: 'assert($("img").css("height") == "100px", "Your <code>img</code> tag should have a <code>height</code> of 100 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
