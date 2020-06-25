---
id: 5dc24073f86c76b9248c6ebb
title: Part 10
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

HTML attributes are special words used inside the opening tag of an element to control the element's behavior. The `src` attribute in an `img` element specifies the image's URL.  An example of an `img` element using an `src` attribute: `<img src="https://www.your-image-source.com/your-image.jpg">`. 

Add an `src` attribute to the existing `img` element that is set to the following URL: `https://bit.ly/fcc-relaxing-cat`.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> element does not have a <code>src</code> attribute. You have either omitted the attribute or have a typo. Make sure there is a space between the element name and the attribute name.
    testString: assert( document.querySelector('img').src );
  - text: Your <code>img</code> element's <code>src</code> attribute should be set to 'https://bit.ly/fcc-relaxing-cat'. You have either omitted the URL or have a typo. The case of the URL is important.
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
