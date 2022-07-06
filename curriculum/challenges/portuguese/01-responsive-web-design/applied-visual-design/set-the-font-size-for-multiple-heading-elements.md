---
id: 587d781c367417b2b2512ac2
title: Definir o tamanho da tipografia para vários elementos de cabeçalho
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

A propriedade `font-size` é usada para especificar o quão grande será o texto em um determinado elemento. Essa propriedade pode ser usada em múltiplos elementos para criar uma consistência visual dos textos na página. Nesse desafio, você vai definir os tamanhos das tipografias das tags `h1` até `h6` para balancear os tamanhos dos cabeçalhos.

# --instructions--

  <p>Na tag <code>style</code>, defina a propriedade <code>font-size</code> das tags:</p>

  <ul>
    <li><code>h1</code> para 68px.</li>
    <li><code>h2</code> para 52px.</li>
    <li><code>h3</code> para 40px.</li>
    <li><code>h4</code> para 32px.</li>
    <li><code>h5</code> para 21px.</li>
    <li><code>h6</code> para 14px.</li>
  </ul>

# --hints--

A tag `h1` deve ter a propriedade `font-size` com o valor de 68 pixels.

```js
 const fontSizeOfh1 = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('font-size');
 assert(fontSizeOfh1 === '68px');
```

A tag `h2` deve ter a propriedade `font-size` com o valor de 52 pixels.

```js
 const fontSizeOfh2 = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('font-size');
 assert(fontSizeOfh2 === '52px');
```

A tag `h3` deve ter a propriedade `font-size` com o valor de 40 pixels.

```js
 const fontSizeOfh3 = new __helpers.CSSHelp(document).getStyle('h3')?.getPropertyValue('font-size');
 assert(fontSizeOfh3 === '40px');
```

A tag `h4` deve ter a propriedade `font-size` com o valor de 32 pixels.

```js
 const fontSizeOfh4 = new __helpers.CSSHelp(document).getStyle('h4')?.getPropertyValue('font-size');
 assert(fontSizeOfh4 === '32px');
```

A tag `h5` deve ter a propriedade `font-size` com o valor de 21 pixels.

```js
 const fontSizeOfh5 = new __helpers.CSSHelp(document).getStyle('h5')?.getPropertyValue('font-size');
 assert(fontSizeOfh5 === '21px');
```

A tag `h6` deve ter a propriedade `font-size` com o valor de 14 pixels.

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
