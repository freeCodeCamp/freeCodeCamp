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

# --instructions--

En las etiquetas `style`, establece el `font-size` de:

- Etiqueta `h1` a 68px.
- Etiqueta `h2` a 52px.
- Etiqueta `h3` a 40px.
- Etiqueta `h4` a 32px.
- Etiqueta `h5` a 21px.
- Etiqueta `h6` a 14px.

# --hints--

Tu código debe establecer la propiedad `font-size` para la etiqueta `h1` en 68 píxeles.

```js
 const fontSizeOfh1 = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('font-size');
 assert(fontSizeOfh1 === '68px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h2` en 52 píxeles.

```js
 const fontSizeOfh2 = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('font-size');
 assert(fontSizeOfh2 === '52px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h3` en 40 píxeles.

```js
 const fontSizeOfh3 = new __helpers.CSSHelp(document).getStyle('h3')?.getPropertyValue('font-size');
 assert(fontSizeOfh3 === '40px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h4` en 32 píxeles.

```js
 const fontSizeOfh4 = new __helpers.CSSHelp(document).getStyle('h4')?.getPropertyValue('font-size');
 assert(fontSizeOfh4 === '32px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h5` en 21 píxeles.

```js
 const fontSizeOfh5 = new __helpers.CSSHelp(document).getStyle('h5')?.getPropertyValue('font-size');
 assert(fontSizeOfh5 === '21px');
```

Tu código debe establecer la propiedad `font-size` para la etiqueta `h6` en 14 píxeles.

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
