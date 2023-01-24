---
id: bd7158d8c442eddfaeb5bd18
title: أنشئ مشروع صفحة الثناء
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**Objective:** ابني تطبيق يشابه وظيفيا إلي <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a>

**المتطلبات:**

1. يجب أن يكون لصفحتك الثناء عنصر `main` مع `id` بقيمة `main`، الذي يحتوي على جميع العناصر الأخرى
1. يجب أن ترى عنصرا مع `id` بقيمة `title`، الذي يحتوي على مقطع نصي (string)، يصف موضوع صفحة الثناء (مثل "الدكتور نورمان بورلاوغ")
1. يجب أن ترى إما عنصر `figure` أو `div` مع `id` بقيمة `img-div`
1. داخل عنصر `#img-div` يمكنك رؤية عنصر `img` مع `id="image"`
1. داخل عنصر `#img-div` ، يجب أن ترى عنصرا مع `id="img-caption"` يحتوي على محتوى نصي يصف الصورة المعروضة في `#img-div`
1. يجب أن ترى عنصرا مع `id="tribute-info"`، الذي يحتوي على محتوى نصي يصف موضوع صفحة الثناء
1. يجب أن ترى عنصر `a` مع `id="tribute-link"` مقابل له، والذي يربط بموقع خارجي، والذي يحتوي على معلومات إضافية عن موضوع صفحة الثناء tribute page. تلميح: يجب أن تعطي العنصر الخاص بك سمة `target` بقيمة `_blank` لكي يفتح الرابط الخاص بك في علامة تبويب جديدة
1. `#image` الخاص بك يجب أن تستخدم خصائص `max-width` و `height` لتغيير الحجم بشكل مستجيب، نسبة إلى عرض العنصر الاب، دون تجاوز حجمه الأصلي
1. عنصر `img` الخاص بك يجب أن يتمركز داخل العنصر الاب

أكمل المتطلبات و قم باجتياز جميع الاختبارات أدناه لإكمال هذا المشروع. أعطيها أسلوبك الشخصي الخاص. برمجة سعيدة!

**ملاحظة:** تأكد من إضافة `<link rel="stylesheet" href="styles.css">` في HTML الخاص بك لربط ورقة الأنماط (stylesheet) الخاصة بك وتطبيق الـ CSS

# --hints--

يجب أن يكون لديك عنصر `main` مع `id` بقيمة `main`.

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

`#img-div` و`#image` و `#img-caption` و `#tribute-info` و `#tribute-link` يجب أن تكون كلها تابعة لـ `#main`.

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

يجب أن يكون لديك عنصر مع `id` بقيمة `title`.

```js
const el = document.getElementById('title')
assert(!!el)
```

يجب ألا يكون `#title` فارغاً.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

يجب أن يكون لديك عنصر `figure` أو `div` مع `id` بقيمة `img-div`.

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

يجب أن يكون لديك عنصر `img` مع `id` بقيمة `image`.

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

`#image` الخاص بك يجب أن يكون تابعا لـ `#img-div`.

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

يجب أن يكون لديك عنصر `figcaption` أو `div` مع `id` بقيمة `img-caption`.

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

`#img-caption` الخاص بك يجب أن يكون تابعا لـ `#img-div`.

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

يجب ألا يكون `#img-caption` فارغاً.

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

يجب أن يكون لديك عنصر مع `id` بقيمة `tribute-info`.

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

يجب ألا يكون `#tribute-info` فارغاً.

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

يجب أن يكون لديك عنصر `a` مع `id` بقيمة `tribute-link`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

`#tribute-link` يجب أن يحتوي على السمة والقيمة لـ `href`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

يجب أن يحتوي عنصر `#tribute-link` على سمة `target` بقيمة `_blank`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

`img` الخاص بك يجب أن يكون له `display` بقيمة `block`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display')
assert(style === 'block')
```

`#image` الخاص بك يجب أن يكون له `max-width` بقيمة `100%`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width')
assert(style === '100%')
```

`#image` الخاص بك يجب أن يكون له `height` بقيمة `auto`.

```js
// taken from the testable-projects repo
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const oldDisplayValue = imgStyle.getPropertyValue('display');
const oldDisplayPriority = imgStyle.getPropertyPriority('display');
img?.style.setProperty('display', 'none', 'important');
const heightValue = imgStyle?.getPropertyValue('height')
img?.style.setProperty('display', oldDisplayValue, oldDisplayPriority);
assert(heightValue === 'auto')
```

`#image` الخاص بك يجب أن يتمركز داخل العنصر الاب.

```js
// taken from the testable-projects repo
const img = document.getElementById('image'),
  imgParent = img?.parentElement,
  imgLeft = img?.getBoundingClientRect().left,
  imgRight = img?.getBoundingClientRect().right,
  parentLeft = imgParent?.getBoundingClientRect().left,
  parentRight = imgParent?.getBoundingClientRect().right,
  leftMargin = imgLeft - parentLeft,
  rightMargin = parentRight - imgRight;
assert(leftMargin - rightMargin < 6 && rightMargin - leftMargin < 6)
```

# --seed--

## --seed-contents--

```html

```

```css

```

## --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      href="https://fonts.googleapis.com/css?family=Pacifico"
      rel="stylesheet"

    />
    <link
      href="https://fonts.googleapis.com/css?family=Lobster"
      rel="stylesheet"

    />
    <link href="styles.css" rel="stylesheet" />
    <title>Tribute Page</title>
  </head>
  <body>
    <h1>Tribute Page</h1>
    <p>The below card was designed as a tribute page for freeCodeCamp.</p>
    <main id="main">
      <div id="img-div">
        <img
          id="image"
          class="border"
          src="https://upload.wikimedia.org/wikipedia/en/5/53/Pok%C3%A9mon_Togepi_art.png"
          alt="An image of Togepi"
        />
        <figcaption id="img-caption">Togepi, happy as always.</figcaption>
      </div>
      <h2 id="title">Togepi</h2>
      <hr />
      <div id="tribute-info">
        <p>
          Togepi was first discovered in the Johto region, when Ash Ketchum
          discovered a mysterious egg. However, when the egg hatched, Togepi saw
          Ash's friend Misty first and imprinted on her. Like many other
          creatures, this imprinting process created a bond and Togepi views
          Misty as his mother.
        </p>
        <p>
          Togepi is a very childlike Pokemon, and is very emotionally
          expressive. He demonstrates extreme levels of joy and sadness.
        </p>
        <hr />
        <p><u>Battle Information</u></p>
        <ul style="list-style-type: none">
          <li>Type: Fairy</li>
          <li>Evolutions: Togepi -> Togetic -> Togekiss</li>
          <li>Moves: Growl, Pound, Sweet Kiss, Charm</li>
          <li>Weaknesses: Poison, Steel</li>
          <li>Resistances: Dragon</li>
        </ul>
        <p>
          Check out this
          <a
            id="tribute-link"
            href="https://bulbapedia.bulbagarden.net/wiki/Togepi_(Pok%C3%A9mon)"
            target="_blank"
            rel="noopener noreferrer"
            >Bulbapedia article on Togepi</a
          >
          for more information on this great Pokemon.
        </p>
      </div>
    </main>
  </body>
  <footer>
    <a href="../">Return to Project List</a> |
    <a href="https://www.nhcarrigan.com">Return to HomePage</a>
  </footer>
</html>
```

```css
body {
  background-color: #3a3240;
  color: white;
}
main {
  background-color: #92869c;
  font-family: Lobster;
  max-width: 500px;
  margin: 20px auto;
  color: black;
  border-radius: 50px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
}
h2 {
  text-align: center;
  font-size: 20pt;
  font-family: Pacifico;
}
body {
  text-align: center;
  font-size: 12pt;
}
footer {
  text-align: center;
  font-size: 10pt;
}
.border {
  border-color: black;
  border-width: 5px;
  border-style: solid;
}
#image {
  height: auto;
  display: block;
  margin: auto;
  max-width: 100%;
  border-radius: 50%;
}
#img-caption {
  font-size: 10pt;
}
a:not(#tribute-link) {
  color: white;
}
hr {
  border-color: black;
}
```
