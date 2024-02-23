---
id: 5dfb5ecbeacea3f48c6300b1
title: الخطوة 21
challengeType: 0
dashedName: step-21
---

# --description--

استخدم عناصر القائمة (`li`) لإنشاء عناصر في قائمة. فيما يلي مثال لعناصر القائمة (list items) في قائمة غير منظمة (unordered list):

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

داخل عنصر `ul` قم بدمج ثلاثة عناصر لعرض ثلاثة أشياء تحبها القطط:

`cat nip` `laser pointers` `lasagna`

# --hints--

يجب أن يكون لديك ثلاثة عناصر `li`. يجب أن يكون لكل عنصر `li` علامة فتح وإغلاق (opening & closing tag) خاصة به.

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

يجب أن يكون لديك ثلاثة عناصر `li` مع النص `cat nip` و `laser pointers` و `lasagna` بأي ترتيب. إما أنك حذفت بعض النصوص أو لديك خطأ إملائي.

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

عناصر `li` الثلاثة يجب أن تكون بين علامات فتح وإغلاق العنصر `ul`.

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
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
--fcc-editable-region--
        <ul>

        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

