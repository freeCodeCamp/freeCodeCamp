---
id: 587d781c367417b2b2512ac2
title: Встановлення розміру шрифту для для кількох елементів заголовку
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

Властивість `font-size` використовується для визначення розміру тексту в заданому елементі. Це правило можна застосовувати для кількох елементів, щоб створити візуальну узгодженість тексту на сторінці. У цьому завданні ви встановите значення для всіх `h1` по `h6` тегів, щоб вирівняти розмір заголовків.

# --instructions--

  <p>У тегах <code>style</code>, встановіть <code>font-size</code> у:</p>

  <ul>
    <li>Тег <code>h1</code> до 68px.</li>
    <li>Тег <code>h2</code> до 52px.</li>
    <li>Тег <code>h3</code> до 40px.</li>
    <li>Тег <code>h4</code> до 32px.</li>
    <li>Тег <code>h5</code> до 21px.</li>
    <li>Тег <code>h6</code> до 14px.</li>
  </ul>

# --hints--

Ваш код має встановити властивість `font-size` для `h1` тегу до 68 пікселів.

```js
 const fontSizeOfh1 = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('font-size');
 assert(fontSizeOfh1 === '68px');
```

Ваш код має встановити властивість `font-size` для `h2` тегу до 52 пікселів.

```js
 const fontSizeOfh2 = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('font-size');
 assert(fontSizeOfh2 === '52px');
```

Ваш код має встановити властивість `font-size` для `h3` тегу до 40 пікселів.

```js
 const fontSizeOfh3 = new __helpers.CSSHelp(document).getStyle('h3')?.getPropertyValue('font-size');
 assert(fontSizeOfh3 === '40px');
```

Ваш код має встановити властивість `font-size` для `h4` тегу до 32 пікселів.

```js
 const fontSizeOfh4 = new __helpers.CSSHelp(document).getStyle('h4')?.getPropertyValue('font-size');
 assert(fontSizeOfh4 === '32px');
```

Ваш код має встановити властивість `font-size` для `h5` тегу до 21 пікселів.

```js
 const fontSizeOfh5 = new __helpers.CSSHelp(document).getStyle('h5')?.getPropertyValue('font-size');
 assert(fontSizeOfh5 === '21px');
```

Ваш код має встановити властивість `font-size` для `h6` тегу до 14 пікселів.

```js
 const fontSizeOfh6 = new __helpers.CSSHelp(document).getStyle('h6')?.getPropertyValue('font-size');
 assert(fontSizeOfh6 === '14px');
```

# --seed--

## --seed-contents--

```html
<style>






</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
  }
  h2 {
    font-size: 52px;
  }
  h3 {
    font-size: 40px;
  }
  h4 {
    font-size: 32px;
  }
  h5 {
    font-size: 21px;
  }
  h6 {
    font-size: 14px;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```
