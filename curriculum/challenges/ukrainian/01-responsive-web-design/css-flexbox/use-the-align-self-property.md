---
id: 587d78af367417b2b2512b00
title: Використання властивості align-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

Остання властивість flex елементів — це `align-self`. Ця властивість дозволяє вам налаштовувати кожне вирівнювання елемента окремо, а не робити це для всіх одночасно. Вона корисна, оскільки інші поширені техніки коригування, що використовуються у властивостях CSS `float`, `clear`, і `vertical-align`, не працюють із flex елементами.

`align-self` набуває того ж значення, що і `align-items`, та може замінити будь-яке значення, встановлене властивістю `align-items`.

# --instructions--

Додайте властивість CSS `align-self` до `#box-1` та `#box-2`. Надайте `#box-1` значення `center`, а `#box-2` значення `flex-end`.

# --hints--

Елемент `#box-1` повинен мати властивість `align-self` зі значенням `center`.

```js
assert($('#box-1').css('align-self') == 'center');
```

Елемент `#box-2` повинен мати властивість `align-self` зі значенням `flex-end`.

```js
assert($('#box-2').css('align-self') == 'flex-end');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
