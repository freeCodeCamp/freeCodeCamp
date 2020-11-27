---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EbJf2'
forumTopicId: 16640
---

## Description

<section id='description'>

You can add images to your website by using the `img` element, and point to a specific image's URL using the `src` attribute.

An example of this would be:

`<img src="https://www.freecatphotoapp.com/your-image.jpg">`

Note that `img` elements are self-closing.

All `img` elements **must** have an `alt` attribute. The text inside an `alt` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.

**Note:** If the image is purely decorative, using an empty `alt` attribute is a best practice.

Ideally the `alt` attribute should not contain special characters unless needed.

Let's add an `alt` attribute to our `img` example above:

`<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="A business cat wearing a necktie.">`

</section>

## Instructions

<section id='instructions'>

Let's try to add an image to our website:

Within the existing `main` element, insert an `img` element before the existing `p` elements.

Now set the `src` attribute so that it points to this url:

`https://bit.ly/fcc-relaxing-cat`

Finally, don't forget to give your `img` element an `alt` attribute with applicable text.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Your page should have an image element.
    testString: assert($("img").length);
  - text: Your image should have a <code>src</code> attribute that points to the kitten image.
    testString: assert(/^https:\/\/bit\.ly\/fcc-relaxing-cat$/i.test($("img").attr("src")));
  - text: Your image element's <code>alt</code> attribute should not be empty.
    testString: assert($("img").attr("alt") && $("img").attr("alt").length && /<img\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(__helpers.removeWhiteSpace(code)));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</div>

</section>

## Solution

<section id='solution'>

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</section>
