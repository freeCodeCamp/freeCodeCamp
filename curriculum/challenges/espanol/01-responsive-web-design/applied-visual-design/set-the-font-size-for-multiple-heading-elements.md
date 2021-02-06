---
id: 587d781c367417b2b2512ac2
title: Establece el tamaño de fuente para varios elementos de títulos
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

La propiedad `font-size` se usa para especificar que tan grande es el texto en un elemento dado. Esta regla se puede utilizar para varios elementos para crear coherencia visual del texto en una página. En este desafío, establecerá los valores para todas las etiquetas `h1` a `h6` para equilibrar los tamaños de los títulos.

# --instructions-- <p>En las etiquetas <code>style</code>, establece el <code>font-size</code> de:</p>

  <ul>
    <li>Etiqueta <code>h1</code> a 68px.</li>
    <li>Etiqueta <code>h2</code> a 52px.</li>
    <li>Etiqueta <code>h3</code> a 40px.</li>
    <li>Etiqueta <code>h4</code> a 32px.</li>
    <li>Etiqueta <code>h5</code> a 21px.</li>
    <li>Etiqueta <code>h6</code> a 14px.</li>
  </ul>

# --hints--

Tu código debe establecer la propiedad `font-size` para la etiqueta `h1` en 68 píxeles.

```js
assert($('h1').css('font-size') == '68px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h2` en 52 píxeles.

```js
assert($('h2').css('font-size') == '52px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h3` en 40 píxeles.

```js
assert($('h3').css('font-size') == '40px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h4` en 32 píxeles.

```js
assert($('h4').css('font-size') == '32px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h5` en 21 píxeles.

```js
assert($('h5').css('font-size') == '21px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h6` en 14 píxeles.

```js
const regex = /h6\s*\{\s*font-size\s*:\s*14px\s*(;\s*\}|\})/i;
assert.strictEqual(true, regex.test(code));
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
