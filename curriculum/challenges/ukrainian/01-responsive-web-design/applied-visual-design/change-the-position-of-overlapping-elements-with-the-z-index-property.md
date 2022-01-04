---
id: 587d78a3367417b2b2512acf
title: Змініть розташування елементів, які перекриваються, за допомогою властивості z-index
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

Коли елементи розташовані з перекриттям (тобто використовується `position: absolute | relative | fixed | sticky`), елемент, що з'явився пізніше в розмітці HTML, буде за замовчуванням знаходитися над іншими. Однак властивість `z-index` може впорядкувати розташування елементів, які накладаються один на одного. Це значення має бути цілим числом, а не дробом, а більші значення властивості `z-index` рухають його вище відносно менших значень.

# --instructions--

Додайте властивість `z-index` до елемента з назвою класу `first` (червоний прямокутник), встановіть значення 2, щоб він перекрив інший елемент (блакитний прямокутник).

# --hints--

Елемент з класом `first` повинен мати значення `z-index`, із значенням 2.

```js
assert($('.first').css('z-index') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

# --solutions--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```
