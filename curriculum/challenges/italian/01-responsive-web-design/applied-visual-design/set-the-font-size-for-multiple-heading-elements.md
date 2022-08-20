---
id: 587d781c367417b2b2512ac2
title: Impostare la dimensione del carattere per più elementi di intestazione
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

La proprietà `font-size` è usata per specificare quanto grande è il testo in un dato elemento. Questa regola può essere utilizzata per più elementi per creare coerenza visiva del testo in una pagina. In questa sfida, imposterai i valori per tutti i tag da `h1` a `h6` per bilanciare le dimensioni dell'intestazione.

# --instructions--

  <p>Nel tag <code>style</code>, imposta la dimensione del font (<code>font-size</code>) per:</p>

  <ul>
    <li>Il tag <code>h1</code> a 68px.</li>
    <li>Il tag <code>h2</code> a 52px.</li>
    <li>Il tag <code>h3</code> a 40px.</li>
    <li>Il tag <code>h4</code> a 32px.</li>
    <li>Il tag <code>h5</code> a 21px.</li>
    <li>Il tag <code>h6</code> a 14px.</li>
  </ul>

# --hints--

Il codice dovrebbe impostare la proprietà `font-size` per il tag `h1` a 68 pixel.

```js
 const fontSizeOfh1 = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('font-size');
 assert(fontSizeOfh1 === '68px');
```

Il codice dovrebbe impostare la proprietà `font-size` per il tag `h2` a 52 pixel.

```js
 const fontSizeOfh2 = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('font-size');
 assert(fontSizeOfh2 === '52px');
```

Il codice dovrebbe impostare la proprietà `font-size` per il tag `h3` a 40 pixel.

```js
 const fontSizeOfh3 = new __helpers.CSSHelp(document).getStyle('h3')?.getPropertyValue('font-size');
 assert(fontSizeOfh3 === '40px');
```

Il codice dovrebbe impostare la proprietà `font-size` per il tag `h4` a 32 pixel.

```js
 const fontSizeOfh4 = new __helpers.CSSHelp(document).getStyle('h4')?.getPropertyValue('font-size');
 assert(fontSizeOfh4 === '32px');
```

Il codice dovrebbe impostare la proprietà `font-size` per il tag `h5` a 21 pixel.

```js
 const fontSizeOfh5 = new __helpers.CSSHelp(document).getStyle('h5')?.getPropertyValue('font-size');
 assert(fontSizeOfh5 === '21px');
```

Il codice dovrebbe impostare la proprietà `font-size` per il tag `h6` a 14 pixel.

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
