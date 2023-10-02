---
id: 5dfa371beacea3f48c6300af
title: الخطوة 19
challengeType: 0
dashedName: step-19
---

# --description--

عند إضافة عنصر heading ذي رتبة منخفضة إلى الصفحة، فهذا يعني أنك تبدأ قسمًا فرعيًا جديدًا.

بعد آخر عنصر `h2` من عنصر `section` الثاني، أضف عنصر `h3` مع هذا النص:

`Things cats love:`

# --hints--

يبدو أن العنصر الثاني من `section` مفقود أو لا يحتوي على كل من علامة الفتح والإغلاق (opening & closing tag).

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

يجب أن يكون هناك عنصر `h3` أعلى closing tag عنصر `section` الثاني.

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

يجب أن يحتوي عنصر `h3` فوق closing tag عنصر `section` الثاني على النص `Things cats love:`. تأكد من تضمين النقطتين (:) في نهاية النص.

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

يجب أن يكون هناك عنصر `h2` مع نص `Cat Lists` فوق آخر عنصر `h3` المدمج في العنصر `section` الاخير. ربما قمت بحذف عنصر `h2` عن طريق الخطأ.

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
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
--fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>

      </section>
--fcc-editable-region--
    </main>
  </body>
</html>
```

