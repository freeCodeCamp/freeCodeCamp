---
id: 5dfa30b9eacea3f48c6300ad
title: الخطوة 15
challengeType: 0
dashedName: step-15
---

# --description--

في الخطوات السابقة كنت تستخدم عنصر الرابط لتحويل النص إلى رابط. ويمكن أيضا تحويل أنواع أخرى من المحتوى إلى رابط عن طريق وضعه بداخل عنصر الرابط.

حول الصورة إلى رابط عن طريق إحاطتها بعلامات العنصر المناسب. استخدم `https://freecatphotoapp.com` كقيمة السمة `href`.

# --hints--

يجب أن يكون لديك عنصر `img` بقيمة `src` من `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. ربما حذفتها عن طريق الخطأ.

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

يجب أن يحتوي العنصر (`a`) على علامة الفتح. تكتب علامات الفتح هكذا: `<elementName>`.

```js
assert(document.querySelectorAll('a').length >= 2);
```

يجب عليك إضافة علامة فتح واحد فقط لـ (`a`). الرجاء إزالة أي زيادات.

```js
assert(document.querySelectorAll('a').length === 2);
```

يجب أن يحتوي العنصر (`a`) على علامة غلق. يجب أن تأتي علامات الغلق بـ `/` بعد رمز `<` مباشرة.

```js
assert(code.match(/<\/a>/g).length >= 2);
```

يجب عليك إضافة علامة غلق واحد فقط لـ (`a`). الرجاء إزالة أي زيادات.

```js
assert(code.match(/<\/a>/g).length === 2);
```

ليس لدي عنصرك (`a`) سمة `href`. تيقن من وجود مسافة بعد اسم علامة الفتح و/أو أن هناك مسافات قبل جميع أسماء السمات.

```js
assert(document.querySelector('a').hasAttribute('href'));
```

يجب أن يربط عنصرك (`a`) إلى `https://freecatphotoapp.com`. إما أنك حذفت الرابط (URL) أو لديك خطأ إملائي.

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

يجب أن يدخل عنصرك `img` داخل عنصر الرابط (`a`). يجب أن يكون عنصر `img` كله داخل العلامات فتح و العلامات غلق لعنصر الرابط (`a`).

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
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```

