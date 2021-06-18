---
id: 587d781c367417b2b2512ac3
title: Impostare lo spessore del carattere per più elementi di intestazione
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

Hai impostatio il `font-size` per ogni tag di intestazione nell'ultima sfida, qui potrai regolare il `font-weight`.

La proprietà `font-weight` imposta quanto grossi o sottili devono apparire i caratteri in una sezione di testo.

# --instructions--

<ul><li>Imposta il <code>font-weight</code> del tag <code>h1</code> a 800.</li><li>Imposta il <code>font-weight</code> del tag <code>h2</code> a 600.</li><li>Imposta il <code>font-weight</code> del tag <code>h3</code> a 500.</li><li>Imposta il <code>font-weight</code> del tag <code>h4</code> a 400.</li><li>Imposta il <code>font-weight</code> del tag <code>h5</code> a 300.</li><li>Imposta il <code>font-weight</code> del tag <code>h6</code> a 200.</li></ul>

# --hints--

Il tuo codice dovrebbe impostare proprietà `font-weight` per il tag `h1` a 800.

```js
assert($('h1').css('font-weight') == '800');
```

Il tuo codice dovrebbe impostare la proprietà `font-weight` per il tag `h2` a 600.

```js
assert($('h2').css('font-weight') == '600');
```

Il tuo codice dovrebbe impostare la proprietà `font-weight` per il tag `h3` a 500.

```js
assert($('h3').css('font-weight') == '500');
```

Il tuo codice dovrebbe impostare proprietà `font-weight` per il tag `h4` a 400.

```js
assert($('h4').css('font-weight') == '400');
```

Il tuo codice dovrebbe impostare la proprietà `font-weight` per il tag `h5` a 300.

```js
assert($('h5').css('font-weight') == '300');
```

Il tuo codice dovrebbe impostare proprietà `font-weight` per il tag `h6` a 200.

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
