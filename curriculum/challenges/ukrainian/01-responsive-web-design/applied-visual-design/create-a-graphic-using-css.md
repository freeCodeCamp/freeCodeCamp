---
id: 587d78a6367417b2b2512add
title: Створення графіки за допомогою CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

Керуючи різними селекторами та властивостями, ви можете створювати цікаві фігури. Однією з найпростіших фігур є фігура півмісяця. Для цього завдання вам необхідно використати властивість `box-shadow`, яка задає тінь елементу, та властивість `border-radius`, яка контролює округлення кутів елементу.

Ви створите круглий, прозорий об'єкт з чіткою тінню, що трохи зсунута в сторону і повторює форму півмісяця.

Щоб створити круглий об'єкт, необхідно задати властивості `border-radius` значення 50%.

Як ви могли помітити в попередньому завданні, властивість `box-shadow` приймає значення для `offset-x`, `offset-y`, `blur-radius`, `spread-radius` та `color`, в такому ж порядку. Значення `blur-radius` і `spread-radius` необов'язкові.

# --instructions--

Керуйте квадратним елементом у редакторі, щоб створити форму місяця. Спочатку змініть `background-color` на `transparent`, тоді надайте властивості `border-radius` значення 50%, щоб створити круглу форму. Зрештою, змініть властивість `box-shadow`, щоб встановити `offset-x` на 25 пікселів, `offset-y` на 10 пікселів, `blur-radius` на 0, `spread-radius` на 0, а `color` на `blue`.

# --hints--

Значення властивості `background-color` має бути встановлено на `transparent`.

```js
assert(code.match(/background-color:\s*?transparent;/gi));
```

Значення властивості `border-radius` має бути встановлено на `50%`.

```js
assert(code.match(/border-radius:\s*?50%;/gi));
```

Значення властивості `box-shadow` повинне бути 25 пікселів для `offset-x`, 10 пікселів для `offset-y`, 0 для `blur-radius`, 0 для `spread-radius`, а також `blue` для `color`.

```js
assert(
  code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }

</style>
<div class="center"></div>
```

# --solutions--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>
```
