---
id: 6140d10d50636e14695013b2
title: الخطوة 9
challengeType: 0
dashedName: step-9
---

# --description--

قم بإنشاء منتقي لاستهداف عنصر `.line` الثاني. قم بتعيين خاصية `transform` إلى `rotate(60deg)`.

تذكر أن خاصية `transform` تسمح لك بالتلاعب بشكل عنصر ما. في هذه الحالة، باستخدام قيمة `rotate(60deg)` سيتم تدوير العنصر حول نقطة `transform-origin` بمقدار 60 درجة على مدار الساعة (clockwise).

# --hints--

يجب عليك إنشاء منتقي `.line:nth-of-type(2)`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.line:nth-of-type(2)'));
```

يجب أن يكون لمنتقي `.line:nth-of-type(2)` خاصية `transform` بقيمة `rotate(60deg)`.

```js
assert(new __helpers.CSSHelp(document).getStyle('.line:nth-of-type(2)')?.transform === 'rotate(60deg)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Ferris Wheel</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <div class="wheel">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>

      <div class="cabin"></div>
      <div class="cabin"></div>
      <div class="cabin"></div>
      <div class="cabin"></div>
      <div class="cabin"></div>
      <div class="cabin"></div>
    </div>
  </body>
</html>
```

```css
.wheel {
  border: 2px solid black;
  border-radius: 50%;
  margin-left: 50px;
  position: absolute;
  height: 55vw;
  width: 55vw;
  max-width: 500px;
  max-height: 500px;
}

.line {
  background-color: black;
  width: 50%;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0% 0%;
}

--fcc-editable-region--

--fcc-editable-region--
```
