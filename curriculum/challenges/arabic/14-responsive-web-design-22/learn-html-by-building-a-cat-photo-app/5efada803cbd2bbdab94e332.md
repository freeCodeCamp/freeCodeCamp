---
id: 5efada803cbd2bbdab94e332
title: الخطوة 29
challengeType: 0
dashedName: step-29
---

# --description--

داخل عنصر `figure` الذي أضفته للتو، ادمج عنصر `img` مع سمة `src` بقيمة `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

# --hints--

يجب أن يحتوي العنصر `figure` الثاني على opening tag. Opening tags تكتب هكذا: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length >= 2);
```

يجب أن يحتوي العنصر `figure` الثاني على closing tag. Closing tags لها `/` مباشرة بعد رمز `<`.

```js
assert(code.match(/<\/figure>/g).length >= 2);
```

يجب أن يكون هناك عنصر `figure` ثاني أعلى closing tag عنصر `section` الثاني. لقد وضعتهم بترتيب خاطئ.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

يجب أن يكون لديك عنصر `img` ثالث مدمج في عنصر `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
);
```

يجب أن يكون للصورة الثالثة سمة `src` بقيمة `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

على الرغم من أنك قمت بتعيين سمة `src` لعنصر img إلى عنوان الـ URL الصحيح، يوصى بأن تحيط دائما قيمة السمة بعلامات اقتباس.

```js
assert(!/\<img\s+.+\s+src\s*=\s*https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/cats\.jpg/.test(code));
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

        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

