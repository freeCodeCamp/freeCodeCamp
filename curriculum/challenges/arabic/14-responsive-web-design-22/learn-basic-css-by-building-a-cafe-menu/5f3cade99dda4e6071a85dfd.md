---
id: 5f3cade99dda4e6071a85dfd
title: الخطوة 46
challengeType: 0
dashedName: step-46
---

# --description--

سوف تعود إلى تصميم القائمة بعد بضع خطوات، ولكن الآن، أضف عنصر `section` ثان تحت الأول لعرض الحَلْوَيَات (desserts) المقدمة من المقهى (cafe).

# --hints--

يجب أن يكون لديك علامة مفتوحة (opening tag) الآتي `section`.

```js
assert(code.match(/<section>/ig).length === 2);
```

يجب أن يكون لديك علامة مغلقة (closing tag) الآتي `section`.

```js
assert(code.match(/<\/section>/ig).length === 2);
```

لا يجب عليك تغيير عنصر `main` الحالي.

```js
assert($('main').length === 1);
```

عنصر `section` الجديد الخاص بك يجب أن يكون متداخلا في عنصر `main`.

```js
assert($('main').children('section').length === 2);
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
  <body>
    <div class="menu">
      <main>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
--fcc-editable-region--
        <section>
          <h2>Coffee</h2>
          <article class="item">
            <p class="flavor">French Vanilla</p><p class="price">3.00</p>
          </article>
          <article class="item">
            <p class="flavor">Caramel Macchiato</p><p class="price">3.75</p>
          </article>
          <article class="item">
            <p class="flavor">Pumpkin Spice</p><p class="price">3.50</p>
          </article>
          <article class="item">
            <p class="flavor">Hazelnut</p><p class="price">4.00</p>
          </article>
          <article class="item">
            <p class="flavor">Mocha</p><p class="price">4.50</p>
          </article>
        </section>
--fcc-editable-region--
      </main>
    </div>
  </body>
</html>
```

```css
body {
  background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
}

h1, h2, p {
  text-align: center;
}

.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}

.item p {
  display: inline-block;
}

.flavor {
  text-align: left;
  width: 75%;
}

.price {
  text-align: right;
  width: 25%
}
```

