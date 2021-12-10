---
id: 587d781c367417b2b2512ac3
title: Встановлення насиченості для кількох елементів заголовку
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

В останньому завданні ви встановлювали `font-size` кожного тегу, тут ви зміните `font-weight`.

Властивість `font-weight` визначає наскільки символи в тексті будуть товстими або тонкими.

# --instructions--

<ul><li>Встановіть <code>font-weight</code> <code>h1</code> тегу до 800.</li><li>Встановіть <code>font-weight</code> <code>h2</code> тегу до 600.</li><li>Встановіть <code>font-weight</code> <code>h3</code> тегу до 500.</li><li>Встановіть <code>font-weight</code> <code>h4</code> тегу до 400.</li><li>Встановіть <code>font-weight</code> <code>h5</code> тегу до 300.</li><li>Встановіть <code>font-weight</code> <code>h6</code> тегу до 200.</li></ul>

# --hints--

Ваш код має встановити властивість `font-weight` для `h1` тегу до 800.

```js
assert($('h1').css('font-weight') == '800');
```

Ваш код має встановити властивість `font-weight` для `h2` тегу до 600.

```js
assert($('h2').css('font-weight') == '600');
```

Ваш код має встановити властивість `font-weight` для `h3` тегу до 500.

```js
assert($('h3').css('font-weight') == '500');
```

Ваш код має встановити властивість `font-weight` для `h4` тегу до 400.

```js
assert($('h4').css('font-weight') == '400');
```

Ваш код має встановити властивість `font-weight` для `h5` тегу до 300.

```js
assert($('h5').css('font-weight') == '300');
```

Ваш код має встановити властивість `font-weight` для `h6` тегу до 200.

```js
assert($('h6').css('font-weight') == '200');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
    font-weight: 800;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
  }
  h4 {
    font-size: 32px;
    font-weight: 400;
  }
  h5 {
    font-size: 21px;
    font-weight: 300;
  }
  h6 {
    font-size: 14px;
    font-weight: 200;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```
