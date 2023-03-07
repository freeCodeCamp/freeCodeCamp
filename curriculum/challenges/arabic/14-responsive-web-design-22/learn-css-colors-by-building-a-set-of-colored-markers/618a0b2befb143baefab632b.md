---
id: 618a0b2befb143baefab632b
title: الخطوة 37
challengeType: 0
dashedName: step-37
---

# --description--

لاحظ أن اللونين الأحمر و cyan ساطعان جدًا بجوار بعضهما البعض. يمكن أن يؤدي هذا التباين إلى تشتيت الانتباه إذا تم الإفراط في استخدامه على موقع ويب، ويمكن أن يجعل قراءة النص صعبة إذا تم وضعه على خلفية ملونة تكميليا (complementary-colored).

من الأفضل اختيار لون واحد باعتباره اللون السائد، واستخدام لونه التكميلي كلكنة للفت الانتباه إلى محتوى معين على الصفحة.

First, in the `h1` rule, use the `rgb` function to set its `background-color` to cyan.

# --hints--

لا يجب عليك إزالة أو تعديل خاصية `text-align` أو قيمتها.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.textAlign === 'center');
```

يجب أن يكون لقاعدة CSS لـ `h1` الخاصية `background-color` بقيمة `rgb(0, 255, 255)`.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.backgroundColor === 'rgb(0, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
--fcc-editable-region--
h1 {
  text-align: center;
}
--fcc-editable-region--

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

.one {
  background-color: rgb(255, 0, 0);
}

.two {
  background-color: rgb(0, 255, 255);
}

.three {
  background-color: rgb(0, 0, 0);
}

```
