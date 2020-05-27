---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EbJf2'
forumTopicId: 16640
---

## Description
<section id='description'>
You can add images to your website by using the <code>img</code> element, and point to a specific image's URL using the <code>src</code> attribute.
An example of this would be:
<code>&#60img src="https://www.your-image-source.com/your-image.jpg"&#62</code>
Note that <code>img</code> elements are self-closing.
All <code>img</code> elements <strong>must</strong> have an <code>alt</code> attribute. The text inside an <code>alt</code> attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.
<strong>Note:</strong> If the image is purely decorative, using an empty <code>alt</code> attribute is a best practice.
Ideally the <code>alt</code> attribute should not contain special characters unless needed.
Let's add an <code>alt</code> attribute to our <code>img</code> example above:
<code>&#60img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up."&#62</code>
</section>

## Instructions
<section id='instructions'>
Let's try to add an image to our website:
Within the existing <code>main</code> element, insert an <code>img</code> element before the existing <code>p</code> elements.
Now set the <code>src</code> attribute so that it points to this url:
<code>https://bit.ly/fcc-relaxing-cat</code>
Finally, don't forget to give your <code>img</code> element an <code>alt</code>  attribute with applicable text.
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
    testString: assert($("img").attr("alt") && $("img").attr("alt").length && /<img\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(code.replace(/\s/g,'')));

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
