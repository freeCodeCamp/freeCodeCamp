---
id: 5efae16e3cbd2bbdab94e334
title: الخطوة 31
challengeType: 0
dashedName: step-31
---

# --description--

بعد آخر عنصر `img` ، أضف عنصر `figcaption` مع النص `Cats hate other cats.`

# --hints--

يجب أن يحتوي العنصر `figcaption` على opening tag. Opening tags تكتب هكذا: `<elementName>`.

```js
assert(document.querySelectorAll('figcaption').length === 2);
```

يجب أن يحتوي العنصر `figcaption` على closing tag. Closing tags لها `/` مباشرة بعد رمز `<`.

```js
assert(code.match(/<\/figcaption\>/g).length === 2);
```

يجب أن يكون هناك عنصر `figure` أعلى closing tag عنصر `section` الثاني.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

عنصر `img` الاخير يجب أن يدمج في عنصر `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

يجب أن يحتوي العنصر `figure` على opening tag. Opening tags تكتب هكذا: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length === 2);
```

يجب أن يحتوي العنصر `figure` على closing tag. Closing tags لها `/` مباشرة بعد رمز `<`.

```js
assert(code.match(/<\/figure\>/g).length === 2);
```

عنصر `figcaption` يجب أن يدمج في عنصر `figure`.

```js
assert(document.querySelectorAll('figure > figcaption').length === 2);
```

يجب أن يكون عنصر `figcaption` المدمج في عنصر `figure` تحت عنصر `img`. لديك عنصر `img` وعنصر `figcaption` في ترتيب خاطئ.

```js
assert(
  document.querySelectorAll('figcaption')[1].previousElementSibling.nodeName ===
    'IMG'
);
```

يجب أن يحتوي عنصر `figcaption` على النص `Cats hate other cats.` لقد حذفت كلمة أو لديك خطأ إملائي.

```js
assert(
  document
    .querySelectorAll('figcaption')[1]
    .innerText.toLowerCase()
    .match(/Cats hate other cats\.?$/i)
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
--fcc-editable-region--
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">

        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

