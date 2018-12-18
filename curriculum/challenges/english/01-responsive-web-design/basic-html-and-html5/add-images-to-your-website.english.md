---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
guideUrl: 'https://www.freecodecamp.org/guide/certificates/add-images-to-your-website'
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EbJf2'
---

## Description
<section id='description'>
You can add images to your website by using the <code>img</code> element, and point to a specific image's URL using the <code>src</code> attribute.
An example of this would be:
<code>&#60img src="https://www.your-image-source.com/your-image.jpg"&#62</code>
Note that <code>img</code> elements are self-closing.
All <code>img</code> elements <strong>must</strong> have an <code>alt</code> attribute. The text inside an <code>alt</code> attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.
Note: If the image is purely decorative, using an empty <code>alt</code> attribute is a best practice.
Ideally the <code>alt</code> attribute should not contain special characters unless needed.
Let's add an <code>alt</code> attribute to our <code>img</code> example above:
<code>&#60img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up."&#62</code>
</section>

## Instructions
<section id='instructions'>
Let's try to add an image to our website:
Insert an <code>img</code> tag, after the <code>main</code> element.
Now set the <code>src</code> attribute so that it points to this url:
<code>https://bit.ly/fcc-relaxing-cat</code>
Finally don't forget to give your image an <code>alt</code> text.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your page should have an image element.
    testString: assert($("img").length > 0, 'Your page should have an image element.');
  - text: Your image should have a <code>src</code> attribute that points to the kitten image.
    testString: assert(new RegExp("\/\/bit.ly\/fcc-relaxing-cat|\/\/s3.amazonaws.com\/freecodecamp\/relaxing-cat.jpg", "gi").test($("img").attr("src")), 'Your image should have a <code>src</code> attribute that points to the kitten image.');
  - text: Your image element <strong>must</strong> have an <code>alt</code> attribute.
    testString: assert(code.match(/alt\s*?=\s*?(\"|\').*(\"|\')/), 'Your image element <strong>must</strong> have an <code>alt</code> attribute.');

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

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <img src="https://bit.ly/fcc-relaxing-cat" alt="cat_img"></img>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

</div>
```
</section>
