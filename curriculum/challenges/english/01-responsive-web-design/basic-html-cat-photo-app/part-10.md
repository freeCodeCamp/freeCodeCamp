---
id: 5dc24073f86c76b9248c6ebb
title: Part 10
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

HTML attributes are special words used inside the opening tag of an element to control the element's behavior. The `src` attribute in an `img` element specifies the image's URL. 

Here is an example of an `img` element with a `src` attribute: `<img src="https://www.your-image-source.com/your-image.jpg">`. 

Add a `src` attribute to the `img` element that is set to this URL: `https://bit.ly/fcc-relaxing-cat`

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( document.querySelector('img').src === 'https://bit.ly/fcc-relaxing-cat' );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>CatPhotoApp</h2>
    <main>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
      <img>
    </main>
  </body>
</html>
```

</div>
</section>

## Solution
<section id='solution'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>CatPhotoApp</h2>
    <main>
      <h3>Cat Photos</h3>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
      <img src="https://bit.ly/fcc-relaxing-cat">
    </main>
  </body>
</html>
```

</section>
