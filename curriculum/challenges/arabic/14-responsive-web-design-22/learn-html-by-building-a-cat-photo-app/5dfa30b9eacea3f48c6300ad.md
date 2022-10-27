---
id: 5dfa30b9eacea3f48c6300ad
title: الخطوة 15
challengeType: 0
dashedName: step-15
---

# --description--

قم بتحويل الصورة إلى رابط عن طريق احاطتها بـ tags العنصر الضرورية. استخدم `https://freecatphotoapp.com` كقيمة السمة `href`.

# --hints--

يجب أن يكون لديك عنصر `img` بقيمة `src` من `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. ربما قمت بحذفها عن طريق الخطأ.

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

يجب أن يحتوي العنصر (`a`) على opening tag. Opening tags تكتب هكذا: `<elementName>`.

```js
assert(document.querySelectorAll('a').length >= 2);
```

يجب عليك إضافة opening tag واحد فقط للـ (`a`). الرجاء إزالة أي زيادات.

```js
assert(document.querySelectorAll('a').length === 2);
```

يجب أن يحتوي العنصر (`a`) على closing tag. Closing tags لها `/` مباشرة بعد رمز `<`.

```js
assert(code.match(/<\/a>/g).length >= 2);
```

يجب عليك إضافة closing tag واحد فقط للـ (`a`). الرجاء إزالة أي زيادات.

```js
assert(code.match(/<\/a>/g).length === 2);
```

عنصر (`a`) الخاص بك ليس لديه سمة `href`. تحقق من وجود مسافة بعد اسم الـ opening tag و/أو ان هناك مسافات قبل جميع أسماء السمات.

```js
assert(document.querySelector('a').hasAttribute('href'));
```

(`a`) الخاص بك يجب أن يحيل الي `https://freecatphotoapp.com`. إما أنك حذفت الـ URL أو لديك خطأ إملائي.

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

يجب أن يكون عنصر `img` الخاص بك متداخلا داخل عنصر الرابط (`a`). يجب أن يكون عنصر `img` بأكمله داخل الـ opening و الـ closing tags لعنصر الرابط (`a`).

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```

