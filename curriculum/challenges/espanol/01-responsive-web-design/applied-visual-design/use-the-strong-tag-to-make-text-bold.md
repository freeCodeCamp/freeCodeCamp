---
id: 587d781a367417b2b2512ab7
title: Utiliza la etiqueta strong para poner el texto en negrita
challengeType: 0
videoUrl: 'https://scrimba.com/c/ceJNBSb'
forumTopicId: 301080
dashedName: use-the-strong-tag-to-make-text-bold
---

# --description--

Para poner el texto en negrita, puedes usar la etiqueta `strong`. Esto se usa a menudo para llamar la atención sobre el texto y simbolizar que es importante. Con la etiqueta `strong`, el navegador aplica el CSS de `font-weight: bold;` al elemento.

# --instructions--

Envuelve una etiqueta `strong` alrededor del texto `Stanford University` dentro de la etiqueta `p` (no incluyas el punto).

# --hints--

Tu código debe agregar una etiqueta `strong` al lenguaje de marcado.

```js
assert($('strong').length == 1);
```

La etiqueta `strong` debe estar dentro de la etiqueta `p`.

```js
assert($('p').children('strong').length == 1);
```

La etiqueta `strong` debe envolver el texto `Stanford University`.

```js
assert(
  $('strong')
    .text()
    .match(/^Stanford University\.?$/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
