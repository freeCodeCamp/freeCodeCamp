---
id: 5efae0543cbd2bbdab94e333
title: الخطوة 30
challengeType: 0
dashedName: step-30
---

# --description--

لتسهيل المنال (accessibility) في الصورة التي أضفتها، أضف خاصية `alt` مع النص:

`Five cats looking around a field.`

# --hints--

يجب أن يحتوي العنصر `figure` على opening tag. Opening tags تكتب هكذا: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length === 2);
```

يجب أن يحتوي العنصر `figure` على closing tag. Closing tags يجب ان تتبع بـ `/` مباشرة بعد رمز `<`.

```js
assert(code.match(/<\/figure>/g).length === 2);
```

يجب أن يكون هناك عنصر `figure` أعلى closing tag عنصر `section` الاخير.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

عنصر `img` للـ Cats يجب أن يدمج في عنصر `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

يجب أن يكون لعنصر `img` للـ Cats سمة `alt` مع القيمة `Five cats looking around a field.`

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
    .getAttribute('alt')
    .replace(/\s+/g, ' ')
    .match(/^Five cats looking around a field\.?$/i)
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        <figure>
--fcc-editable-region--
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg">
--fcc-editable-region--
        </figure>
      </section>
    </main>
  </body>
</html>
```

