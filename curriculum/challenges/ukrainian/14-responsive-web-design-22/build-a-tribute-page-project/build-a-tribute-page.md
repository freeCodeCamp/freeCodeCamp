---
id: bd7158d8c442eddfaeb5bd18
title: Створіть пам'ятну сторінку
challengeType: 14
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**Мета:** Створити застосунок, функціонально схожий до <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a>

**Історія користувача:**

1. Ваша пам'ятна сторінка повинна містити елемент `main` з відповідним `id` зі значенням `main`, який містить всі інші елементи
1. Ви повинні бачити елемент з `id` зі значенням `title`, який містить рядок (наприклад, текст), що описує предмет пам'ятної сторінки (наприклад, «Доктор Норман Борлаґ»)
1. Ви повинні побачити елемент `figure` або `div` з `id` зі значенням `img-div`
1. В межах елемента `#img-div` ви маєте бачити елемент `img` з відповідним `id="image"`
1. В межах елемента `#img-div` ви маєте бачити елемент з відповідним `id="img-caption"`, який містить текст, що описує зображення, показане в `#img-div`
1. Ви маєте бачити елемент з відповідним `id="tribute-info"`, який містить текст, що описує предмет пам'ятної сторінки
1. Ви маєте бачити елемент `a` з відповідним `id="tribute-link"`, який посилає на зовнішній сайт, що містить додаткову інформацію про предмет пам'ятної сторінки. ПІДКАЗКА: ви повинні надати своєму елементу атрибут `target` та встановити його на `_blank`, щоб ваше посилання відкривалося в новій вкладці
1. Ваш `#image` повинен використовувати властивості `max-width` та `height`, щоб змінювати розмір відповідно до ширини батьківського елемента, не перевищуючи початковий розмір
1. Ваш елемент `img` повинен бути зцентрованим відповідно до батьківського елемента

Виконайте історію користувача та пройдіть тести, наведені нижче, щоб завершити цей проєкт. Оформте за власним стилем. Щасливого кодування!

**Примітка:** Переконайтеся, що додали `<link rel="stylesheet" href="styles.css">` до HTML для прив'язки з аркушем стилів та застосували CSS

# --hints--

Ви повинні мати елемент `main` з `id` зі значенням `main`.

```js
const el = document.getElementById('main')
assert(!!el && el.tagName === 'MAIN')
```

Ваші `#img-div`, `#image`, `#img-caption`, `#tribute-info` та `#tribute-link` повинні бути нащадками `#main`.

```js
const el1 = document.querySelector('#main #img-div')
const el2 = document.querySelector('#main #image')
const el3 = document.querySelector('#main #img-caption')
const el4 = document.querySelector('#main #tribute-info')
const el5 = document.querySelector('#main #tribute-link')
assert(!!el1 & !!el2 && !!el3 && !!el4 && !!el5)
```

Ви повинні мати елемент з `id` зі значенням `title`.

```js
const el = document.getElementById('title')
assert(!!el)
```

Ваш `#title` не повинен бути порожнім.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)

```

Ви повинні мати елемент `figure` або `div` з `id` зі значенням `img-div`.

```js
const el = document.getElementById('img-div')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGURE'))
```

Ви повинні мати елемент `img` з `id` зі значенням `image`.

```js
const el = document.getElementById('image')
assert(!!el && el.tagName === 'IMG')
```

Ваш `#image` повинен бути нащадком `#img-div`.

```js
const el = document.querySelector('#img-div #image')
assert(!!el)
```

Ви повинні мати елемент `figcaption` або `div` з `id` зі значенням `img-caption`.

```js
const el = document.getElementById('img-caption')
assert(!!el && (el.tagName === 'DIV' || el.tagName === 'FIGCAPTION'))
```

Ваш `#img-caption` повинен бути нащадком `#img-div`.

```js
const el = document.querySelector('#img-div #img-caption')
assert(!!el)
```

Ваш `#img-caption` не повинен бути порожнім.

```js
const el = document.getElementById('img-caption')
assert(!!el && el.innerText.length > 0)
```

Ви повинні мати елемент з `id` зі значенням `tribute-info`.

```js
const el = document.getElementById('tribute-info')
assert(!!el)
```

Ваш `#tribute-info` не повинен бути порожнім.

```js
const el = document.getElementById('tribute-info')
assert(!!el && el.innerText.length > 0)
```

Ви повинні мати елемент `a` з `id` зі значенням `tribute-link`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.tagName === 'A')
```

Ваш `#tribute-link` повинен мати атрибут `href` та значення.

```js
const el = document.getElementById('tribute-link')
assert(!!el && !!el.href && el.href.length > 0)
```

Ваш `#tribute-link` повинен мати атрибут `target` зі значенням `_blank`.

```js
const el = document.getElementById('tribute-link')
assert(!!el && el.target === '_blank')
```

Ваш елемент `img` повинен мати `display` зі значенням `block`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display')
assert(style === 'block')
```

Ваш `#image` повинен мати `max-width` зі значенням `100%`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width')
assert(style === '100%')
```

Ваш `#image` повинен мати `height` зі значенням `auto`.

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

Ваш `#image` повинен бути зцентрованим відповідно до батьківського елемента.

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
