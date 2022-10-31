---
id: 5f356ed6cf6eab5f15f5cfe6
title: الخطوة 20
challengeType: 0
dashedName: step-20
---

# --description--

يُستخدم عنصر `div` بشكل أساسي لأغراض تخطيط التصميم بخلاف عناصر المحتوى الأخرى التي استخدمتها حتى الآن. أضف عنصر `div` داخل عنصر `body` ثم حرك جميع العناصر الأخرى داخل `div` الجديد.

# --hints--

يجب أن يكون لديك العلامة المفتوحة (opening tag) الآتية `<div>`.

```js
assert(code.match(/<div>/i));
```

يجب أن يكون لديك العلامة المغلقة (closing tag) الآتي `</div>`.

```js
assert(code.match(/<\/div>/i));
```

لا يجب عليك تغيير عنصر `body` الحالي. تأكد من أنك لم تقم بحذف علامة الإغلاق (closing tag).

```js
assert($('body').length === 1);
```

يجب أن تكون علامة `div` الخاصة بك متداخلة في `body`.

```js
const div = $('div')[0];
assert(div.parentElement.tagName === 'BODY');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cafe Menu</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
--fcc-editable-region--
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```

